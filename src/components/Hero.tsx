import { ArrowRight, Home, Factory, ShieldCheck, Clock } from 'lucide-react';

const heroAdvantages = [
  { icon: Home, text: 'Работаем под ключ' },
  { icon: Factory, text: 'Собственное производство' },
  { icon: ShieldCheck, text: 'Гарантия на работы' },
  { icon: Clock, text: 'Сроки по договору' },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Современный загородный дом"
          className="hero__image"
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <h1 className="hero__title">
          Строим дома, бани и беседки
          <br />
          для комфортной загородной жизни
        </h1>
        <p className="hero__subtitle">Проектирование, производство и монтаж под ключ</p>

        <div className="hero__actions">
          <a href="#contact-form" className="btn btn--primary btn--lg">
            Получить расчёт
          </a>
          <a href="#projects" className="btn btn--outline btn--lg">
            Смотреть проекты
            <ArrowRight size={20} />
          </a>
        </div>

        <ul className="hero__advantages">
          {heroAdvantages.map(({ icon: Icon, text }) => (
            <li key={text} className="hero__advantage">
              <Icon size={20} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}