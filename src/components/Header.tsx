'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';
import Link from 'next/link';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navigation = [
    { name: 'О нас', href: '/about' },
    { name: 'Услуги', href: '/services' },
    { name: 'Контакты', href: '/contacts' },
  ];

  // Disable scroll when modals are open
  useEffect(() => {
    if (isMobileMenuOpen || isContactModalOpen) {
      // Block scroll on both html and body
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      // Also prevent touch scrolling on mobile
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Restore scroll
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isMobileMenuOpen, isContactModalOpen]);

  return (
    <>
      <header className="bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Desktop Navigation - Left */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - Left */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>

            {/* Logo - Center */}
            <div className="flex-1 flex justify-center lg:flex-none">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">❄</span>
                </div>
                <span className="text-2xl lg:text-3xl font-bold text-foreground">
                  Nord
                </span>
              </div>
            </div>

            {/* Contact Icons - Right */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              <a
                href="https://wa.me/79999999999"
                className="p-2 lg:p-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </a>
              <a
                href="https://t.me/nordlaundry"
                className="p-2 lg:p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
                title="Telegram"
              >
                <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsContactModalOpen(true)}
                className="hidden sm:flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Заявка</span>
              </Button>
              <div className="hidden lg:flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">+7 999 999-99-99</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div 
              className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className={`fixed inset-0 bg-white transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">❄</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">Nord</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>
              <nav className="p-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-lg text-foreground hover:text-primary transition-colors border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-6"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Оставить заявку
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};