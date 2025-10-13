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
    
    console.log('Отправка заявки в бот:', {
      url: botWebhookUrl,
      application,
      timestamp: new Date().toISOString()
    });
    
    let webhookSuccess = false;
    let webhookError = null;

    try {
      const webhookResponse = await fetch(botWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(application),
        signal: AbortSignal.timeout(5000), // 5 second timeout
      });

      if (!webhookResponse.ok) {
        const errorText = await webhookResponse.text();
        webhookError = {
          status: webhookResponse.status,
          statusText: webhookResponse.statusText,
          url: botWebhookUrl,
          error: errorText,
          timestamp: new Date().toISOString()
        };
        console.error('Ошибка отправки в бот:', webhookError);
      } else {
        webhookSuccess = true;
        console.log('Заявка успешно отправлена в бот:', {
          status: webhookResponse.status,
          timestamp: new Date().toISOString()
        });
      }
    } catch (webhookFetchError) {
      webhookError = {
        error: webhookFetchError instanceof Error ? webhookFetchError.message : String(webhookFetchError),
        url: botWebhookUrl,
        timestamp: new Date().toISOString()
      };
      console.error('Не удалось подключиться к боту:', webhookError);
    }

    // Если webhook не удался, логируем это, но не возвращаем ошибку пользователю
    if (!webhookSuccess) {
      console.warn('⚠️ ВАЖНО: Заявка не отправлена в бот. Сохраните данные вручную:', {
        application,
        webhookError,
        timestamp: new Date().toISOString()
      });
      
      // TODO: Здесь можно добавить резервное сохранение в БД или файл
      // Например: await saveToDatabase(application);
    }
    
    return NextResponse.json(
      { success: true, message: 'Заявка успешно отправлена' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Ошибка API маршрута:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}