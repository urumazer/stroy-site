import { Phone, Mail, MapPin } from 'lucide-react';
import { company } from '../data/company';

const navLinks = [
  { href: '#home', label: 'Главная' },
  { href: '#services', label: 'Услуги' },
  { href: '#projects', label: 'Проекты' },
  { href: '#about', label: 'О компании' },
  { href: '#contacts', label: 'Контакты' },
];

const serviceLinks = [
  { href: '#services', label: 'Модульные дома' },
  { href: '#services', label: 'Бани' },
  { href: '#services', label: 'Беседки' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-icon">СД</span>
              <span>{company.name}</span>
            </a>
            <p className="footer__description">{company.description}</p>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Навигация</h3>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Услуги</h3>
            <ul className="footer__links">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Контакты</h3>
            <ul className="footer__contacts">
              <li>
                <Phone size={16} />
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>{company.region}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {company.name}. Все права защищены.</p>
          <a href="#" className="footer__privacy">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}