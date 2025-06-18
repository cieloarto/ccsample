import React from 'react';
import Link from 'next/link';

interface NavigationItem {
  label: string;
  href: string;
}

interface FooterProps {
  navigationItems?: NavigationItem[];
  companyName?: string;
  year?: number;
}

const defaultNavigationItems: NavigationItem[] = [
  { label: 'ホーム', href: '/' },
  { label: 'サービス', href: '/services' },
  { label: '会社情報', href: '/about' },
  { label: 'お問い合わせ', href: '/contact' },
];

const Footer: React.FC<FooterProps> = ({ 
  navigationItems = defaultNavigationItems, 
  companyName = 'My Company',
  year = new Date().getFullYear()
}) => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-blue-600 mb-3">{companyName}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              革新的なソリューションを提供し、お客様のビジネスの成長をサポートします。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">ナビゲーション</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a 
                  href="mailto:info@example.com" 
                  className="hover:text-blue-600 transition-colors"
                >
                  info@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a 
                  href="tel:+81-3-1234-5678" 
                  className="hover:text-blue-600 transition-colors"
                >
                  03-1234-5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>東京都渋谷区1-1-1</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">フォローする</h4>
            <div className="flex gap-3">
              <a 
                href="https://twitter.com/mycompany" 
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all hover:shadow-md"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐦
              </a>
              <a 
                href="https://facebook.com/mycompany" 
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all hover:shadow-md"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘
              </a>
              <a 
                href="https://linkedin.com/company/mycompany" 
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all hover:shadow-md"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼
              </a>
              <a 
                href="https://instagram.com/mycompany" 
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all hover:shadow-md"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>&copy; {year} {companyName}. All rights reserved.</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;