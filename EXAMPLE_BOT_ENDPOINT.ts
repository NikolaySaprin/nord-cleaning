/**
 * Example Bot Webhook Endpoint for nord-laundry-bot
 * 
 * This file shows what the bot needs to implement to receive
 * applications from the website.
 * 
 * Place this in your bot project (e.g., src/routes/application.ts)
 */

import express from 'express';

const router = express.Router();

/**
 * POST /api/application
 * 
 * Receives application submissions from the website
 * and creates a thread in the Telegram group
 */
router.post('/api/application', async (req, res) => {
  try {
    console.log('📥 Received application from website:', {
      body: req.body,
      timestamp: new Date().toISOString()
    });

    // Validate request body
    const { name, phone, sphere, source } = req.body;

    if (!name || !phone) {
      console.error('❌ Missing required fields:', { name, phone });
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name and phone'
      });
    }

    // Validate source
    const validSources = ['contact_form', 'bottom_form', 'services_form', 'modal_form', 'website_form'];
    if (source && !validSources.includes(source)) {
      console.warn('⚠️ Unknown source:', source);
    }

    // Format application data
    const applicationData = {
      name: name.trim(),
      phone: phone.trim(),
      sphere: sphere?.trim() || 'Не указана',
      source: source || 'website_form',
      timestamp: new Date().toISOString()
    };

    console.log('📝 Processing application:', applicationData);

    // TODO: Replace with your actual Telegram bot logic
    // Example: await createTelegramThread(applicationData);
    
    // For now, just log it
    console.log('✅ Application would be sent to Telegram group:', {
      name: applicationData.name,
      phone: applicationData.phone,
      sphere: applicationData.sphere,
      source: applicationData.source
    });

    // Simulate Telegram thread creation
    await simulateTelegramThreadCreation(applicationData);

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Application received and processed',
      data: {
        name: applicationData.name,
        phone: applicationData.phone,
        source: applicationData.source
      }
    });

  } catch (error) {
    console.error('❌ Error processing application:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });

    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

/**
 * Simulate creating a Telegram thread
 * Replace this with actual Telegram bot logic
 */
async function simulateTelegramThreadCreation(data: any) {
  // This is where you would use your Telegram bot to:
  // 1. Create a new topic/thread in the group
  // 2. Send the application details as a message
  
  console.log('📨 Creating Telegram thread with data:', data);
  
  // Example message format:
  const message = `
🆕 Новая заявка с сайта

👤 Имя: ${data.name}
📱 Телефон: ${data.phone}
🏢 Сфера: ${data.sphere}
📍 Источник: ${getSourceLabel(data.source)}

⏰ Время: ${new Date(data.timestamp).toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
  `.trim();

  console.log('Message to send:', message);

  // TODO: Use your Telegram bot library to send this message
  // Example with node-telegram-bot-api:
  // await bot.sendMessage(TELEGRAM_GROUP_CHAT_ID, message, {
  //   message_thread_id: await createThread(`Заявка: ${data.name}`)
  // });

  return true;
}

/**
 * Get human-readable label for form source
 */
function getSourceLabel(source: string): string {
  const labels: Record<string, string> = {
    'contact_form': 'Форма обратной связи',
    'bottom_form': 'Нижняя форма',
    'services_form': 'Форма из раздела услуг',
    'modal_form': 'Модальная форма',
    'website_form': 'Сайт (общая форма)'
  };

  return labels[source] || source;
}

export default router;

/**
 * Integration with main bot server
 * 
 * In your main bot file (e.g., src/index.ts or server.ts):
 * 
 * import express from 'express';
 * import applicationRouter from './routes/application';
 * 
 * const app = express();
 * app.use(express.json());
 * 
 * // Mount the application router
 * app.use('/api', applicationRouter);
 * 
 * app.listen(3001, () => {
 *   console.log('Bot webhook server listening on port 3001');
 * });
 */

/**
 * Environment Variables Required
 * 
 * Add to your .env file:
 * 
 * PORT=3001
 * TELEGRAM_BOT_TOKEN=your_bot_token_here
 * TELEGRAM_GROUP_CHAT_ID=your_group_chat_id_here
 * WEBHOOK_SECRET=your-secret-key-here (optional, for authentication)
 */

/**
 * Testing the Endpoint
 * 
 * curl -X POST http://localhost:3001/api/application \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "name": "Иван Петров",
 *     "phone": "+79991234567",
 *     "sphere": "Гостиничный бизнес",
 *     "source": "modal_form"
 *   }'
 */
