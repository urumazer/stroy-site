import { useState } from 'react';
import { Ruler, DoorOpen, ArrowRight } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Наши проекты</h2>
          <p className="section__subtitle">
            Готовые решения, которые можно адаптировать под ваш участок
          </p>
        </div>

        <div className="projects__filters">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__image-wrap">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-card__image"
                  loading="lazy"
                />
                <span className="project-card__category">
                  {projectCategories.find((c) => c.id === project.category)?.label}
                </span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.name}</h3>
                <div className="project-card__meta">
                  <span>
                    <Ruler size={16} />
                    {project.area}
                  </span>
                  <span>
                    <DoorOpen size={16} />
                    {project.rooms}
                  </span>
                </div>
                <p className="project-card__text">{project.description}</p>
                <div className="project-card__footer">
                  <span className="project-card__price">{project.price}</span>
                  <a href="#contact-form" className="project-card__link">
                    Узнать стоимость
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}