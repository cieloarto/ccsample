import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Team B. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;