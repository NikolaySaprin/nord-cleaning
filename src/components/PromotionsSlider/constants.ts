import { YandexMetricaEvents } from "@/lib/yandex-metrica"
import { Promotion } from "@/types/promotions"

export const promotions: Promotion[] = [
    {
      id: 1,
      title: "Первая стирка — без вашего риска!",
      description: "Попробуйте качество наших услуг бесплатно! Первая пробная стирка позволит убедиться в безупречной чистоте и заботе о ткани без каких-либо затрат.",
      image: "/assets/promo-1.webp",
      discount: null,
      YMtype: YandexMetricaEvents.PROMOTION_FIRST_WASH
    },
    {
      id: 2,
      title: "Мы - за долгое сотрудничество!",
      description: "Оставайтесь с нами дольше — получайте больше. На второй месяц сотрудничества действует специальная скидка –10% на весь объём услуг.",
      image: "/assets/promo-2.webp",
      discount: null,
      YMtype: YandexMetricaEvents.PROMOTION_SECOND_MONTH
    },
    {
      id: 3,
      title: "Белоснежный бонус — пятновыведение и отбеливание",
      description: "Мы заботимся о ваших вещах. При каждой стирке вы получаете отбеливание и выведение пятен в подарок — никаких скрытых платежей, только идеально чистый результат.",
      image: "/assets/promo-3.webp",
      discount: null,
      YMtype: YandexMetricaEvents.PROMOTION_WHITE_BONUS
    },
    {
      id: 4,
      title: "Сдавайте больше - платите меньше!",
      description: "Если объём вашего белья превышает 3 тонны в месяц, мы предложим персональные условия: специальные тарифы и гибкую систему скидок.",
      image: "/assets/promo-4.webp",
      discount: null,
      YMtype: YandexMetricaEvents.PROMOTION_MORE_THAN_3_TONS
    }
  ]