export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links?: FooterLink[];
  content?: React.ReactNode;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
  headerTitle?: string;
  companyName?: string;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  fullWidth?: boolean;
  backgroundColor?: 'white' | 'gray' | 'transparent';
}

export interface HeaderProps {
  title?: string;
  logoSrc?: string;
  logoAlt?: string;
  navigationItems?: NavigationItem[];
  className?: string;
  variant?: 'primary' | 'secondary' | 'transparent';
  sticky?: boolean;
  showShadow?: boolean;
}

export interface FooterProps {
  companyName?: string;
  year?: number;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  className?: string;
  variant?: 'dark' | 'light';
  showCopyright?: boolean;
  logoSrc?: string;
  logoAlt?: string;
}