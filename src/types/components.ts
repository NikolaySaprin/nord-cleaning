import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface PackagingOption {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
  validUntil?: string;
}

export interface ContactInfo {
  phone: string;
  email?: string;
  address?: string;
  workingHours?: string;
}
