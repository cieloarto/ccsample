export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface HeaderProps {
  navigationItems: NavigationItem[];
  logo?: string;
  onMobileMenuToggle?: () => void;
}

export interface FooterProps {
  navigationItems: NavigationItem[];
  companyName?: string;
  year?: number;
}

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export interface SidebarProps {
  items: NavigationItem[];
  className?: string;
}

export interface NavigationProps {
  items: NavigationItem[];
  orientation?: 'horizontal' | 'vertical';
  showIcons?: boolean;
  className?: string;
}