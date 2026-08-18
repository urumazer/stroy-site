import { galleryImages } from '../data/company';

export default function Gallery() {
  return (
    <section className="gallery section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Галерея</h2>
          <p className="section__subtitle">
            Наши дома, бани, беседки и процесс строительства
          </p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((image) => (
            <figure key={image.src} className="gallery__item">
              <img
                src={image.src}
                alt={image.alt}
                className="gallery__image"
                loading="lazy"
              />
              <figcaption className="gallery__caption">
                <span className="gallery__category">{image.category}</span>
                <span className="gallery__alt">{image.alt}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}