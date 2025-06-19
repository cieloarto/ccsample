import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  headerTitle?: string;
  companyName?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  headerTitle,
  companyName 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title={headerTitle} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer companyName={companyName} />
    </div>
  );
};

export default Layout;