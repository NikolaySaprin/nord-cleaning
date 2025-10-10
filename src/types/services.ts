import { YandexMetricaEvents } from "@/lib/yandex-metrica";

export interface Service {
  id: number;
  category: string;
  subtitle: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  YMtype?: typeof YandexMetricaEvents[keyof typeof YandexMetricaEvents];
}

export interface ServiceClientPageProps {
  YMtype?: typeof YandexMetricaEvents[keyof typeof YandexMetricaEvents];
}