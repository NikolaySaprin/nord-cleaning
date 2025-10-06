// Re-export all types for easy importing
export * from './application-types';
export * from './components';
export * from './forms';
export * from './services';
export * from './ui';

// Common utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// SEO types
export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
}
