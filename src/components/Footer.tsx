import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and Tagline */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <img
                src="/Public/assest/logo-1.png"
                alt="Mitra Commercial Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain bg-white"
              />
              <div>
                <div className="font-bold text-white text-base sm:text-lg">Mitra Commercial</div>
                <div className="text-xs sm:text-sm text-gray-400">Tata Hitachi Dealer</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mx-auto sm:mx-0">
              Your trusted partner for heavy equipment solutions across West Bengal and Sikkim.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-1 sm:gap-2 max-w-xs mx-auto sm:mx-0">
              <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm py-1">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm py-1">
                About Us
              </Link>
              <Link to="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm py-1">
                Products
              </Link>
              <Link to="/locations" className="text-gray-400 hover:text-orange-500 transition-colors text-sm py-1">
                Our Location
              </Link>
              <Link to="/events" className="text-gray-400 hover:text-orange-500 transition-colors text-sm py-1">
                Events
              </Link>
              <Link to="/gallery" className="text-gray-400 hover:text-orange-500 transition-colors text-sm py-1">
                Gallery
              </Link>
              <Link to="/career" className="text-gray-400 hover:text-orange-500 transition-colors text-sm py-1">
                Career
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm py-1">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-gray-400">Sales: +91-9876543210</div>
                  <div className="text-gray-400">Service: +91-9876543211</div>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@mitracommercial.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">Durgapur & Siliguri, West Bengal</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-4 mt-4 sm:mt-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Mitra Commercial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;