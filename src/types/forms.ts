// ApplicationFormData уже определен в application-types.ts

export interface ContactFormData {
  name: string;
  phone: string;
  message?: string;
}

export type FormSource = 'header' | 'hero' | 'services' | 'services_form' | 'bottom_form' | 'contact_modal' | 'contact_form' | 'modal_form';

export interface FormValidationErrors {
  name?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}

export interface FormState {
  isLoading: boolean;
  errors: FormValidationErrors;
  isSubmitted: boolean;
}
