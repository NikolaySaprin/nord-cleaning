'use client';
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Страница не найдена
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            🏠 На главную
          </Link>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            ← Назад
          </Link>
        </div>
      </div>
    </div>
  )
}
