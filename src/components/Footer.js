import React from 'react';
import { Target, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const footerLinks = ['Về chúng tôi', 'Bảng giá', 'Liên hệ', 'Chính sách', 'Điều khoản'];
  const socialIcons = [
    { icon: <Twitter className="h-6 w-6" />, href: '#' },
    { icon: <Linkedin className="h-6 w-6" />, href: '#' },
    { icon: <Facebook className="h-6 w-6" />, href: '#' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center">
            <Target className="h-8 w-8 text-red-500" />
            <span className="ml-3 text-2xl font-bold text-white">Gains AI</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="text-base text-slate-400 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>
          <div className="flex space-x-6">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.href} className="text-slate-400 hover:text-white transition-colors">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gains AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
