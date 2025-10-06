module.exports = {
    apps: [
      // Next.js приложение
      {
        name: 'nord-laundry-app',
        cwd: '/var/www/html',
        script: 'npm', // Используем npm для запуска
        args: 'start', // Команда: npm start
        env: {
          NODE_ENV: 'production',
          PORT: 3000,
        },
        env_production: {
          NODE_ENV: 'production',
        },
        // Настройки для стабильности
        instances: 1,
        exec_mode: 'fork',
        max_memory_restart: '300M',
        // Настройки логов
        out_file: './logs/app-out.log',
        error_file: './logs/app-error.log',
        log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      },
      // Telegram бот
      {
        name: 'nord-laundry-bot',
        cwd: '/var/www/html',
        script: 'npx',
        args: 'tsx bot-runner.js',
        env: {
          NODE_ENV: 'production',
        },
        env_production: {
          NODE_ENV: 'production',
        },
        // Настройки для стабильности бота
        instances: 1,
        exec_mode: 'fork',
        max_memory_restart: '200M',
        // Настройки логов
        out_file: './logs/bot-out.log',
        error_file: './logs/bot-error.log',
        log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      }
    ]
  };