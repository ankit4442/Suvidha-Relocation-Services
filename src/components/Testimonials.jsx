import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const REVIEWS = [
  {
    name: "Rahul Sharma",
    place: "Chandigarh",
    text: "Excellent service! The team packed everything so carefully and delivered on time. Not a single item was damaged.",
  },
  {
    name: "Priya Verma",
    place: "Delhi",
    text: "Very professional and affordable. They handled my office relocation smoothly with zero downtime. Highly recommended.",
  },
  {
    name: "Sachin Thakur",
    place: "Jammu",
    text: "Suvidha made my home shifting completely stress-free. Polite staff and honest pricing. Will use them again.",
  },
  {
    name: "Shiv Kumar",
    place: "Abohar",
    text: "Fast and reliable packing service. Everything arrived safely without any damage.",
  },
  {
    name: "Neha Gupta",
    place: "Gurugram",
    text: "Best relocation company I have used so far. Great support from start to finish.",
  },
  {
    name: "Rakesh Singh",
    place: "Lucknow",
    text: "Transparent pricing and excellent customer service. Highly satisfied.",
  },
  {
    name: "Pooja Arora",
    place: "Mohali",
    text: "Professional staff and timely delivery. My shifting experience was completely hassle-free.",
  },
  {
    name: "Manoj Verma",
    place: "Jaipur",
    text: "Very careful handling of furniture and electronics. Recommended for home shifting.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Testimonials</span>
          <h2 className="section__title">What Our Customers Say</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {REVIEWS.map((r) => (
            <SwiperSlide key={r.name}>
              <article className="testimonial">
                <div className="testimonial__stars">★★★★★</div>
                <p className="testimonial__text">"{r.text}"</p>

                <div className="testimonial__author">
                  <span className="testimonial__avatar">
                    {r.name.charAt(0)}
                  </span>

                  <div>
                    <strong>{r.name}</strong>
                    <small>{r.place}</small>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
