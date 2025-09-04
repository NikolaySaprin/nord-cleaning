# Nord Clean Business - Next.js

Профессиональная химчистка для бизнеса, построенная на Next.js 15 с оптимизацией для SEO.

## Технологии

- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - utility-first CSS фреймворк
- **Radix UI** - компоненты интерфейса
- **Lucide React** - иконки
- **Swiper** - слайдер
- **React Hook Form** - управление формами
- **Zod** - валидация схем

## Особенности

- ✅ **SEO оптимизация** - мета-теги, sitemap, robots.txt
- ✅ **Серверные компоненты** - для лучшей производительности
- ✅ **Оптимизация изображений** - Next.js Image компонент
- ✅ **Адаптивный дизайн** - мобильная версия
- ✅ **Типизация** - полная поддержка TypeScript
- ✅ **Современный UI** - компоненты Radix UI

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start
```

## Структура проекта

```
src/
├── app/                 # App Router (Next.js 13+)
│   ├── layout.tsx      # Корневой layout
│   ├── page.tsx        # Главная страница
│   ├── globals.css     # Глобальные стили
│   ├── sitemap.ts      # Sitemap для SEO
│   ├── robots.ts       # Robots.txt
│   └── manifest.ts     # PWA манифест
├── components/         # React компоненты
│   ├── ui/            # UI компоненты (Radix UI)
│   ├── Header.tsx     # Шапка сайта
│   ├── Hero.tsx       # Главный баннер
│   ├── Services.tsx   # Услуги
│   └── ...
├── lib/               # Утилиты
└── hooks/             # React хуки
```

## SEO настройки

- Мета-теги для социальных сетей (Open Graph, Twitter)
- Структурированные данные
- Sitemap.xml
- Robots.txt
- Оптимизация изображений
- Семантическая разметка

## Развертывание

Проект готов для развертывания на:
- Vercel (рекомендуется)
- Netlify
- AWS
- Любой хостинг с поддержкой Node.js

## Лицензия

MIT
