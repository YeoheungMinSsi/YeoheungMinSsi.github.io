export default function Topbar({ chapters, chapterIdx, onSelectChapter }) {
  const chapter = chapters[chapterIdx];

  return (
    <header className="topbar">
      <button className="brand" onClick={() => onSelectChapter(0)}>
        YeoheungMinSsi
      </button>

      <nav className="chapter-nav" aria-label="Chapters">
        {chapters.map((ch, idx) => (
          <button
            key={ch.id}
            className={`chapter-tab ${idx === chapterIdx ? 'active' : ''}`}
            onClick={() => onSelectChapter(idx)}
            aria-current={idx === chapterIdx ? 'step' : undefined}
          >
            <span className="tab-num">{ch.number}</span>
            <span className="tab-title">{ch.title}</span>
          </button>
        ))}
      </nav>

      <div className="chapter-counter">
        {chapter.number} / 0{chapters.length}
      </div>
    </header>
  );
}
