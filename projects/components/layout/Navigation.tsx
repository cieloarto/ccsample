import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavigationItem } from '../../types';
import styles from './Navigation.module.css';

interface NavigationProps {
  items: NavigationItem[];
  orientation?: 'horizontal' | 'vertical';
  showIcons?: boolean;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  items,
  orientation = 'horizontal',
  showIcons = true,
  className = ''
}) => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>('');

  useEffect(() => {
    setActiveItem(router.pathname);
  }, [router.pathname]);

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  const navigationClasses = [
    styles.navigation,
    styles[orientation],
    className
  ].filter(Boolean).join(' ');

  return (
    <nav className={navigationClasses} role="navigation">
      <ul className={styles.navList}>
        {items.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <Link
              href={item.href}
              className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {showIcons && item.icon && (
                <span className={styles.navIcon} aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <span className={styles.navLabel}>{item.label}</span>
              {isActive(item.href) && (
                <span className={styles.activeIndicator} aria-hidden="true" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;