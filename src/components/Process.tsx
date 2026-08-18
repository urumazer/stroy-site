import { processSteps } from '../data/company';

export default function Process() {
  return (
    <section className="process section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Как проходит строительство</h2>
          <p className="section__subtitle">
            Прозрачный процесс — вы всегда знаете, на каком этапе находится ваш объект
          </p>
        </div>

        <div className="process__grid">
          {processSteps.map((step) => (
            <div key={step.number} className="process-step">
              <span className="process-step__number">{step.number}</span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}