import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-tallpop-pink/20 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-tallpop-pink to-tallpop-lavender bg-clip-text text-transparent">
                            TallPop
                        </h3>
                        <p className="text-gray-600 max-w-xs">
                            Pop into your idol glow-up era ✨ Supporting natural glow, confidence & stature the K-pop way.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-tallpop-light rounded-full text-tallpop-pink hover:bg-tallpop-pink hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-tallpop-light rounded-full text-tallpop-pink hover:bg-tallpop-pink hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-tallpop-light rounded-full text-tallpop-pink hover:bg-tallpop-pink hover:text-white transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-900">Shop</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li><Link to="/product/sakura" className="hover:text-tallpop-pink transition-colors">Sakura Berry Pop</Link></li>
                            <li><Link to="/product/peach" className="hover:text-tallpop-pink transition-colors">Peach Blossom Glow</Link></li>
                            <li><Link to="/product/blueberry" className="hover:text-tallpop-pink transition-colors">Blueberry Starlight</Link></li>
                            <li><Link to="/bundles" className="hover:text-tallpop-pink transition-colors">Bundles</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-900">Support</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li><Link to="/faq" className="hover:text-tallpop-pink transition-colors">FAQs</Link></li>
                            <li><Link to="/shipping" className="hover:text-tallpop-pink transition-colors">Shipping & Returns</Link></li>
                            <li><Link to="/track" className="hover:text-tallpop-pink transition-colors">Track Order</Link></li>
                            <li><Link to="/contact" className="hover:text-tallpop-pink transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-900">Stay in the Loop</h4>
                        <p className="text-gray-600 mb-4">Join the club for exclusive drops & K-beauty tips.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 rounded-l-full border border-r-0 border-gray-200 focus:outline-none focus:border-tallpop-pink"
                            />
                            <button className="px-6 py-2 bg-tallpop-pink text-white rounded-r-full font-medium hover:bg-tallpop-pink/90 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© 2024 TallPop. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        Made with <Heart size={16} className="text-tallpop-pink fill-tallpop-pink" /> in India
                    </div>
                </div>
            </div>
        </footer>
    );
};
