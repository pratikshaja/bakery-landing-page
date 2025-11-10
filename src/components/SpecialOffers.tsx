import { Tag, Gift, Percent } from 'lucide-react';

const offers = [
  {
    icon: Tag,
    title: '20% OFF First Order',
    description: 'New customers get 20% discount on their first purchase',
    color: 'bg-rose-500',
  },
  {
    icon: Gift,
    title: 'Buy 1 Get 1 Free',
    description: 'Special offer on cupcakes - limited time only',
    color: 'bg-amber-500',
  },
  {
    icon: Percent,
    title: 'Custom Cake Discount',
    description: '15% off on pre-booking custom cakes for events',
    color: 'bg-emerald-500',
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-100 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
          <p className="text-gray-600 text-lg">Don't miss out on these amazing deals!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.title}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${offer.color} rounded-full mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
