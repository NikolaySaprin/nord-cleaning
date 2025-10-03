import { Bot, Context } from 'grammy';
import { Application } from './application-types';

export class ApplicationBot {
  private bot: Bot;
  private activeThreads: Map<string, number> = new Map(); // Хранит thread_id по идентификатору пользователя

  constructor(token: string, private groupChatId: string) {
    this.bot = new Bot(token);
    this.setupHandlers();
  }

  private setupHandlers() {
    // Обработчик команды /start для личных сообщений
    this.bot.command('start', async (ctx: Context) => {
      await ctx.reply(`Добро пожаловать! Опишите ваш вопрос, и наши специалисты свяжутся с вами в ближайшее время.`);
    });

    // Обрабатываем все текстовые сообщения в личных чатах
    this.bot.on('message', async (ctx: Context) => {
      if (ctx.chat?.type !== 'private') return;
      
      const user = ctx.from;
      const messageText = ctx.message?.text;
      
      if (!user || !messageText) return;

      // Создаем заявку из сообщения в Telegram
      const application: Application = {
        source: 'telegram_direct',
        userIdentifier: `tg_${user.username || user.id}`,
        userName: `${user.first_name} ${user.last_name || ''}`.trim(),
        userUsername: user.username,
        userMessage: messageText,
        userId: user.id,
        name: `${user.first_name} ${user.last_name || ''}`.trim(), // Имя для общего поля
        phone: 'Не указан' // В Telegram телефон не доступен по умолчанию
      };

      await this.handleNewApplication(application);
      await ctx.reply("Спасибо! Ваш вопрос передан нашему специалисту. Мы ответим вам в этом чате.");
    });
  }

  async handleNewApplication(application: Application): Promise<void> {
    try {
      const userIdentifier = application.userIdentifier || `website_${application.phone}`;
      let threadId = this.activeThreads.get(userIdentifier);
      
      if (!threadId) {
        // Создаем новую тему форума
        const topicName = this.generateTopicName(application);
        
        const topic = await this.bot.api.createForumTopic(
          this.groupChatId, 
          topicName
        );
        
        threadId = topic.message_thread_id;
        this.activeThreads.set(userIdentifier, threadId);
        
        // Отправляем первоначальное сообщение о заявке
        const message = this.formatApplicationMessage(application);
        await this.bot.api.sendMessage(
          this.groupChatId, 
          message,
          { message_thread_id: threadId }
        );
      } else {
        // Добавляем в существующую тему
        const message = this.formatNewMessage(application);
        await this.bot.api.sendMessage(
          this.groupChatId,
          message,
          { message_thread_id: threadId }
        );
      }
    } catch (error) {
      console.error('Ошибка обработки заявки:', error);
    }
  }

  private generateTopicName(application: Application): string {
    switch (application.source) {
      case 'website_form':
        return `Сайт: ${application.phone}`;
      case 'whatsapp':
        return `WhatsApp: ${application.phone}`;
      case 'telegram_direct':
        return `Telegram: @${application.userUsername || application.userId}`;
      default:
        return `Заявка: ${application.phone}`;
    }
  }

  private formatApplicationMessage(application: Application): string {
    let message = '';
    
    switch (application.source) {
      case 'website_form':
        message = `📋 Новая заявка с сайта:\n\n👤 Имя: ${application.name}\n📞 Телефон: ${application.phone}`;
        break;
      case 'whatsapp':
        message = `📱 Новая заявка из WhatsApp:\n\n👤 Имя: ${application.name}\n📞 Телефон: ${application.phone}`;
        break;
      case 'telegram_direct':
        message = `💬 Новая заявка из Telegram:\n\n👤 Пользователь: ${application.userName}${application.userUsername ? ` (@${application.userUsername})` : ''}\n📝 Вопрос: ${application.userMessage}`;
        break;
    }
    
    // Добавляем сферу деятельности, если есть
    if (application.sphere) {
      message += `\n🏢 Сфера: ${application.sphere}`;
    }
    
    message += `\n⏰ Время: ${new Date().toLocaleString('ru-RU')}\n\nСтатус: ⏳ Ожидает обработки`;
    
    return message;
  }

  private formatNewMessage(application: Application): string {
    return `📝 Новое сообщение в заявке:\n\n${application.userMessage || 'Без текста'}\n⏰ Время: ${new Date().toLocaleString('ru-RU')}`;
  }

  // Метод для отправки ответов пользователям (для Telegram)
  async sendToUser(userId: number, message: string): Promise<void> {
    try {
      await this.bot.api.sendMessage(userId, message);
    } catch (error) {
      console.error('Ошибка отправки сообщения пользователю:', error);
    }
  }

  start(): void {
    this.bot.start();
    console.log('Telegram бот запущен');
  }
}