const SERVICES = [
  {
    icon: '🏠',
    title: 'Home Relocation',
    text: 'Complete household shifting with careful packing of furniture, appliances and fragile items.',
  },
  {
    icon: '🏢',
    title: 'Office Relocation',
    text: 'Minimal-downtime corporate moves — workstations, IT equipment and documents handled with care.',
  },
  {
    icon: '📦',
    title: 'Packing & Unpacking',
    text: 'Premium packing material and trained packers ensure your goods stay damage-free in transit.',
  },
  {
    icon: '🚚',
    title: 'Loading & Unloading',
    text: 'Skilled labour for safe loading and unloading using the right tools and equipment.',
  },
  {
    icon: '🚗',
    title: 'Car & Bike Transport',
    text: 'Dedicated carriers to transport your vehicle safely to any destination across India.',
  },
  {
    icon: '🏬',
    title: 'Warehousing & Storage',
    text: 'Secure, clean and monitored storage facilities for short and long-term needs.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">What We Do</span>
          <h2 className="section__title">Our Relocation Services</h2>
          <p className="section__lead">
            End-to-end moving solutions tailored to your needs, delivered with
            professionalism and care.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
