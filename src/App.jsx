import { useCallback, useEffect, useRef, useState } from 'react';
import { CHAPTERS } from './data/chapters';

const SCROLL_LOCK_MS = 650;
const WHEEL_THRESHOLD = 25;

export default function App() {
  const [chapterIdx, setChapterIdx] = useState(0);
  const [pageIdx, setPageIdx] = useState(0);
  const lockRef = useRef(false);
  const touchStartY = useRef(null);

  const chapter = CHAPTERS[chapterIdx];
  const isLastPageInChapter = pageIdx === chapter.pages.length - 1;
  const isLastChapter = chapterIdx === CHAPTERS.length - 1;

  const lockScroll = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, SCROLL_LOCK_MS);
  }, []);

  const step = useCallback(
    (direction) => {
      if (lockRef.current) return;

      if (direction > 0) {
        if (pageIdx < chapter.pages.length - 1) {
          lockScroll();
          setPageIdx((p) => p + 1);
        } else if (chapterIdx < CHAPTERS.length - 1) {
          lockScroll();
          setChapterIdx((c) => c + 1);
          setPageIdx(0);
        }
      } else {
        if (pageIdx > 0) {
          lockScroll();
          setPageIdx((p) => p - 1);
        } else if (chapterIdx > 0) {
          lockScroll();
          const prevChapter = CHAPTERS[chapterIdx - 1];
          setChapterIdx((c) => c - 1);
          setPageIdx(prevChapter.pages.length - 1);
        }
      }
    },
    [chapter.pages.length, chapterIdx, lockScroll, pageIdx]
  );

  const goToChapter = useCallback(
    (nextChapterIdx) => {
      if (nextChapterIdx < 0 || nextChapterIdx >= CHAPTERS.length) return;
      lockScroll();
      setChapterIdx(nextChapterIdx);
      setPageIdx(0);
    },
    [lockScroll]
  );

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
      step(e.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        step(1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        step(-1);
      }
    };

    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      touchStartY.current = null;
      if (Math.abs(diff) > 40) {
        step(diff > 0 ? 1 : -1);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [step]);

  return (
    <div className="viewport" style={{ '--accent': chapter.accent }}>
      <header className="topbar">
        <button className="brand" onClick={() => goToChapter(0)}>
          YeoheungMinSsi
        </button>

        <nav className="chapter-nav" aria-label="Chapters">
          {CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              className={`chapter-tab ${idx === chapterIdx ? 'active' : ''}`}
              onClick={() => goToChapter(idx)}
              aria-current={idx === chapterIdx ? 'step' : undefined}
            >
              <span className="tab-num">{ch.number}</span>
              <span className="tab-title">{ch.title}</span>
            </button>
          ))}
        </nav>

        <div className="chapter-counter">
          {chapter.number} / 0{CHAPTERS.length}
        </div>
      </header>

      <aside className="page-dots" aria-label="Chapter pages">
        {chapter.pages.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === pageIdx ? 'active' : ''}`}
            onClick={() => setPageIdx(idx)}
            aria-label={`${chapter.title} ${idx + 1}페이지`}
          />
        ))}
      </aside>

      <main
        key={chapter.id}
        className="chapter-track"
        style={{ transform: `translate3d(0, -${pageIdx * 100}vh, 0)` }}
      >
        {chapter.pages.map((page, idx) => {
          const isLastHere = idx === chapter.pages.length - 1;
          const nextChapter = CHAPTERS[chapterIdx + 1];

          return (
            <section className="page" key={idx}>
              <div className="page-inner">
                <p className="kicker">{page.kicker}</p>
                <h1 className="heading">{page.heading}</h1>
                <p className="description">{page.description}</p>

                {page.toc && (
                  <ol className="toc-grid">
                    {CHAPTERS.map((ch, idx) => (
                      <li key={ch.id}>
                        <button className="toc-item" onClick={() => goToChapter(idx)}>
                          <span className="toc-num">{ch.number}</span>
                          <span className="toc-title">{ch.title}</span>
                          <span className="toc-pages">{ch.pages.length}p</span>
                        </button>
                      </li>
                    ))}
                  </ol>
                )}

                {page.tags && (
                  <ul className="tags">
                    {page.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}

                {page.items && (
                  <dl className="info-list">
                    {page.items.map((item) => (
                      <div className="info-row" key={item.label}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="page-actions">
                  {!isLastHere && (
                    <button className="ghost-btn" onClick={() => step(1)}>
                      다음 페이지로 스크롤 ↓
                    </button>
                  )}

                  {isLastHere && !isLastChapter && (
                    <div className="next-chapter-box">
                      <button
                        className="primary-btn"
                        onClick={() => goToChapter(chapterIdx + 1)}
                      >
                        다음 챕터로 이동 ({nextChapter.number} · {nextChapter.title}) →
                      </button>
                      <span className="hint">
                        또는 마우스를 아래로 스크롤하면 자동으로 이동합니다
                      </span>
                    </div>
                  )}

                  {isLastHere && isLastChapter && (
                    <button className="primary-btn" onClick={() => goToChapter(0)}>
                      처음 챕터로 돌아가기 ↑
                    </button>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <footer className="statusbar">
        <span>
          Chapter {chapter.number}. {chapter.title}
        </span>
        <span>
          Page {pageIdx + 1} / {chapter.pages.length}
          {isLastPageInChapter && !isLastChapter ? ' · 챕터 마지막 페이지' : ''}
        </span>
      </footer>
    </div>
  );
}
