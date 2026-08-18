import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Наши услуги</h2>
          <p className="section__subtitle">
            Строим под ключ — от проекта до готового объекта на вашем участке
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card__image-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card__image"
                  loading="lazy"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.description}</p>
                <ul className="service-card__features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact-form" className="service-card__link">
                  Подробнее
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}