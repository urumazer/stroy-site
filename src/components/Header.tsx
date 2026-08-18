import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { company } from '../data/company';

const navLinks = [
  { href: '#home', label: 'Главная' },
  { href: '#services', label: 'Услуги' },
  { href: '#projects', label: 'Проекты' },
  { href: '#about', label: 'О компании' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo">
          <span className="header__logo-icon">СД</span>
          <span className="header__logo-text">{company.name}</span>
        </a>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={company.phoneHref} className="header__phone">
            <Phone size={18} />
            <span>{company.phone}</span>
          </a>
          <a href="#contact-form" className="btn btn--primary header__cta">
            Получить расчёт
          </a>
          <button
            className="header__burger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}