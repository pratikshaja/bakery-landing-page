import { ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Chocolate Truffle Cake',
    description: 'Rich, moist chocolate cake layered with silky truffle cream',
    price: '$25.99',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Red Velvet Cupcake',
    description: 'Classic red velvet with cream cheese frosting',
    price: '$4.99',
    image: 'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Blueberry Cheesecake Slice',
    description: 'Creamy cheesecake topped with fresh blueberries',
    price: '$6.99',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Fresh Cookies',
    description: 'Assorted homemade cookies with chocolate chips',
    price: '$12.99',
    image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function BestSellers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Sellers</h2>
          <p className="text-gray-600 text-lg">Our customers' favorite treats</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-500">{product.price}</span>
                  <button className="bg-rose-500 text-white p-3 rounded-full hover:bg-rose-600 transition shadow-md">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
