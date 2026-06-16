const STATS = [
  { value: '10+', label: 'Years of Experience' },
  { value: '5000+', label: 'Happy Customers' },
  { value: '50+', label: 'Cities Covered' },
  { value: '100%', label: 'Safe Relocation' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s) => (
          <div key={s.label} className="stats__item">
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
