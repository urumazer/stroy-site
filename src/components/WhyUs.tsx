import { CheckCircle2 } from 'lucide-react';

const facts = [
  'Собственное производство и контроль качества на каждом этапе',
  'Индивидуальный подход к каждому проекту и участку',
  'Прозрачная смета и фиксированные сроки по договору',
  'Монтаж на участке силами нашей бригады',
];

export default function WhyUs() {
  return (
    <section id="about" className="why-us section">
      <div className="container why-us__inner">
        <div className="why-us__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
            alt="Современный загородный дом"
            className="why-us__image"
            loading="lazy"
          />
        </div>
        <div className="why-us__content">
          <h2 className="section__title">Почему стоит выбрать нас</h2>
          <p className="why-us__text">
            Мы строим загородные дома, бани и беседки, которые служат долгие годы.
            Берём на себя весь процесс — от проектирования до финальной отделки,
            чтобы вы получили готовый объект без лишних забот.
          </p>
          <ul className="why-us__facts">
            {facts.map((fact) => (
              <li key={fact} className="why-us__fact">
                <CheckCircle2 size={22} />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
          <a href="#contact-form" className="btn btn--primary">
            Обсудить проект
          </a>
        </div>
      </div>
    </section>
  );
}