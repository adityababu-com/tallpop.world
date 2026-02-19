import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Quiz = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6 text-center">
            <h1 className="text-4xl font-display font-bold mb-6">Idol Glow Quiz</h1>
            <p className="text-gray-600 mb-8">
                Our K-pop style quiz is getting a glow-up! Check back soon to find your perfect match.
            </p>
            <Link to="/shop">
                <Button>Browse All Flavors</Button>
            </Link>
        </div>
    );
};
