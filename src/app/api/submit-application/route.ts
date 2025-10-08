import { NextRequest, NextResponse } from 'next/server';
import { TelegramNotificationService } from '@/lib/telegram-bot';
import { extendedFormSchema } from '@/lib/form-validation';

let notificationService: TelegramNotificationService | null = null;

function getNotificationService() {
  if (!notificationService) {
    notificationService = new TelegramNotificationService(
      process.env.TELEGRAM_BOT_TOKEN!,
      process.env.TELEGRAM_GROUP_CHAT_ID!
    );
  }
  return notificationService;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    
    const validationResult = extendedFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Неверные данные', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const application = {
      name: validationResult.data.name,
      phone: validationResult.data.phone,
      sphere: validationResult.data.sphere || '',
      source: body.source || 'website_form',
    };

    const notificationService = getNotificationService();
    await notificationService.sendApplication(application);
    
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