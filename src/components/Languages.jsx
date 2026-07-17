const languages = [
  { name: 'English', pct: 95 },
  { name: 'Tamil', pct: 100 },
  { name: 'Telugu', pct: 90 },
]

export default function Languages() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Communication</div>
          <div className="sec-title">Languages <span>I Speak</span></div>
        </div>
        <div className="lang-grid">
          {languages.map((l) => (
            <div className="lang-card" key={l.name}>
              <div className="lang-circle">{l.pct}%</div>
              <div className="lang-name">{l.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
