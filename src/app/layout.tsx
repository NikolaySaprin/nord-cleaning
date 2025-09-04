import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: {
    default: 'Nord Clean Business - Профессиональная химчистка в Москве',
    template: '%s | Nord Clean Business'
  },
  description: 'Профессиональная химчистка Nord Clean Business в Москве. Круглосуточный сервис, качественная обработка, доступные цены. Закажите химчистку онлайн!',
  keywords: [
    'химчистка',
    'химчистка Москва',
    'химчистка на дому',
    'химчистка ковров',
    'химчистка мебели',
    'химчистка одежды',
    'Nord Clean Business',
    'профессиональная химчистка',
    'круглосуточная химчистка'
  ],
  authors: [{ name: 'Nord Clean Business' }],
  creator: 'Nord Clean Business',
  publisher: 'Nord Clean Business',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nordcleanbusiness.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://nordcleanbusiness.ru',
    title: 'Nord Clean Business - Профессиональная химчистка в Москве',
    description: 'Профессиональная химчистка Nord Clean Business в Москве. Круглосуточный сервис, качественная обработка, доступные цены.',
    siteName: 'Nord Clean Business',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nord Clean Business - Профессиональная химчистка',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nord Clean Business - Профессиональная химчистка в Москве',
    description: 'Профессиональная химчистка Nord Clean Business в Москве. Круглосуточный сервис, качественная обработка, доступные цены.',
    images: ['/og-image.jpg'],
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
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  )
}
