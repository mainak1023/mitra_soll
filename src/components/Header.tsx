import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Our Location', href: '/locations' },
    { name: 'Events and Exhibitions', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className={`bg-gradient-to-r from-gray-900 to-gray-800 text-white transition-all duration-500 ${isScrolled ? 'py-1 opacity-95' : 'py-2 md:py-3'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2 hover:text-orange-300 transition-colors duration-200">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="whitespace-nowrap">Sales: +91-9876543210</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 hover:text-orange-300 transition-colors duration-200">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="whitespace-nowrap">Service: +91-9876543211</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 hover:text-orange-300 transition-colors duration-200">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">info@mitracommercial.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white backdrop-blur-md transition-all duration-500 ${isScrolled ? 'shadow-2xl bg-white/95' : 'shadow-lg'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <img
                  src="/Public/assest/logo-1.png"
                  alt="Mitra Commercial Logo"
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl object-contain shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-xl bg-white"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-all duration-300">
                <div className="font-bold text-gray-900 text-base sm:text-xl group-hover:text-orange-600 transition-colors duration-300">Mitra Commercial</div>
                <div className="text-xs sm:text-sm text-gray-600 group-hover:text-orange-500 transition-colors duration-300">Tata Hitachi Dealer</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 xl:px-5 py-3 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-300 group overflow-hidden ${location.pathname === item.href
                    ? 'text-orange-600 bg-orange-50 shadow-md'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50 hover:shadow-md'
                    }`}
                >
                  <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10 ${location.pathname === item.href ? 'scale-x-100' : ''
                    }`}></div>
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full ${location.pathname === item.href ? 'w-full' : ''
                    }`}></div>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 sm:p-3 rounded-xl text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-10 rounded-xl"></div>
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <span className={`absolute block w-5 sm:w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2 sm:top-3' : 'top-1'
                  }`}></span>
                <span className={`absolute block w-5 sm:w-6 h-0.5 bg-current transform transition-all duration-300 top-2 sm:top-3 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}></span>
                <span className={`absolute block w-5 sm:w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2 sm:top-3' : 'top-3 sm:top-5'
                  }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-screen pb-4 sm:pb-6' : 'max-h-0'
            }`}>
            <div className="border-t border-gray-200 pt-4 sm:pt-6">
              <nav className="flex flex-col space-y-1 sm:space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:translate-x-2 sm:hover:translate-x-3 hover:scale-105 relative overflow-hidden group ${location.pathname === item.href
                      ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 shadow-md'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50 hover:shadow-md'
                      }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-5"></div>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;