import { CHAPTERS } from './data/chapters';
import { useChapterScroll } from './hooks/useChapterScroll';
import Topbar from './components/Topbar';
import PageSection from './components/PageSection';

export default function App() {
  const { chapter, chapterIdx, pageIdx, setPageIdx, step, goToChapter } =
    useChapterScroll(CHAPTERS);

  const isLastPageInChapter = pageIdx === chapter.pages.length - 1;
  const isLastChapter = chapterIdx === CHAPTERS.length - 1;
  const nextChapter = CHAPTERS[chapterIdx + 1];

  return (
    <div className="viewport" style={{ '--accent': chapter.accent }}>
      <Topbar
        chapters={CHAPTERS}
        chapterIdx={chapterIdx}
        onSelectChapter={goToChapter}
      />

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
        style={{ transform: `translate3d(0, calc(${pageIdx} * var(--vh) * -1), 0)` }}
      >
        {chapter.pages.map((page, idx) => (
          <PageSection
            key={idx}
            page={page}
            chapters={CHAPTERS}
            isLastPage={idx === chapter.pages.length - 1}
            isLastChapter={isLastChapter}
            nextChapter={nextChapter}
            onNextPage={() => step(1)}
            onSelectChapter={goToChapter}
          />
        ))}
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
