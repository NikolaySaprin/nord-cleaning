# Инструкции по развертыванию

## Структура на сервере

На сервере проекты будут размещены в следующих папках:

```
/var/www/html/
├── nord-laundry-app/     # Next.js приложение
└── nord-laundry-bot/     # Telegram бот
```

## Развертывание Next.js приложения

1. Клонируйте репозиторий приложения:
```bash
cd /var/www/html
git clone <repository-url> nord-laundry-app
cd nord-laundry-app
```

2. Установите зависимости:
```bash
npm install
```

3. Настройте переменные окружения:
```bash
# Скопируйте пример файла
cp env.example .env.local

# Отредактируйте .env.local и добавьте ваши токены
nano .env.local
```

4. Соберите приложение:
```bash
npm run build
```

5. Создайте папку для логов:
```bash
mkdir -p logs
```

## Развертывание Telegram бота

1. Клонируйте репозиторий бота:
```bash
cd /var/www/html
git clone <bot-repository-url> nord-laundry-bot
cd nord-laundry-bot
```

2. Установите зависимости:
```bash
npm install
```

3. Настройте переменные окружения:
```bash
# Скопируйте пример файла
cp env.example .env

# Отредактируйте .env и добавьте ваши токены
nano .env
```

4. Скомпилируйте TypeScript:
```bash
npm run build
```

5. Создайте папку для логов:
```bash
mkdir -p logs
```

## Настройка PM2

1. Установите PM2 глобально:
```bash
npm install -g pm2
```

2. Скопируйте ecosystem.config.js в корень /var/www/html:
```bash
# Скопируйте из любого из проектов
cp /var/www/html/nord-laundry-app/ecosystem.config.js /var/www/html/
```

3. Запустите приложения:
```bash
cd /var/www/html
pm2 start ecosystem.config.js
```

4. Настройте автозапуск:
```bash
pm2 startup
pm2 save
```

## Мониторинг

```bash
# Просмотр статуса всех процессов
pm2 status

# Просмотр логов приложения
pm2 logs nord-laundry-app

# Просмотр логов бота
pm2 logs nord-laundry-bot

# Перезапуск приложения
pm2 restart nord-laundry-app

# Перезапуск бота
pm2 restart nord-laundry-bot

# Остановка всех процессов
pm2 stop all

# Удаление всех процессов
pm2 delete all
```

## Обновление

### Обновление приложения:
```bash
cd /var/www/html/nord-laundry-app
git pull origin main
npm install
npm run build
pm2 restart nord-laundry-app
```

### Обновление бота:
```bash
cd /var/www/html/nord-laundry-bot
git pull origin main
npm install
npm run build
pm2 restart nord-laundry-bot
```

## Логи

Логи сохраняются в следующих местах:
- Приложение: `/var/www/html/nord-laundry-app/logs/`
- Бот: `/var/www/html/nord-laundry-bot/logs/`

## Переменные окружения

### Приложение (.env.local):
```
# Переменные для интеграции с Telegram ботом
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_GROUP_CHAT_ID=your_group_chat_id_here

# Добавьте другие необходимые переменные для Next.js приложения
```

### Бот (.env):
```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_GROUP_CHAT_ID=your_group_chat_id_here
```

**Важно:** Оба проекта используют одинаковые токены, так как:
- **Приложение** отправляет заявки через Telegram Bot API
- **Бот** обрабатывает сообщения от пользователей и создает темы в группе
