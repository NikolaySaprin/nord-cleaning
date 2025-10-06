import { z } from 'zod';
// Схема валидации для данных формы
export const applicationFormSchema = z.object({
    name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
    phone: z.string().regex(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/, "Введите корректный номер телефона"),
    sphere: z.string().optional(), // Необязательное поле
    privacy: z.boolean().refine(val => val === true, "Необходимо согласие с политикой конфиденциальности")
});
