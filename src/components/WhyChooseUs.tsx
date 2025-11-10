import { Clock, Leaf, ChefHat, Truck, Award, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Freshly Baked Daily',
    description: 'All products made fresh every morning',
  },
  {
    icon: Leaf,
    title: '100% Eggless Options',
    description: 'Delicious eggless varieties available',
  },
  {
    icon: ChefHat,
    title: 'Custom Cakes Available',
    description: 'Personalized designs for special occasions',
  },
  {
    icon: Truck,
    title: 'Same Day Delivery',
    description: 'Fast and reliable delivery service',
  },
  {
    icon: Award,
    title: 'Premium Natural Ingredients',
    description: 'No preservatives or artificial flavors',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Quality treats at competitive prices',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">What makes SweetCrust special</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
