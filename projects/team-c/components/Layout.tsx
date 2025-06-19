import React from 'react';
import { clsx } from 'clsx';
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from '../types/components';

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  headerTitle,
  companyName,
  className,
  showHeader = true,
  showFooter = true,
  fullWidth = false,
  backgroundColor = 'white'
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    transparent: 'bg-transparent'
  };

  return (
    <div className={clsx(
      'min-h-screen flex flex-col',
      backgroundClasses[backgroundColor],
      className
    )}>
      {showHeader && <Header title={headerTitle} />}
      <main className={clsx(
        'flex-grow',
        !fullWidth && 'container mx-auto px-4 py-8',
        fullWidth && 'w-full'
      )}>
        {children}
      </main>
      {showFooter && <Footer companyName={companyName} />}
    </div>
  );
};

export default Layout;