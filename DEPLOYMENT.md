# Инструкции по развертыванию

Этот документ описывает процесс развертывания двух отдельных проектов (Next.js приложение и Telegram бот) на VPS с использованием PM2 и GitHub Actions для автоматического развертывания.

## 🚀 Автоматическое развертывание (Рекомендуется)

Оба проекта настроены для автоматического развертывания через GitHub Actions. При пуше в ветку `main` автоматически запускается деплой на VPS.

**Требуемые секреты в GitHub:**
- `VPS_HOST` - IP адрес или домен вашего VPS
- `VPS_USER` - имя пользователя для SSH подключения
- `VPS_SSH_KEY` - приватный SSH ключ для подключения к серверу

Подробные инструкции по настройке секретов см. в файле `GITHUB_SECRETS_SETUP.md` в корне проекта.

## 📁 Структура на сервере

На сервере проекты будут размещены в следующих папках:

```
/var/www/html/
├── nord-laundry-app/     # Next.js приложение
└── nord-laundry-bot/     # Telegram бот
```

## 🛠 Ручное развертывание

Если вы предпочитаете ручное развертывание или хотите настроить сервер в первый раз:

## 🔧 Исправление проблем с деплоем

### Проблема: PM2 не может найти ecosystem.config.js

Если вы видите ошибки типа:
```
Error: M2][ERROR] File ecosystem.config.js not found
npm error path /var/www/html/package.json
```

**Решение:**

1. Остановите все процессы PM2:
```bash
pm2 stop all
pm2 delete all
```

2. Убедитесь, что файл ecosystem.config.js находится в правильном месте:
```bash
# Проверьте структуру
ls -la /var/www/html/
# Должно быть:
# nord-laundry-app/
# nord-laundry-bot/
# ecosystem.config.js (этот файл должен быть здесь!)
```

3. Если ecosystem.config.js отсутствует в /var/www/html/, скопируйте его:
```bash
cp /var/www/html/nord-laundry-app/ecosystem.config.js /var/www/html/
```

4. Создайте папки для логов:
```bash
mkdir -p /var/www/html/nord-laundry-app/logs
mkdir -p /var/www/html/nord-laundry-bot/logs
```

5. Запустите приложения:
```bash
cd /var/www/html
pm2 start ecosystem.config.js
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
# Скопируйте из приложения
cp /var/www/html/nord-laundry-app/ecosystem.config.js /var/www/html/
```

3. Создайте папки для логов:
```bash
mkdir -p /var/www/html/nord-laundry-app/logs
mkdir -p /var/www/html/nord-laundry-bot/logs
```

4. Запустите приложения:
```bash
cd /var/www/html
pm2 start ecosystem.config.js
```

5. Настройте автозапуск:
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
