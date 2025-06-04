
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  originalPrice: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  additionalDetails?: string[];
  popular?: boolean;
}

const PricingCard = ({ 
  title, 
  originalPrice, 
  price, 
  period, 
  description, 
  features, 
  notIncluded = [],
  additionalDetails = [],
  popular = false 
}: PricingCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
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
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
                <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">SAVE</span>
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {price}
              </span>
              <span className="text-gray-600 text-lg">{period}</span>
            </div>
            <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-blue-600 font-medium">+ {features.length - 3} more features</li>
              )}
            </ul>
            
            <Button 
              className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                popular
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent'
              }`}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900 mb-4">{title} Package</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Pricing Section */}
          <div className="text-center py-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl text-gray-500 line-through">{originalPrice}</span>
              <span className="text-sm bg-red-500 text-white px-3 py-1 rounded-full font-semibold">LIMITED TIME</span>
            </div>
            <div className="mb-2">
              <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {price}
              </span>
              <span className="text-gray-600 text-xl">{period}</span>
            </div>
            <p className="text-gray-600 text-lg">{description}</p>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h3>
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
          </div>

          {/* Not Included (if any) */}
          {notIncluded.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Not Included:</h3>
              <ul className="space-y-3">
                {notIncluded.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Details */}
          {additionalDetails.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Additional Details:</h3>
              <ul className="space-y-2">
                {additionalDetails.map((detail, index) => (
                  <li key={index} className="text-gray-700 text-sm">• {detail}</li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Button */}
          <Button 
            asChild 
            className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/contact">
              Enroll in {title} Package
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingCard;
