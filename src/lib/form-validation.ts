import { z } from 'zod';

// Базовая схема для всех форм заявок
export const baseFormSchema = z.object({
  name: z.string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(100, "Имя не должно превышать 100 символов"),
  phone: z.string()
    .regex(
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
      "Введите корректный номер телефона"
    ),
  privacy: z.coerce.boolean()
    .refine(val => val === true, "Необходимо согласие с политикой конфиденциальности")
});

// Единая схема с опциональным полем сферы/отрасли
export const unifiedFormSchema = baseFormSchema.extend({
  sphere: z.string().optional() // Используется для sphere или industry
});

// Типы данных на основе схем
export type BaseFormData = z.infer<typeof baseFormSchema>;
export type UnifiedFormData = z.infer<typeof unifiedFormSchema>;

// Общий тип для всех форм заявок
export type FormSource = 'contact_form' | 'bottom_form' | 'services_form' | 'modal_form';

// Тип для заявки, отправляемой в API
export type ApplicationSubmission = UnifiedFormData & {
  source: FormSource;
};

// Функция для форматирования номера телефона
export const formatPhoneNumber = (value: string): string => {
  // Удаляем все нецифровые символы
  const digits = value.replace(/\D/g, '');
  
  // Если пусто, возвращаем пустую строку
  if (!digits) return '';
  
  // Нормализуем номер - убираем лишние 7 и 8 в начале
  let normalizedDigits = digits;
  if (digits.startsWith('8')) {
    normalizedDigits = '7' + digits.slice(1);
  } else if (digits.startsWith('7')) {
    normalizedDigits = digits;
  } else {
    normalizedDigits = '7' + digits;
  }
  
  // Форматируем номер телефона в виде +7 (XXX) XXX-XX-XX
  if (normalizedDigits.length <= 1) {
    return `+7 (${normalizedDigits}`;
  } else if (normalizedDigits.length <= 4) {
    return `+7 (${normalizedDigits.slice(1, 4)}`;
  } else if (normalizedDigits.length <= 7) {
    return `+7 (${normalizedDigits.slice(1, 4)}) ${normalizedDigits.slice(4, 7)}`;
  } else if (normalizedDigits.length <= 9) {
    return `+7 (${normalizedDigits.slice(1, 4)}) ${normalizedDigits.slice(4, 7)}-${normalizedDigits.slice(7, 9)}`;
  } else {
    return `+7 (${normalizedDigits.slice(1, 4)}) ${normalizedDigits.slice(4, 7)}-${normalizedDigits.slice(7, 9)}-${normalizedDigits.slice(9, 11)}`;
  }
};

// Функция для нормализации номера телефона перед отправкой
export const normalizePhoneNumber = (value: string): string => {
  // Удаляем все нецифровые символы
  const digits = value.replace(/\D/g, '');
  
  // Добавляем +7 в начало, если нужно
  if (digits.startsWith('8') || digits.startsWith('7')) {
    return `+7${digits.slice(1)}`;
  } else if (!digits.startsWith('+')) {
    return `+7${digits}`;
  }
  
  return digits;
};

// Обратная совместимость - экспортируем старые типы
export type ExtendedFormData = UnifiedFormData;
export type ContactModalFormData = UnifiedFormData;
export const extendedFormSchema = unifiedFormSchema;
export const contactModalSchema = unifiedFormSchema;