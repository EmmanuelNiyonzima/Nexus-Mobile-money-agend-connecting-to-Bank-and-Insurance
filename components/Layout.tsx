
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (l: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, href: '#home' },
    { name: t.navSolution, href: '#solution' },
    { name: t.navHowItWorks, href: '#how-it-works' },
    { name: t.navImpact, href: '#impact' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-indigo-600 p-2 rounded-lg mr-2">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center font-bold text-indigo-600 text-xs">NL</div>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-indigo-900' : 'text-white'}`}>Nexus Link</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="relative group">
              <button className={`flex items-center text-sm font-medium ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
                <Globe className="w-4 h-4 mr-1" />
                {lang}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {(['EN', 'SW', 'RW', 'LG'] as Language[]).map(l => (
                  <button 
                    key={l}
                    onClick={() => setLang(l)}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {l === 'EN' ? 'English' : l === 'SW' ? 'Swahili' : l === 'RW' ? 'Kinyarwanda' : 'Luganda'}
                  </button>
                ))}
              </div>
            </div>
            
            <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
              {t.heroCTA1}
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setLang(lang === 'EN' ? 'SW' : 'EN')} className={`text-xs font-bold border rounded px-2 py-1 ${isScrolled ? 'border-slate-300' : 'border-white/30 text-white'}`}>
              {lang}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-slate-900' : 'text-white'}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-in slide-in-from-top-4 duration-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 grid grid-cols-2 gap-2">
                {(['EN', 'SW', 'RW', 'LG'] as Language[]).map(l => (
                  <button 
                    key={l}
                    onClick={() => { setLang(l); setIsMenuOpen(false); }}
                    className={`px-3 py-2 text-sm rounded-md border ${lang === l ? 'bg-indigo-600 text-white border-indigo-600' : 'text-slate-600 border-slate-200'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <a href="#contact" className="block w-full text-center bg-indigo-600 text-white py-4 rounded-xl font-bold mt-4">
                {t.heroCTA1}
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-indigo-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-600 p-2 rounded-lg mr-2">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center font-bold text-indigo-600 text-xs">NL</div>
                </div>
                <span className="text-2xl font-bold">Nexus Link</span>
              </div>
              <p className="text-indigo-200 mb-8 max-w-md">
                Empowering the backbone of African commerce. Nexus Link bridges the gap between digital finance and physical cash-in/cash-out points.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Explore</h4>
              <ul className="space-y-4 text-indigo-200 text-sm">
                <li><a href="#solution" className="hover:text-white">Our Solution</a></li>
                <li><a href="#how-it-works" className="hover:text-white">How it Works</a></li>
                <li><a href="#impact" className="hover:text-white">Impact Stories</a></li>
                <li><a href="#roadmap" className="hover:text-white">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-indigo-200 text-sm">
                <li>info@nexuslink.inc</li>
                <li>Kigali, Rwanda</li>
                <li>+250 788 123 456</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 flex flex-col md:row items-center justify-between text-indigo-300 text-xs text-center md:text-left">
            <p>© 2025 Nexus Inc. All rights reserved. Nexus Link is a registered trademark.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
