import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { LayoutProps, NavigationItem } from '../../types';
import styles from './Layout.module.css';

const defaultNavigationItems: NavigationItem[] = [
  { label: 'ホーム', href: '/' },
  { label: 'サービス', href: '/services' },
  { label: '会社情報', href: '/about' },
  { label: 'ブログ', href: '/blog' },
  { label: 'お問い合わせ', href: '/contact' },
];

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'My App',
  description = 'Next.jsを使用したWebアプリケーション'
}) => {
  const pageTitle = title === 'My App' ? title : `${title} | My App`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="My App" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#0070f3" />
      </Head>

      <div className={styles.layout}>
        <Header navigationItems={defaultNavigationItems} />
        
        <main className={styles.main} role="main">
          <div className={styles.container}>
            {children}
          </div>
        </main>
        
        <Footer 
          navigationItems={defaultNavigationItems}
          companyName="My Company"
        />
      </div>
    </>
  );
};

export default Layout;