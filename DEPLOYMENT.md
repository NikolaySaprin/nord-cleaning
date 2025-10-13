# Инструкции по развертыванию

Этот документ описывает процесс развертывания двух отдельных проектов (Next.js приложение и Telegram бот) на VPS с использованием PM2 и GitHub Actions для автоматического развертывания.

## 🚀 Автоматическое развертывание (Рекомендуется)

Проект настроен для автоматического развертывания через GitHub Actions. При пуше в ветку `main` автоматически запускается деплой на VPS.

**Требуемые секреты в GitHub:**
- `VPS_HOST` - IP адрес или домен вашего VPS
- `VPS_USER` - имя пользователя для SSH подключения
- `VPS_SSH_KEY` - приватный SSH ключ для подключения к серверу

**Что происходит при автоматическом деплое:**
1. Обновляется код в `/var/www/html/nord-laundry-app/`
2. Устанавливаются зависимости (`npm install`)
3. Собирается приложение (`npm run build`)
4. Копируется `ecosystem.config.js` в `/var/www/html/`
5. Создаются папки для логов
6. Перезапускаются все PM2 процессы

## 📁 Структура на сервере

На сервере проекты будут размещены в следующих папках:

```
/var/www/html/
├── nord-laundry-app/     # Next.js приложение
│   ├── assets/           # Статические изображения (обслуживаются Nginx)
│   ├── public/           # Публичные файлы Next.js
│   └── ...
└── nord-laundry-telegram-bot/     # Telegram бот
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
# nord-laundry-telegram-bot/
# ecosystem.config.js (этот файл должен быть здесь!)
```

3. Если ecosystem.config.js отсутствует в /var/www/html/, скопируйте его:
```bash
cp /var/www/html/nord-laundry-app/ecosystem.config.js /var/www/html/
```

4. Создайте папки для логов:
```bash
mkdir -p /var/www/html/nord-laundry-app/logs
mkdir -p /var/www/html/nord-laundry-telegram-bot/logs
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
git clone <bot-repository-url> nord-laundry-telegram-bot
cd nord-laundry-telegram-bot
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
mkdir -p /var/www/html/nord-laundry-telegram-bot/logs
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
pm2 logs nord-laundry-telegram-bot

# Перезапуск приложения
pm2 restart nord-laundry-app

# Перезапуск бота
pm2 restart nord-laundry-telegram-bot

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
cd /var/www/html/nord-laundry-telegram-bot
git pull origin main
npm install
npm run build
pm2 restart nord-laundry-telegram-bot
```

## Логи

Логи сохраняются в следующих местах:
- Приложение: `/var/www/html/nord-laundry-app/logs/`
- Бот: `/var/www/html/nord-laundry-telegram-bot/logs/`

## Переменные окружения

### Приложение (.env.local):
```
# Webhook для отправки заявок в бот
BOT_WEBHOOK_URL=http://localhost:3001/api/application

# Добавьте другие необходимые переменные для Next.js приложения
```

### Бот (.env):
```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_GROUP_CHAT_ID=your_group_chat_id_here
ENABLE_WHATSAPP=true
WEBHOOK_SECRET=your-secret-key-here
```

**Важно:** Архитектура интеграции:
- **Приложение** отправляет заявки в бот через webhook для создания тредов
- **Бот** обрабатывает все заявки (с сайта, WhatsApp, Telegram) и создает темы в группе

## 🌐 Настройка Nginx

Для правильной работы статических файлов (изображений) необходимо настроить Nginx:

### Конфигурация Nginx для nord-laundry.ru

Создайте файл `/etc/nginx/sites-available/nord-laundry.ru`:

```nginx
server {
    listen 80;
    server_name nord-laundry.ru www.nord-laundry.ru;

    # Обслуживание статических изображений напрямую
    location /assets/ {
        alias /var/www/html/nord-laundry-app/assets/;
        expires 30d;
        add_header Cache-Control "public, immutable";
        
        # Поддержка различных форматов изображений
        location ~* \.(jpg|jpeg|png|gif|svg|webp)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Проксирование к Next.js приложению
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Активация конфигурации:

```bash
# Создать символическую ссылку
sudo ln -s /etc/nginx/sites-available/nord-laundry.ru /etc/nginx/sites-enabled/

# Проверить конфигурацию
sudo nginx -t

# Перезагрузить Nginx
sudo systemctl reload nginx
```

### Проверка работы:

```bash
# Проверить, что изображения доступны
curl -I http://nord-laundry.ru/assets/logo_nord.svg

# Должен вернуть 200 OK
```
