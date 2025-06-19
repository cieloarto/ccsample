import React from 'react';
import { clsx } from 'clsx';
import { HeaderProps, NavigationItem } from '../types/components';

const Header: React.FC<HeaderProps> = ({ 
  title = 'My Application',
  logoSrc,
  logoAlt = 'Logo',
  navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  className,
  variant = 'primary',
  sticky = false,
  showShadow = true
}) => {
  const variantClasses = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-800 text-white',
    transparent: 'bg-transparent text-gray-900'
  };

  const hoverClasses = {
    primary: 'hover:text-blue-200',
    secondary: 'hover:text-gray-300',
    transparent: 'hover:text-blue-600'
  };

  return (
    <header className={clsx(
      'p-4',
      showShadow && 'shadow-md',
      sticky && 'sticky top-0 z-50',
      variantClasses[variant],
      className
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {logoSrc && (
            <img 
              src={logoSrc} 
              alt={logoAlt} 
              className="h-8 w-auto"
            />
          )}
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        
        {navigationItems.length > 0 && (
          <nav>
            <ul className="flex space-x-6">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className={clsx(
                      'transition-colors duration-200',
                      hoverClasses[variant],
                      item.active && 'font-semibold underline'
                    )}
                  >
                    {item.label}
                  </a>
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