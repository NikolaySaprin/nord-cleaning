export interface Service {
  id: number;
  category: string;
  subtitle: string;
  title: string;
  badge: string;
  description: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export type ServiceType = 'horeca' | 'fitness' | 'spa' | 'pool' | 'production' | 'retail' | 'realestate' | 'bakery';
