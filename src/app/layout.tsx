import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { YandexMetrica } from "@/components/YandexMetrica"
import { NotificationProvider } from "@/contexts/notification-context"

const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Nord - Профессиональная прачечная для бизнеса в Москве и МО',
    template: '%s | Nord'
  },
  description: 'Профессиональная прачечная Nord в Москве и МО. Круглосуточный сервис для отелей, фитнеса, SPA, производств. Бесплатная доставка, контроль качества, SLA по срокам.',
  keywords: [
    'прачечная',
    'прачечная Москва',
    'прачечная для бизнеса',
    'прачечная отели',
    'прачечная фитнес',
    'прачечная SPA',
    'Nord прачечная',
    'профессиональная прачечная',
    'стирка белья',
    'стирка полотенец',
    'стирка спецодежды',
    'прачечная HoReCa',
    'прачечная производство'
  ],
  authors: [{ name: 'Nord' }],
  creator: 'Nord',
  publisher: 'Nord',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nord-laundry.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://nord-laundry.ru',
    title: 'Nord - Профессиональная прачечная для бизнеса в Москве и МО',
    description: 'Профессиональная прачечная Nord в Москве и МО. Круглосуточный сервис для отелей, фитнеса, SPA, производств. Бесплатная доставка, контроль качества.',
    siteName: 'Nord',
    images: [
      {
        url: '/assets/logo_nord.svg',
        width: 1200,
        height: 630,
        alt: 'Nord - Профессиональная прачечная для бизнеса',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nord - Профессиональная прачечная для бизнеса в Москве и МО',
    description: 'Профессиональная прачечная Nord в Москве и МО. Круглосуточный сервис для отелей, фитнеса, SPA, производств.',
    images: ['/assets/logo_nord.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nord",
  "description": "Профессиональная прачечная для бизнеса в Москве и МО",
  "url": "https://nord-laundry.ru",
  "logo": "https://nord-laundry.ru/assets/logo_nord.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+7-495-211-42-95",
    "contactType": "customer service",
    "availableLanguage": "Russian"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Москва",
    "addressRegion": "Московская область",
    "addressCountry": "RU"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 55.7558,
      "longitude": 37.6176
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Услуги прачечной",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Стирка белья для отелей",
          "description": "Профессиональная стирка постельного белья, полотенец для отелей"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Стирка для фитнес-клубов",
          "description": "Стирка полотенец, халатов для фитнес-клубов и SPA"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Стирка спецодежды",
          "description": "Стирка рабочей одежды для производственных предприятий"
        }
      }
    ]
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-32x32.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3264F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${montserrat.variable} font-montserrat`}>
        <YandexMetrica />
        <TooltipProvider>
          <NotificationProvider>
            {children}
            <Toaster />
          </NotificationProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
