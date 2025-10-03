import { Application, applicationFormSchema } from '@/types/application-types';
import { NextRequest, NextResponse } from 'next/server';

// Инициализация бота (переиспользуется между запросами)
let applicationBot: any = null;

function getApplicationBot() {
  if (!applicationBot) {
    const { ApplicationBot } = require('@/lib/telegram-bot');
    applicationBot = new ApplicationBot(
      process.env.TELEGRAM_BOT_TOKEN!,
      process.env.TELEGRAM_GROUP_CHAT_ID!
    );
  }
  return applicationBot;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    
    // Валидация входных данных в зависимости от источника
    let applicationData: Application;
    
    if (body.source === 'website_form' || body.source === 'whatsapp') {
      // Для сайта и WhatsApp: валидируем форму
      const validationResult = applicationFormSchema.safeParse(body);
      if (!validationResult.success) {
        return NextResponse.json(
          { error: 'Неверные данные', details: validationResult.error.issues },
          { status: 400 }
        );
      }
      applicationData = {
        ...validationResult.data,
        source: body.source
      };
    } else if (body.source === 'telegram_direct') {
      // Для Telegram: используем данные из сообщения
      applicationData = body as Application;
    } else {
      return NextResponse.json(
        { error: 'Неверный источник заявки' },
        { status: 400 }
      );
    }

    // Отправка в Telegram группу
    const bot = getApplicationBot();
    await bot.handleNewApplication(applicationData);
    
    return NextResponse.json(
      { success: true, message: 'Заявка успешно отправлена' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Ошибка API маршрута:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}