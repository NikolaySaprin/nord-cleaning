import { YandexMetricaEvents } from "@/lib/yandex-metrica";

export interface Promotion {
    id: number;
    title: string;
    description: string;
    image: string;
    discount: string | null;
    YMtype?: typeof YandexMetricaEvents[keyof typeof YandexMetricaEvents];
}