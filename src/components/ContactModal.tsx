'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  phone: z.string().regex(/^\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/, 'Некорректный формат телефона'),
  email: z.string().email('Некорректный email адрес'),
  comment: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Block scroll on both html and body
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      // Also prevent touch scrolling on mobile
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Restore scroll
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isOpen]);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', data);
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    reset();
    onClose();
    setIsSubmitting(false);
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 0) return '';
    if (digits.length === 1 && digits[0] === '7') return '+7 ';
    if (digits.length <= 4) return `+7 ${digits.slice(1)}`;
    if (digits.length <= 7) return `+7 ${digits.slice(1, 4)} ${digits.slice(4)}`;
    if (digits.length <= 9) return `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
        
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Оставить заявку</h2>
          <p className="text-muted-foreground">
            Заполните форму и мы свяжемся с вами для обсуждения деталей
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Ваше имя *</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Введите ваше имя"
              className="mt-1"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              {...register('phone', {
                onChange: (e) => {
                  e.target.value = formatPhone(e.target.value);
                }
              })}
              placeholder="+7 999 999-99-99"
              className="mt-1"
            />
            {errors.phone && (
              <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="example@mail.com"
              className="mt-1"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="comment">Комментарий</Label>
            <Textarea
              id="comment"
              {...register('comment')}
              placeholder="Расскажите подробнее о ваших потребностях..."
              rows={3}
              className="mt-1"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Отправляется...</span>
              </div>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};