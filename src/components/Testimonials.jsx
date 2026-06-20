const REVIEWS = [
  {
    name: 'Shiv Kumar',
    place: 'Abohar',
    text: 'Excellent service! The team packed everything so carefully and delivered on time. Not a single item was damaged.',
  },
  {
    name: 'Priya Verma',
    place: 'Delhi',
    text: 'Very professional and affordable. They handled my office relocation smoothly with zero downtime. Highly recommended.',
  },
  {
    name: 'Sachin Thakur',
    place: 'Jammu',
    text: 'Suvidha made my home shifting completely stress-free. Polite staff and honest pricing. Will use them again.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Testimonials</span>
          <h2 className="section__title">What Our Customers Say</h2>
        </div>

        <div className="testimonials__grid">
          {REVIEWS.map((r) => (
            <article key={r.name} className="testimonial">
              <div className="testimonial__stars">★★★★★</div>
              <p className="testimonial__text">“{r.text}”</p>
              <div className="testimonial__author">
                <span className="testimonial__avatar">{r.name.charAt(0)}</span>
                <div>
                  <strong>{r.name}</strong>
                  <small>{r.place}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
