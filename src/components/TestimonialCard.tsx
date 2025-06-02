
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <Card className="relative overflow-hidden bg-white shadow-xl border-0 animate-fade-in">
      <CardContent className="p-8 text-center">
        <div className="absolute top-4 left-4 text-blue-200">
          <Quote className="h-12 w-12" />
        </div>
        
        <div className="flex justify-center mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
          ))}
        </div>
        
        <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
          "{testimonial.content}"
        </blockquote>
        
        <div>
          <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
          <div className="text-blue-600 font-medium">{testimonial.role}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
