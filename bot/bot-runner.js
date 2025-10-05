import { ApplicationBot } from '../src/lib/telegram-bot.js';

console.log('Запуск Telegram бота...');
const bot = new ApplicationBot(
  process.env.TELEGRAM_BOT_TOKEN,
  process.env.TELEGRAM_GROUP_CHAT_ID
);

bot.start();
