export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export interface HeaderProps {
  navigationItems: NavigationItem[];
  logo?: string;
  showMobileMenu?: boolean;
  onMobileMenuToggle?: () => void;
}

export interface FooterProps {
  navigationItems: NavigationItem[];
  companyName?: string;
  year?: number;
}

export interface SidebarProps {
  navigationItems: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
}