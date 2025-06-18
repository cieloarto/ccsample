import React from 'react';
import Link from 'next/link';
import { FooterProps } from '../../types';
import styles from './Footer.module.css';

const Footer: React.FC<FooterProps> = ({ 
  navigationItems, 
  companyName = 'My Company',
  year = new Date().getFullYear()
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>{companyName}</h3>
            <p className={styles.footerDescription}>
              革新的なソリューションを提供し、お客様のビジネスの成長をサポートします。
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>ナビゲーション</h4>
            <nav aria-label="Footer navigation">
              <ul className={styles.footerNavList}>
                {navigationItems.map((item, index) => (
                  <li key={index} className={styles.footerNavItem}>
                    <Link href={item.href} className={styles.footerNavLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>お問い合わせ</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <a href="mailto:info@example.com" className={styles.contactLink}>
                  info@example.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+81-3-1234-5678" className={styles.contactLink}>
                  03-1234-5678
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span className={styles.contactText}>
                  東京都渋谷区1-1-1
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>フォローする</h4>
            <div className={styles.socialLinks}>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐦
              </a>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘
              </a>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼
              </a>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {year} {companyName}. All rights reserved.</p>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              プライバシーポリシー
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;