# Nord Telegram Bot

Telegram бот для обработки заявок с сайта Nord Clean Business.

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env` с переменными окружения:
```bash
# Создайте файл .env в папке bot/
echo "TELEGRAM_BOT_TOKEN=your_bot_token_here" > .env
echo "TELEGRAM_GROUP_CHAT_ID=your_group_chat_id_here" >> .env
```

Или создайте файл `.env` вручную с содержимым:
```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_GROUP_CHAT_ID=your_group_chat_id_here
```

## Запуск

### Разработка
```bash
npm run dev
```

### Продакшн
```bash
npm start
```

## Структура

- `bot-runner.js` - точка входа для бота
- `../src/lib/telegram-bot.ts` - основная логика бота
- `package.json` - зависимости и скрипты для бота

## Интеграция с основным проектом

Бот использует общую логику из `../src/lib/telegram-bot.ts` и может быть запущен через скрипты основного проекта:

```bash
# Из корня проекта
npm run bot:install  # Установка зависимостей бота
npm run bot:dev      # Запуск в режиме разработки
npm run bot:start    # Запуск в продакшн режиме
```
