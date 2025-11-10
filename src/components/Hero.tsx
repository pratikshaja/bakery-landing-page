import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Fresh Homemade Cakes & Pastries Delivered To Your Doorstep
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 font-light">
          Baked daily with natural ingredients & lots of love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition shadow-lg text-lg font-semibold flex items-center justify-center gap-2">
            Order Now <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white text-rose-500 px-8 py-4 rounded-full hover:bg-gray-100 transition shadow-lg text-lg font-semibold">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}
