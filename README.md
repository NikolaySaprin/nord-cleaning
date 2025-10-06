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
- ✅ **Интеграция с Telegram** - отправка заявок в бот

## Запуск проекта

### Next.js приложение

```bash
# Установка зависимостей
npm install

# Настройка переменных окружения
cp env.example .env.local
# Отредактируйте .env.local и добавьте ваши токены

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start
```

### Переменные окружения

Создайте файл `.env.local` в корне проекта:

```bash
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_GROUP_CHAT_ID=your_group_chat_id_here

# Next.js Configuration
NEXT_PUBLIC_API_URL=https://your-domain.com
```


## Структура проекта

```
├── src/                    # Next.js приложение
│   ├── app/                # App Router (Next.js 13+)
│   ├── components/         # React компоненты
│   ├── lib/               # Утилиты
│   └── hooks/             # React хуки
├── package.json           # Основные зависимости
├── next.config.js         # Конфигурация Next.js
└── ecosystem.config.js    # PM2 конфигурация
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
