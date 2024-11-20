import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8" />
              <span className="text-2xl font-serif">Café Chami</span>
            </div>
            <p className="text-amber-200 max-w-md">
              Join us for an unforgettable coffee experience. We're passionate about
              serving the perfect cup in a warm and welcoming atmosphere. ane hutto ubata ehema puluwan nm mata kochchara puluwan da
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-amber-200 hover:text-white">About</a></li>
              <li><a href="#menu" className="text-amber-200 hover:text-white">Menu</a></li>
              <li><a href="#location" className="text-amber-200 hover:text-white">Location</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white">Order Online</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
          <p>© {new Date().getFullYear()} Café Chami. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;