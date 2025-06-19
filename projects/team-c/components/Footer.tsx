import React from 'react';
import { clsx } from 'clsx';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links?: FooterLink[];
  content?: React.ReactNode;
}

interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ReactNode;
}

interface FooterProps {
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

const Footer: React.FC<FooterProps> = ({ 
  companyName = 'My Company', 
  year = new Date().getFullYear(),
  description = 'We are dedicated to providing the best service possible.',
  sections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Sitemap', href: '/sitemap' }
      ]
    }
  ],
  socialLinks = [],
  className,
  variant = 'dark',
  showCopyright = true,
  logoSrc,
  logoAlt = 'Logo'
}) => {
  const variantClasses = {
    dark: {
      background: 'bg-gray-800 text-white',
      textSecondary: 'text-gray-300',
      border: 'border-gray-700',
      hover: 'hover:text-white'
    },
    light: {
      background: 'bg-gray-100 text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-gray-300',
      hover: 'hover:text-gray-900'
    }
  };

  const styles = variantClasses[variant];

  return (
    <footer className={clsx(
      styles.background,
      'p-6 mt-auto',
      className
    )}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {logoSrc && (
                <img 
                  src={logoSrc} 
                  alt={logoAlt} 
                  className="h-8 w-auto"
                />
              )}
              <h3 className="text-lg font-semibold">{companyName}</h3>
            </div>
            <p className={clsx(styles.textSecondary, 'text-sm mb-4')}>
              {description}
            </p>
            
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={clsx(
                      styles.textSecondary,
                      styles.hover,
                      'transition-colors duration-200'
                    )}
                    aria-label={social.platform}
                  >
                    {social.icon || social.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              {section.links && (
                <ul className={clsx(styles.textSecondary, 'text-sm space-y-1')}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className={clsx(
                          styles.hover,
                          'transition-colors duration-200'
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {section.content && (
                <div className={clsx(styles.textSecondary, 'text-sm')}>
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {showCopyright && (
          <div className={clsx(
            styles.border,
            styles.textSecondary,
            'border-t mt-6 pt-6 text-center text-sm'
          )}>
            &copy; {year} {companyName}. All rights reserved.
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;