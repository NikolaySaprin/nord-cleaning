import { NextRequest, NextResponse } from 'next/server';
import { ApplicationBot } from '@/lib/telegram-bot';
import { extendedFormSchema } from '@/lib/form-validation';

// Singleton для бота
let applicationBot: ApplicationBot | null = null;

function getApplicationBot() {
  if (!applicationBot) {
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
    
    // Валидация входных данных
    const validationResult = extendedFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Неверные данные', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    // Создаем объект заявки
    const application = {
      name: validationResult.data.name,
      phone: validationResult.data.phone,
      sphere: validationResult.data.sphere || '',
      source: body.source || 'website_form',
    };

    // Отправка в Telegram группу
    const bot = getApplicationBot();
    await bot.handleNewApplication(application);
    
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