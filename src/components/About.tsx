import { Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                We are a home bakery started in 2020, driven by a passion for creating delightful
                handcrafted cakes and desserts that bring joy to every celebration.
              </p>
              <p>
                Every item we bake is made with fresh, natural ingredients—no preservatives, no
                chemicals, just pure love and dedication to the craft. Our commitment to quality
                has made us a trusted name among dessert lovers.
              </p>
              <p>
                From birthday cakes to wedding desserts, from everyday treats to special custom
                orders, we pour our heart into every creation. Our mission is simple: to spread
                happiness, one delicious bite at a time.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-rose-500">
              <Heart className="w-6 h-6 fill-current" />
              <span className="text-lg font-semibold">Baked with Love, Delivered with Care</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4686819/pexels-photo-4686819.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Baker at work"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-rose-500 text-white p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
