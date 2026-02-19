import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';

export const Cart = () => {
    const { items, removeItem, updateQuantity, cartTotal } = useCart();

    if (items.length === 0) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-6 text-center">
                <div className="flex justify-center mb-6 text-tallpop-pink/30">
                    <ShoppingBag size={80} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Your bag is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added any glow-up essentials yet.</p>
                <Link to="/">
                    <Button>Start Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <h1 className="text-4xl font-display font-bold mb-8 text-center">Your Bag</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {items.map(item => (
                        <motion.div
                            layout
                            key={item.id}
                            className="flex gap-6 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
                        >
                            <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        <p className="text-sm text-gray-500">30 Sachets</p>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="flex items-center border border-gray-200 rounded-full h-8">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-3 hover:text-tallpop-pink"
                                        >-</button>
                                        <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-3 hover:text-tallpop-pink"
                                        >+</button>
                                    </div>
                                    <div className="font-bold text-lg">₹{(item.price * item.quantity).toLocaleString()}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-32">
                        <h3 className="font-bold text-xl mb-6">Order Summary</h3>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-500 font-medium">Free</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-4 mb-8">
                            <div className="flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span>₹{cartTotal.toLocaleString()}</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">Including GST</p>
                        </div>


                        <Link to="/checkout">
                            <Button size="lg" className="w-full mb-4" icon={<ArrowRight size={20} />}>
                                Proceed to Checkout
                            </Button>
                        </Link>

                        <div className="flex justify-center gap-2">
                            <img src="https://cdn.razorpay.com/static/assets/logo/payment_methods/upi.svg" className="h-4" alt="UPI" />
                            <img src="https://cdn.razorpay.com/static/assets/logo/payment_methods/visa.svg" className="h-4" alt="Visa" />
                            <img src="https://cdn.razorpay.com/static/assets/logo/payment_methods/mastercard.svg" className="h-4" alt="Mastercard" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
