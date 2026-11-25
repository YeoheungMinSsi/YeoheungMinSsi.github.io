export default function PageSection({
  page,
  chapters,
  isLastPage,
  isLastChapter,
  nextChapter,
  onNextPage,
  onSelectChapter,
}) {
  return (
    <section className="page">
      <div className="page-inner">
        <p className="kicker">{page.kicker}</p>
        <h1 className="heading">{page.heading}</h1>
        <p className="description">{page.description}</p>

        {page.toc && (
          <ol className="toc-grid">
            {chapters.map((ch, idx) => (
              <li key={ch.id}>
                <button className="toc-item" onClick={() => onSelectChapter(idx)}>
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
          {!isLastPage && (
            <button className="ghost-btn" onClick={onNextPage}>
              다음 페이지로 스크롤 ↓
            </button>
          )}

          {isLastPage && !isLastChapter && (
            <div className="next-chapter-box">
              <button className="primary-btn" onClick={() => onSelectChapter(chapters.indexOf(nextChapter))}>
                다음 챕터로 이동 ({nextChapter.number} · {nextChapter.title}) →
              </button>
              <span className="hint">
                또는 마우스를 아래로 스크롤하면 자동으로 이동합니다
              </span>
            </div>
          )}

          {isLastPage && isLastChapter && (
            <button className="primary-btn" onClick={() => onSelectChapter(0)}>
              처음 챕터로 돌아가기 ↑
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
