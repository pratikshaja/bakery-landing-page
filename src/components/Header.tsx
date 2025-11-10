import { Cake, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Cake className="w-8 h-8 text-rose-500" />
            <span className="text-2xl font-bold text-rose-600">SweetCrust Bakery</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-500 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-rose-500 transition">
              Menu
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-rose-500 transition">
              About
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-500 transition">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-rose-500 transition">
              Contact
            </button>
            <button className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition shadow-md">
              Order Now
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-rose-500 py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left text-gray-700 hover:text-rose-500 py-2">
              Menu
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-rose-500 py-2">
              About
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-gray-700 hover:text-rose-500 py-2">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-rose-500 py-2">
              Contact
            </button>
            <button className="w-full bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition">
              Order Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
