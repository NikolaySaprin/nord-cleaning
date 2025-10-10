import { YandexMetricaEvents } from "@/lib/yandex-metrica";

export interface PricingTier {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  YMtype?: typeof YandexMetricaEvents[keyof typeof YandexMetricaEvents];
}