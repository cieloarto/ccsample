import React, { useEffect } from 'react';
import Navigation from './Navigation';
import { SidebarProps } from '../../types';
import styles from './Sidebar.module.css';

const Sidebar: React.FC<SidebarProps> = ({
  navigationItems,
  isOpen,
  onClose
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const target = event.target as Node;
      
      if (sidebar && !sidebar.contains(target) && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div 
          className={styles.overlay} 
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      <aside
        id="sidebar"
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        role="complementary"
        aria-label="Side navigation"
        aria-hidden={!isOpen}
      >
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>メニュー</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="サイドバーを閉じる"
            type="button"
          >
            <span className={styles.closeIcon} aria-hidden="true">×</span>
          </button>
        </div>

        <div className={styles.sidebarContent}>
          <Navigation
            items={navigationItems}
            orientation="vertical"
            showIcons={true}
            className={styles.sidebarNav}
          />

          <div className={styles.sidebarFooter}>
            <div className={styles.userSection}>
              <div className={styles.userAvatar} aria-hidden="true">
                👤
              </div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>ゲストユーザー</span>
                <span className={styles.userRole}>閲覧者</span>
              </div>
            </div>

            <div className={styles.quickActions}>
              <button className={styles.actionButton} type="button">
                🔍 検索
              </button>
              <button className={styles.actionButton} type="button">
                ⚙️ 設定
              </button>
              <button className={styles.actionButton} type="button">
                ❓ ヘルプ
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;