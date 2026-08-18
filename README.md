# СтройДом — Сайт строительной компании

Современный адаптивный сайт для строительной компании, занимающейся строительством модульных домов, бань и беседок.

## Стек

- **React 19** + **TypeScript**
- **Vite 8** — сборка и dev-сервер
- **Lucide React** — иконки
- Чистый CSS с CSS-переменными (без CSS-фреймворков)

## Запуск локально

```bash
npm install
npm run dev
```

Сайт будет доступен по адресу: http://localhost:5173

## Сборка для продакшена

```bash
npm run build
```

Результат сборки появится в папке `dist/`.

## Публикация на бесплатном хостинге

### Вариант 1: GitHub Pages (рекомендуется)

1. Создайте репозиторий на GitHub и загрузите проект.
2. В настройках репозитория: Settings → Pages → Source: GitHub Actions.
3. Добавьте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

### Вариант 2: Vercel

1. Зарегистрируйтесь на [vercel.com](https://vercel.com).
2. Импортируйте репозиторий с GitHub.
3. Vercel автоматически определит Vite и настроит сборку.

### Вариант 3: Netlify

1. Зарегистрируйтесь на [netlify.com](https://netlify.com).
2. Импортируйте репозиторий с GitHub.
3. Build command: `npm run build`, Publish directory: `dist`.

### Вариант 4: Cloudflare Pages

1. Зарегистрируйтесь на [pages.cloudflare.com](https://pages.cloudflare.com).
2. Подключите GitHub-репозиторий.
3. Build command: `npm run build`, Output directory: `dist`.

## Обновление сайта

1. Внесите изменения в код.
2. Закоммитьте и запушьте в GitHub:

```bash
git add .
git commit -m "Описание изменений"
git push origin main
```

3. Хостинг автоматически пересоберёт и опубликует сайт.

## Что заменить на реальные данные

| Что | Где |
|-----|-----|
| Название компании | `src/data/company.ts` |
| Телефон | `src/data/company.ts` |
| Email | `src/data/company.ts` |
| Адрес/регион | `src/data/company.ts` |
| Часы работы | `src/data/company.ts` |
| Фотографии | `src/data/company.ts`, `src/data/projects.ts`, `src/data/services.ts` |
| Проекты | `src/data/projects.ts` |
| Услуги | `src/data/services.ts` |
| Отзывы | `src/data/company.ts` |
| Ссылки на соцсети | `src/components/Contacts.tsx`, `src/components/Footer.tsx` |
| Карта | `src/components/Contacts.tsx` |
| Политика конфиденциальности | `src/components/Footer.tsx` |

## Подключение backend для формы

В `src/components/ContactForm.tsx` в функции `handleSubmit` замените комментарий `// TODO: Здесь будет отправка данных на сервер` на реальный запрос:

```ts
await fetch('/api/request', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});