import { ApplicationBot } from '@/lib/telegram-bot';
import dotenv from 'dotenv';

// Загружаем переменные окружения из .env файла
dotenv.config();

console.log('Запуск Telegram бота...');
const bot = new ApplicationBot(
  process.env.TELEGRAM_BOT_TOKEN!,
  process.env.TELEGRAM_GROUP_CHAT_ID!
);

bot.start();
