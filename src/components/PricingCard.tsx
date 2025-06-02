
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, price, period, description, features, popular = false }: PricingCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      popular 
        ? 'border-2 border-blue-500 shadow-lg' 
        : 'border border-gray-200 hover:border-blue-300'
    }`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{title}</CardTitle>
        <div className="mb-4">
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-gray-600 text-lg">{period}</span>
        </div>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-3 mt-1">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          asChild 
          className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
            popular
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
              : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent'
          }`}
        >
          <Link to="/contact">
            Get Started
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
