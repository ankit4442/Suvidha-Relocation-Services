const SERVICES = [
  {
    icon: '🏠',
    title: 'Home Relocation',
    text: 'Professional home shifting and household relocation services with safe packing of furniture, appliances and fragile items.',
  },
  {
    icon: '🏢',
    title: 'Office Relocation',
    text: 'Professional office relocation and corporate shifting services with safe handling of workstations, IT equipment and important documents.',
  },
  {
    icon: '📦',
    title: 'Packing & Unpacking',
    text: 'Premium packing materials and trained packers ensure your belongings remain safe and damage-free during transportation.',
  },
  {
    icon: '🚚',
    title: 'Loading & Unloading',
    text: 'Skilled professionals provide secure loading and unloading services using modern tools and equipment.',
  },
  {
    icon: '🚗',
    title: 'Car & Bike Transport',
    text: 'Safe and reliable car and bike transportation services to destinations across India with dedicated vehicle carriers.',
  },
  {
    icon: '🏬',
    title: 'Warehousing & Storage',
    text: 'Secure, clean and monitored warehousing and storage facilities for both short-term and long-term requirements.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">What We Do</span>

          <h2 className="section__title">
            Packers and Movers Services Across India
          </h2>

          <p className="section__lead">
            We provide home shifting, office relocation, packing and unpacking,
            loading and unloading, car transportation and warehousing services
            across India with complete safety, reliability and customer
            satisfaction.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card__icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
