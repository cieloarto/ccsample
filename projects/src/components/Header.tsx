'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface HeaderProps {
  navigationItems?: NavigationItem[];
  logo?: string;
  onMobileMenuToggle?: () => void;
}

const defaultNavigationItems: NavigationItem[] = [
  { label: 'ホーム', href: '/' },
  { label: 'サービス', href: '/services' },
  { label: 'チームD', href: '/team-d' },
  { label: '会社情報', href: '/about' },
  { label: 'お問い合わせ', href: '/contact' },
];

const Header: React.FC<HeaderProps> = ({ 
  navigationItems = defaultNavigationItems, 
  logo = 'MyApp',
  onMobileMenuToggle 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (onMobileMenuToggle) {
      onMobileMenuToggle();
    }
  };

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              {logo}
            </Link>
          </div>

          <nav className="hidden md:flex" aria-label="Primary navigation">
            <ul className="flex space-x-8">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={handleMobileMenuToggle}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gray-700 transition-transform ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-gray-700 transition-opacity ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-gray-700 transition-transform ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav 
            id="mobile-menu" 
            className="md:hidden border-t pb-4"
            aria-label="Mobile navigation"
          >
            <ul className="py-2">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;