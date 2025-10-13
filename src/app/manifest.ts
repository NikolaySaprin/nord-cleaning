import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NORD - Профессиональная прачечная для бизнеса',
    short_name: 'Nord',
    description: 'Профессиональная прачечная в Москве и МО. Круглосуточный сервис для отелей, фитнеса, SPA, производств.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3264F6',
    icons: [
      {
        src: '/favicon-16x16.svg',
        sizes: '16x16',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon-32x32.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
