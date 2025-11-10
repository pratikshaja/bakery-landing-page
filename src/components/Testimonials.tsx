import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'The chocolate cake was super moist and delicious! Best bakery in town.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    text: 'Amazing quality and taste. The custom cake for my daughter\'s birthday was perfect!',
    rating: 5,
  },
  {
    name: 'Anita Desai',
    text: 'Fresh, flavorful, and beautifully presented. Highly recommend their cupcakes!',
    rating: 5,
  },
  {
    name: 'Sameer Khan',
    text: 'Great service and even better pastries. The blueberry cheesecake is a must-try!',
    rating: 5,
  },
  {
    name: 'Neha Patel',
    text: 'Eggless options are fantastic! Finally found a bakery that caters to my needs.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <p className="text-gray-600 text-lg">What our happy customers say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-rose-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold text-gray-900">– {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
