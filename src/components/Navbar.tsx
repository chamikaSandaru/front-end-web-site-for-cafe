import { useState } from 'react';
import { Menu as MenuIcon, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-800" />
            <span className="text-2xl font-serif text-amber-900">Café Chami</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-amber-900 hover:text-amber-700">About</a>
            <a href="#menu" className="text-amber-900 hover:text-amber-700">Menu</a>
            <a href="#location" className="text-amber-900 hover:text-amber-700">Location</a>
            <button className="px-6 py-2 bg-amber-800 text-white rounded-full hover:bg-amber-700 transition-colors">
              Order Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-amber-900 hover:text-amber-700" onClick={() => setIsOpen(false)}>About</a>
              <a href="#menu" className="text-amber-900 hover:text-amber-700" onClick={() => setIsOpen(false)}>Menu</a>
              <a href="#location" className="text-amber-900 hover:text-amber-700" onClick={() => setIsOpen(false)}>Location</a>
              <button className="px-6 py-2 bg-amber-800 text-white rounded-full hover:bg-amber-700 transition-colors">
                Order Online
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;