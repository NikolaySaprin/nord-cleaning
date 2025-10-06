import { Service, ProcessStep, PricingTier, PackagingOption, Client, Promotion } from './index';

export const servicesData: Service[] = [
  {
    id: 0,
    category: "HoReCa",
    subtitle: "—  отели, рестораны, кейтеринг",
    title: "HoReCa",
    badge: "Белье, полотенца, скатерти, спецодежда",
    description: "Раздельные потоки белого/цветного\nЭкспресс-цикл от 6 часов для форс‑мажора\nМаркировка по объектам/службам: номер этажа/службы",
    image: "/assets/webp/service-hotel.webp"
  },
  {
    id: 2,
    category: "Спорт и фитнес",
    subtitle: "—  клубы, бассейны, секции",
    title: "Спорт и фитнес",
    badge: "Халаты, полотенца, спецодежда ",
    description: "Антибактериальные программы, эко-химия для полотенец\nСушка при контроле температуры ±2 °C, анти‑пиллинг\nГрафик забора утром/поздним вечером",
    image: "/assets/webp/service-fitness.webp"
  },
  {
    id: 3,
    category: "Салоны красоты и SPA",
    subtitle: "",
    title: "Салоны красоты и SPA",
    badge: "Халаты, полотенца, простыни ",
    description: "Специализированная химия против масел и красителей\nКондиционирование для сохранения мягкости\nИндивидуальные комплекты по мастерам/кабинетам",
    image: "/assets/webp/service-spa.webp"
  },
  {
    id: 4,
    category: "Для бань и бассейнов",
    subtitle: "",
    title: "Для бань и бассейнов",
    badge: "Халаты, полотенца, простыни",
    description: "Специальные программы против хлора и влажности\nБыстрая сушка для предотвращения запахов\nГипоаллергенные средства",
    image: "/assets/webp/service-pool.webp"
  },
  {
    id: 5,
    category: "Производство",
    subtitle: "",
    title: "Производство",
    badge: "Спецодежда, униформа, защитные костюмы",
    description: "Удаление промышленных загрязнений\nСпециальные программы для разных типов загрязнений\nКонтроль качества и маркировка",
    image: "/assets/webp/service-production.webp"
  },
  {
    id: 6,
    category: "Ритейл",
    subtitle: "",
    title: "Ритейл",
    badge: "Униформа, спецодежда, текстиль",
    description: "Быстрая обработка для торговых сетей\nИндивидуальная маркировка по магазинам\nГибкие графики забора и доставки",
    image: "/assets/webp/service-retail.webp"
  },
  {
    id: 7,
    category: "Недвижимость",
    subtitle: "",
    title: "Недвижимость",
    badge: "Постельное белье, полотенца, текстиль",
    description: "Сервис для жилых комплексов и офисов\nРегулярные графики обслуживания\nКонтроль качества и отчетность",
    image: "/assets/webp/service-realestate.webp"
  },
  {
    id: 8,
    category: "Пекарни и кафе",
    subtitle: "",
    title: "Пекарни и кафе",
    badge: "Фартуки, полотенца, салфетки",
    description: "Удаление жировых загрязнений\nГигиеническая обработка\nБыстрая сушка для предотвращения запахов",
    image: "/assets/webp/service-bakery.webp"
  }
];

import { Truck, Filter, Sparkles, Package, Tag, MapPin } from 'lucide-react';

export const processStepsData: ProcessStep[] = [
  {
    id: 1,
    title: 'ЗАБОР БЕЛЬЯ',
    description: 'Приезжаем бесплатно при заказе от 30 килограмм',
    icon: Truck,
    image: "/assets/webp/step-pickup.webp"
  },
  {
    id: 2,
    title: 'СОРТИРОВКА',
    description: 'Разделяем текстиль по видам тканей и степени загрязнения',
    icon: Filter,
    image: "/assets/webp/step-sorting.webp"
  },
  {
    id: 3,
    title: 'АКВАЧИСТКА, СТИРКА И ПЯТНОВЫВЕДЕНИЕ',
    description: 'Подбираем режим для каждого типа ткани',
    icon: Sparkles,
    image: "/assets/webp/step-washing.webp"
  },
  {
    id: 4,
    title: 'СУШКА, ГЛАЖКА И УПАКОВКА',
    description: 'Аккуратный вид и гигиеничность',
    icon: Package,
    image: "/assets/webp/step-drying.webp"
  },
  {
    id: 5,
    title: 'МАРКИРОВКА',
    description: 'Фотофиксация и маркировка каждого заказа',
    icon: Tag,
    image: "/assets/webp/step-marking.webp"
  },
  {
    id: 6,
    title: 'ДОСТАВКА ОБРАТНО',
    description: 'В согласованное время',
    icon: MapPin,
    image: "/assets/webp/step-delivery.webp"
  }
];

export const pricingTiersData: PricingTier[] = [
  {
    id: 'small',
    name: 'Малый объем',
    price: 'от 150₽/кг',
    description: 'До 100 кг в месяц',
    features: [
      'Стандартная обработка',
      'Доставка 2 раза в неделю',
      'Базовая маркировка'
    ],
    image: "/assets/webp/pricing-small.webp"
  },
  {
    id: 'medium',
    name: 'Средний объем',
    price: 'от 120₽/кг',
    description: '100-500 кг в месяц',
    features: [
      'Приоритетная обработка',
      'Доставка 3 раза в неделю',
      'Расширенная маркировка',
      'Персональный менеджер'
    ],
    image: "/assets/webp/pricing-medium.webp"
  },
  {
    id: 'large',
    name: 'Большой объем',
    price: 'от 90₽/кг',
    description: 'Свыше 500 кг в месяц',
    features: [
      'VIP обработка',
      'Ежедневная доставка',
      'Полная маркировка',
      'Персональный менеджер',
      'SLA по срокам'
    ],
    image: "/assets/webp/pricing-large.webp",
    popular: true
  }
];

export const packagingOptionsData: PackagingOption[] = [
  {
    id: 1,
    name: 'Индивидуальная упаковка',
    description: 'Каждый предмет в отдельной упаковке',
    image: "/assets/webp/packaging-individual.webp"
  },
  {
    id: 2,
    name: 'Упаковка для глажки',
    description: 'Специальная упаковка для глаженых изделий',
    image: "/assets/webp/packaging-ironing.webp"
  },
  {
    id: 3,
    name: 'Маркированная упаковка',
    description: 'Упаковка с индивидуальной маркировкой',
    image: "/assets/webp/packaging-marking.webp"
  },
  {
    id: 4,
    name: 'Медицинская упаковка',
    description: 'Стерильная упаковка для медицинских учреждений',
    image: "/assets/webp/packaging-medical.webp"
  }
];

export const clientsData: Client[] = [
  { name: "ТАЙРАЙ", id: 1, logo: "/assets/webp/tai-rai.webp" },
  { name: "ХОСТЕЛЫ РУС", id: 2, logo: "/assets/webp/rus-hostels.webp" },
  { name: "REDSTAR HOTELS", id: 3, logo: "/assets/webp/red-star.webp" },
  { name: "AURA SPA", id: 4, logo: "/assets/webp/aura.webp" },
  { name: "GYM-GYM", id: 6, logo: "/assets/webp/gym-logo.webp" },
  { name: "Бабин Двор", id: 8, logo: "/assets/webp/babin-dvor.webp" },
  { name: "BP", id: 9, logo: "/assets/bp-logo.svg" },
  { name: "Star", id: 10, logo: "/assets/webp/star-logo.webp" }
];

export const promotionsData: Promotion[] = [
  {
    id: 1,
    title: "Скидка 20% на первый заказ",
    description: "При заказе от 50 кг получите скидку 20% на первую стирку",
    image: "/assets/webp/promo-1.webp"
  },
  {
    id: 2,
    title: "Бесплатная доставка",
    description: "Бесплатная доставка при заказе от 100 кг в месяц",
    image: "/assets/webp/promo-2.webp"
  },
  {
    id: 3,
    title: "Экспресс-стирка",
    description: "Стирка за 6 часов для экстренных случаев",
    image: "/assets/webp/promo-3.webp"
  },
  {
    id: 4,
    title: "Круглосуточный сервис",
    description: "Работаем 24/7 для вашего удобства",
    image: "/assets/webp/promo-4.webp"
  }
];
