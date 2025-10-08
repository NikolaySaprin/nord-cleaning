import { UseFormReset, UseFormSetError, UseFormReturn } from 'react-hook-form';

export interface UseFormSubmitOptions {
  source: FormSource;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface UseFormSubmitReturn {
  isSubmitting: boolean;
  submitError: string | null;
  isSuccess: boolean;
  submitForm: (data: any, reset: UseFormReset<any>, setError?: UseFormSetError<any>) => Promise<void>;
}

export type FormSource = 'contact_form' | 'bottom_form' | 'services_form' | 'modal_form';
