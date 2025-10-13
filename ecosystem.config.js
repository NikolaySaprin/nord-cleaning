module.exports = {
    apps: [
      {
        name: 'nord-laundry-app',
        cwd: '/var/www/html/nord-laundry-app',
        script: 'npm',
        args: 'start', 
        env: {
          NODE_ENV: 'production',
          PORT: 3000,
          BOT_WEBHOOK_URL: 'http://localhost:3001/api/application',
        },
        env_production: {
          NODE_ENV: 'production',
        },
        instances: 1,
        exec_mode: 'fork',
        max_memory_restart: '300M',
        out_file: '/var/www/html/nord-laundry-app/logs/app-out.log',
        error_file: '/var/www/html/nord-laundry-app/logs/app-error.log',
        log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
        autorestart: true,
        max_restarts: 10,
        min_uptime: '10s',
        watch: false,
        ignore_watch: ['node_modules', 'logs', '.next'],
      }
    ]
  };