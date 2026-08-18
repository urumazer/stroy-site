import { Quote } from 'lucide-react';
import { testimonials } from '../data/company';

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Отзывы клиентов</h2>
          <p className="section__subtitle">
            Демонстрационные отзывы — будут заменены реальными
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="testimonial-card">
              <Quote size={28} className="testimonial-card__quote" />
              <p className="testimonial-card__text">{testimonial.text}</p>
              <footer className="testimonial-card__footer">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.project}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}