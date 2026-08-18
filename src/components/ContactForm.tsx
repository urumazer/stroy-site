import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  projectType: string;
  area: string;
  comment: string;
  consent: boolean;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  projectType: 'Модульный дом',
  area: '',
  comment: '',
  consent: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = 'Пожалуйста, укажите ваше имя';
    }

    const phoneRegex = /^[+\d][\d\s()-]{9,}$/;
    if (!form.phone.trim()) {
      newErrors.phone = 'Пожалуйста, укажите телефон';
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = 'Пожалуйста, укажите корректный телефон';
    }

    if (!form.consent) {
      newErrors.consent = 'Необходимо согласие на обработку данных';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // TODO: Здесь будет отправка данных на сервер
      // Например: await fetch('/api/request', { method: 'POST', body: JSON.stringify(form) })
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="contact-form section">
        <div className="container">
          <div className="contact-form__success">
            <CheckCircle2 size={48} />
            <h2>Заявка отправлена!</h2>
            <p>
              Спасибо за обращение! Мы свяжемся с вами в ближайшее время
              для уточнения деталей.
            </p>
            <button className="btn btn--primary" onClick={() => setIsSubmitted(false)}>
              Отправить ещё одну заявку
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="contact-form section">
      <div className="container">
        <div className="contact-form__inner">
          <div className="contact-form__info">
            <h2 className="section__title">Получите расчёт стоимости вашего проекта</h2>
            <p className="contact-form__text">
              Оставьте заявку — мы свяжемся с вами, уточним детали и подготовим
              предварительный расчёт стоимости строительства.
            </p>
            <ul className="contact-form__benefits">
              <li>Бесплатная консультация</li>
              <li>Расчёт в течение 1 рабочего дня</li>
              <li>Без обязательств с вашей стороны</li>
            </ul>
          </div>

          <form className="contact-form__form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className={errors.name ? 'form-input form-input--error' : 'form-input'}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+7 (___) ___-__-__"
                className={errors.phone ? 'form-input form-input--error' : 'form-input'}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="projectType">Что хотите построить?</label>
              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="form-input"
              >
                <option>Модульный дом</option>
                <option>Баню</option>
                <option>Беседку</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="area">Примерная площадь</label>
              <input
                type="text"
                id="area"
                name="area"
                value={form.area}
                onChange={handleChange}
                placeholder="Например, 80 м²"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="comment">Комментарий</label>
              <textarea
                id="comment"
                name="comment"
                value={form.comment}
                onChange={handleChange}
                placeholder="Расскажите о вашем проекте"
                rows={4}
                className="form-input"
              />
            </div>

            <div className="form-group form-group--checkbox">
              <label className="form-checkbox">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                />
                <span>
                  Я согласен на обработку персональных данных
                </span>
              </label>
              {errors.consent && <span className="form-error">{errors.consent}</span>}
            </div>

            <button type="submit" className="btn btn--primary btn--lg btn--full">
              <Send size={20} />
              Получить расчёт
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}