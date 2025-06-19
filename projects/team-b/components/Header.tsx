import React from 'react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Team B' }) => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-200 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-200 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-200 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;