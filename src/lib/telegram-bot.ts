import { Application } from '../types/application-types';

/**
 * Класс для отправки заявок в Telegram бот
 * Используется только в Next.js приложении для отправки данных
 */
export class TelegramNotificationService {
  private botToken: string;
  private groupChatId: string;

  constructor(botToken: string, groupChatId: string) {
    if (!botToken) {
      throw new Error('Telegram bot token is required');
    }
    if (!groupChatId) {
      throw new Error('Group chat ID is required');
    }
    this.botToken = botToken;
    this.groupChatId = groupChatId;
  }

  /**
   * Отправляет заявку в Telegram группу
   */
  async sendApplication(application: Application): Promise<void> {
    try {
      const message = this.formatApplicationMessage(application);
      
      const response = await fetch(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: this.groupChatId,
          text: message,
          parse_mode: 'HTML'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Telegram API error: ${errorData.description || 'Unknown error'}`);
      }

    } catch (error) {
      console.error('Ошибка отправки заявки в Telegram:', error);
      throw error;
    }
  }

  /**
   * Форматирует сообщение о заявке
   */
  private formatApplicationMessage(application: Application): string {
    const sourceLabels: Record<Application['source'], string> = {
      'website_form': 'с сайта',
      'contact_form': 'из формы контакта',
      'bottom_form': 'из нижней формы',
      'services_form': 'из раздела услуг',
      'modal_form': 'из модального окна',
      'whatsapp': 'из WhatsApp',
      'telegram_direct': 'из Telegram'
    };
    
    const sourceLabel = sourceLabels[application.source] || 'с сайта';
    
    let message: string;
    
    if (application.source === 'telegram_direct') {
      message = `💬 Новая заявка ${sourceLabel}:\n\n👤 Пользователь: ${application.userNameTelegram}${application.userUsernameTelegram ? ` (@${application.userUsernameTelegram})` : ''}\n📝 Вопрос: ${application.userMessage}`;
    } else {
      message = `📋 Новая заявка ${sourceLabel}:\n\n👤 Имя: ${application.name}\n📞 Телефон: ${application.phone}`;
    }
    
    if (application.sphere) {
      message += `\n🏢 Сфера: ${application.sphere}`;
    }
    
    const moscowTime = new Date().toLocaleString('ru-RU', { 
      timeZone: 'Europe/Moscow',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    message += `\n⏰ Время: ${moscowTime} (МСК)\n\nСтатус: ⏳ Ожидает обработки`;
    
    return message;
  }
}