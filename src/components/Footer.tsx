import { Cake, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cake className="w-8 h-8 text-rose-500" />
              <span className="text-2xl font-bold">SweetCrust</span>
            </div>
            <p className="text-gray-400">
              Baking happiness since 2020. Fresh, natural, and made with love.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-rose-500 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-400 hover:text-rose-500 transition"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-rose-500 transition"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-rose-500 transition"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Baker Street</li>
              <li>Sweet Town, ST 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@sweetcrustbakery.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-rose-500 p-3 rounded-full hover:bg-rose-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-rose-500 p-3 rounded-full hover:bg-rose-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-rose-500 p-3 rounded-full hover:bg-rose-600 transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SweetCrust Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
