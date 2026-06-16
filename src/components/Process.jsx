const STEPS = [
  { no: '01', title: 'Enquiry', text: 'Call or message us with your moving details and requirements.' },
  { no: '02', title: 'Free Survey', text: 'We assess your goods and share a transparent, no-obligation quote.' },
  { no: '03', title: 'Packing & Moving', text: 'Our team packs, loads and transports your belongings safely.' },
  { no: '04', title: 'Delivery & Setup', text: 'We unload, unpack and arrange everything at your new place.' },
]

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">How It Works</span>
          <h2 className="section__title">Our Simple 4-Step Process</h2>
        </div>

        <div className="process__grid">
          {STEPS.map((s) => (
            <div key={s.no} className="process__step">
              <div className="process__no">{s.no}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
