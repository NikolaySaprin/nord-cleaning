import { NextRequest, NextResponse } from 'next/server';
import { extendedFormSchema } from '@/lib/form-validation';

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

    // Отправляем заявку в бот через webhook для создания треда
    const botWebhookUrl = process.env.BOT_WEBHOOK_URL || 'http://localhost:3001/api/application';
    
    const webhookResponse = await fetch(botWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(application),
    });

    if (!webhookResponse.ok) {
      console.error('Ошибка отправки в бот:', await webhookResponse.text());
      throw new Error('Ошибка отправки заявки в бот');
    }
    
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