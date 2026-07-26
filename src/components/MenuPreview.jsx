import { useState } from 'react';

const categories = [
    { id: 'cakes', name: 'Cakes' },
    { id: 'cupcakes', name: 'Cupcakes' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'bread', name: 'Bread' },
    { id: 'cookies', name: 'Cookies' },
];

const menuItems = {
    cakes: [
        { name: 'Chocolate Truffle Cake', price: '₹ 1,000' },
        { name: 'Vanilla Delight Cake', price: '₹ 800' },
        { name: 'Black Forest Cake', price: '₹ 780' },
        { name: 'Strawberry Cream Cake', price: '₹ 1,500' },
    ],
    cupcakes: [
        { name: 'Red Velvet Cupcake', price: '₹ 500' },
        { name: 'Chocolate Fudge Cupcake', price: '₹ 999' },
        { name: 'Lemon Zest Cupcake', price: '₹ 1999' },
        { name: 'Vanilla Bean Cupcake', price: '₹ 590' },
    ],
    pastries: [
        { name: 'Blueberry Cheesecake', price: ' ₹ 699' },
        { name: 'Apple Cinnamon Tart', price: ' ₹ 599' },
        { name: 'Chocolate Eclair', price: '₹ 499' },
        { name: 'Fruit Danish', price: '₹ 549' },
    ],
    bread: [
        { name: 'Sourdough Loaf', price: '₹ 799' },
        { name: 'Whole Wheat Bread', price: '₹ 699' },
        { name: 'Garlic Butter Bread', price: '₹ 899' },
        { name: 'Multigrain Roll', price: '₹ 599' },
    ],
    cookies: [
        { name: 'Chocolate Chip Cookies', price: '₹ 1299' },
        { name: 'Oatmeal Raisin Cookies', price: '₹ 1199' },
        { name: 'Double Chocolate Cookies', price: '₹ 1399' },
        { name: 'Butter Cookies', price: '₹ 1099' },
    ],
};

export default function MenuPreview() {
    const [activeCategory, setActiveCategory] = useState('cakes');

    return (
        <section id="menu" className="py-20 bg-amber-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
                    <p className="text-gray-600 text-lg">Explore our delicious varieties</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${activeCategory === category.id
                                    ? 'bg-rose-500 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-rose-100'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems[activeCategory].map((item) => (
                        <div
                            key={item.name}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                            <p className="text-2xl font-bold text-rose-500">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
