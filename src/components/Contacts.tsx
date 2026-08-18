import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { company } from '../data/company';

export default function Contacts() {
  return (
    <section id="contacts" className="contacts section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Контакты</h2>
          <p className="section__subtitle">Свяжитесь с нами удобным для вас способом</p>
        </div>

        <div className="contacts__grid">
          <div className="contacts__card">
            <div className="contacts__item">
              <Phone size={22} />
              <div>
                <span className="contacts__label">Телефон</span>
                <a href={company.phoneHref} className="contacts__value">
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="contacts__item">
              <Mail size={22} />
              <div>
                <span className="contacts__label">Email</span>
                <a href={`mailto:${company.email}`} className="contacts__value">
                  {company.email}
                </a>
              </div>
            </div>

            <div className="contacts__item">
              <MapPin size={22} />
              <div>
                <span className="contacts__label">Регион</span>
                <span className="contacts__value">{company.region}</span>
              </div>
            </div>

            <div className="contacts__item">
              <Clock size={22} />
              <div>
                <span className="contacts__label">Часы работы</span>
                <span className="contacts__value">{company.hours}</span>
              </div>
            </div>

            <div className="contacts__item">
              <MessageCircle size={22} />
              <div>
                <span className="contacts__label">Мессенджеры</span>
                <div className="contacts__messengers">
                  <a href="#" className="contacts__messenger">WhatsApp</a>
                  <a href="#" className="contacts__messenger">Telegram</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contacts__map">
            <div className="contacts__map-placeholder">
              <MapPin size={48} />
              <p>Здесь будет карта с адресом компании</p>
              <span>Добавьте карту после уточнения адреса</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}