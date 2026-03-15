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
          <div className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold text-white">Gains<span className="gradient-text">AI</span></span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:order-2">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="text-base text-slate-400 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-6 md:order-3">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.href} className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">{social.icon.type.displayName}</span>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-base text-slate-500">
          <p>&copy; {new Date().getFullYear()} GainsAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
