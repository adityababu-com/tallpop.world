import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

const products = [
    {
        id: 'sakura',
        name: 'Sakura Berry Pop',
        price: '₹1,499',
        image: 'https://images.unsplash.com/photo-1703905424956-a21a02769117?auto=format&fit=crop&w=1400&q=80',
        color: 'bg-pink-100',
        tags: ['Best Seller', 'Glow']
    },
    {
        id: 'peach',
        name: 'Peach Blossom Glow',
        price: '₹1,499',
        image: 'https://images.unsplash.com/photo-1703905424975-e3648cdeff31?auto=format&fit=crop&w=1400&q=80',
        color: 'bg-orange-100',
        tags: ['Energy', 'Tasty']
    },
    {
        id: 'blueberry',
        name: 'Blueberry Starlight',
        price: '₹1,599',
        image: 'https://images.unsplash.com/photo-1723015973566-1cb80ebe9aa9?auto=format&fit=crop&w=1400&q=80',
        color: 'bg-indigo-100',
        tags: ['Premium', 'Calm']
    }
];

export const Shop = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-display font-bold mb-4">Shop The Glow</h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Choose your flavor, unlock your potential. All our powders are formulated with premium ingredients effectively.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="group">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className={`aspect-[4/5] relative overflow-hidden ${product.color}`}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {product.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider text-tallpop-dark">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-tallpop-pink transition-colors">{product.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                    <Button variant="ghost" size="sm">View Details</Button>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
