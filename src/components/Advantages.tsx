import { Factory, Layers, Truck, PencilRuler, Calculator, ShieldCheck } from 'lucide-react';
import { advantages } from '../data/company';

const iconMap = {
  factory: Factory,
  layers: Layers,
  truck: Truck,
  'pencil-ruler': PencilRuler,
  calculator: Calculator,
  'shield-check': ShieldCheck,
};

export default function Advantages() {
  return (
    <section className="advantages section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Почему выбирают нас</h2>
          <p className="section__subtitle">
            Мы отвечаем за каждый этап — от проекта до передачи готового объекта
          </p>
        </div>

        <div className="advantages__grid">
          {advantages.map(({ icon, title, description }) => {
            const Icon = iconMap[icon as keyof typeof iconMap];
            return (
              <div key={title} className="advantage-card">
                <div className="advantage-card__icon">
                  <Icon size={28} />
                </div>
                <h3 className="advantage-card__title">{title}</h3>
                <p className="advantage-card__text">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}