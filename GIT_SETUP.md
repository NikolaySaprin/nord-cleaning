# Настройка Git репозитория для Next.js приложения

## Инициализация репозитория

1. Инициализируйте Git репозиторий:
```bash
cd /Users/nikolajsnv/Desktop/projects/nord/nord-clean-business-nextjs
git init
```

2. Добавьте все файлы:
```bash
git add .
```

3. Сделайте первый коммит:
```bash
git commit -m "Initial commit: Nord Laundry Next.js application"
```

4. Создайте репозиторий на GitHub (или другом Git хостинге)

5. Добавьте remote origin:
```bash
git remote add origin <repository-url>
```

6. Отправьте код:
```bash
git push -u origin main
```

## Настройка Git Secrets

Для безопасного хранения переменных окружения используйте Git Secrets:

1. Установите git-secrets:
```bash
# macOS
brew install git-secrets

# Ubuntu/Debian
sudo apt-get install git-secrets
```

2. Настройте git-secrets для репозитория:
```bash
cd /Users/nikolajsnv/Desktop/projects/nord/nord-clean-business-nextjs
git secrets --install
git secrets --register-aws
```

3. Добавьте паттерны для защиты секретов:
```bash
git secrets --add '.*\.env.*'
git secrets --add 'API_KEY'
git secrets --add 'DATABASE_URL'
```

4. Создайте файл .env.local.example:
```bash
echo "# Next.js Environment Variables" > .env.local.example
echo "# Add your environment variables here" >> .env.local.example
```

5. Добавьте .env.local.example в репозиторий:
```bash
git add .env.local.example
git commit -m "Add .env.local.example template"
```

## Настройка CI/CD (опционально)

Создайте файл `.github/workflows/deploy.yml` для автоматического развертывания:

```yaml
name: Deploy Next.js App

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        script: |
          cd /var/www/html/nord-laundry-app
          git pull origin main
          npm install
          npm run build
          pm2 restart nord-laundry-app
```

## Команды для работы с репозиторием

```bash
# Проверка статуса
git status

# Добавление изменений
git add .

# Коммит
git commit -m "Описание изменений"

# Отправка на сервер
git push origin main

# Получение изменений
git pull origin main

# Создание новой ветки
git checkout -b feature/new-feature

# Переключение на ветку
git checkout main

# Слияние ветки
git merge feature/new-feature
```
