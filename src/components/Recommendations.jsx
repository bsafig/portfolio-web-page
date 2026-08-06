import { recommendations } from '../data/recommendations.js'

// Recommendations section driven by src/data/recommendations.js.
export default function Recommendations() {
  return (
    <section id="recommendations">
      <h2>Recommendations</h2>
      <p>What colleagues and mentors have said about working with me.</p>

      <div className="reco-grid">
        {recommendations.map((reco, i) => {
          const inner = (
            <>
              <header className="reco-attribution">
                {reco.avatar ? (
                  <img
                    className="reco-avatar"
                    src={reco.avatar}
                    alt={`Photo of ${reco.name}`}
                  />
                ) : (
                  <span className="reco-avatar reco-avatar-fallback" aria-hidden="true">
                    {reco.name.charAt(0)}
                  </span>
                )}
                <div className="reco-meta">
                  <span className="reco-name">{reco.name}</span>
                  <span className="reco-title">{reco.title}</span>
                  <span className="reco-relationship">{reco.relationship}</span>
                  <span className="reco-date">{reco.date}</span>
                </div>
              </header>

              <blockquote className="reco-quote">
                {reco.text.split('\n\n').map((para, p) => (
                  <p key={p}>{para}</p>
                ))}
              </blockquote>

              {reco.profileUrl && (
                <span className="reco-cta">View on LinkedIn &rarr;</span>
              )}
            </>
          )

          return reco.profileUrl ? (
            <a
              key={i}
              className="reco-card"
              href={reco.profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              {inner}
            </a>
          ) : (
            <div key={i} className="reco-card">
              {inner}
            </div>
          )
        })}
      </div>
    </section>
  )
}
