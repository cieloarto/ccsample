import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col" role="main">
        <div className="container mx-auto px-4 py-8 flex-1">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;