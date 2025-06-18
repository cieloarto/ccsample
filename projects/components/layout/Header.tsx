import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderProps } from '../../types';
import styles from './Header.module.css';

const Header: React.FC<HeaderProps> = ({ 
  navigationItems, 
  logo = 'MyApp',
  showMobileMenu = false,
  onMobileMenuToggle 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (onMobileMenuToggle) {
      onMobileMenuToggle();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/">
              <span className={styles.logoText}>{logo}</span>
            </Link>
          </div>

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <ul className={styles.navList}>
              {navigationItems.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.icon && <span className={styles.navIcon}>{item.icon}</span>}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={styles.mobileMenuButton}
            onClick={handleMobileMenuToggle}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <span className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav 
            id="mobile-menu" 
            className={styles.mobileNav}
            aria-label="Mobile navigation"
          >
            <ul className={styles.mobileNavList}>
              {navigationItems.map((item, index) => (
                <li key={index} className={styles.mobileNavItem}>
                  <Link 
                    href={item.href} 
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon && <span className={styles.navIcon}>{item.icon}</span>}
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