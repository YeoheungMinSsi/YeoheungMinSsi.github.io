import { useCallback, useEffect, useRef, useState } from 'react';

const SCROLL_LOCK_MS = 650;
const WHEEL_THRESHOLD = 25;

export function useChapterScroll(chapters) {
  const [chapterIdx, setChapterIdx] = useState(0);
  const [pageIdx, setPageIdx] = useState(0);
  const lockRef = useRef(false);
  const touchStart = useRef(null);

  const chapter = chapters[chapterIdx];

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
        } else if (chapterIdx < chapters.length - 1) {
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
          const prevChapter = chapters[chapterIdx - 1];
          setChapterIdx((c) => c - 1);
          setPageIdx(prevChapter.pages.length - 1);
        }
      }
    },
    [chapter.pages.length, chapterIdx, chapters, lockScroll, pageIdx]
  );

  const goToChapter = useCallback(
    (nextChapterIdx) => {
      if (nextChapterIdx < 0 || nextChapterIdx >= chapters.length) return;
      lockScroll();
      setChapterIdx(nextChapterIdx);
      setPageIdx(0);
    },
    [chapters.length, lockScroll]
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
      // Allow horizontal scrolling inside the top chapter nav without flipping pages
      if (e.target.closest?.('.chapter-nav')) {
        touchStart.current = null;
        return;
      }
      const t = e.touches[0];
      touchStart.current = { x: t.clientX, y: t.clientY };
    };

    const onTouchEnd = (e) => {
      if (!touchStart.current) return;
      const t = e.changedTouches[0];
      const diffX = touchStart.current.x - t.clientX;
      const diffY = touchStart.current.y - t.clientY;
      touchStart.current = null;
      if (Math.abs(diffY) > 40 && Math.abs(diffY) > Math.abs(diffX)) {
        step(diffY > 0 ? 1 : -1);
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

  return { chapter, chapterIdx, pageIdx, setPageIdx, step, goToChapter };
}
