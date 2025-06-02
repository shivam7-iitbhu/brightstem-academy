
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen, Award, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "My daughter's grades improved dramatically after joining BrightStem. The personalized attention is outstanding!",
      rating: 5
    },
    {
      name: "Raj Patel",
      role: "Student",
      content: "The QuizGrid feature helped me understand my weak areas and improve systematically.",
      rating: 5
    },
    {
      name: "Meera Singh",
      role: "Parent",
      content: "ParentSync keeps me updated on my child's progress. Highly recommended!",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Students Taught" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: BookOpen, number: "8+", label: "Years Experience" },
    { icon: Award, number: "95%", label: "Success Rate" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden pt-16">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/d8899f5c-745b-4049-aaf0-37773ca2e953.png" 
                alt="BrightStem Academy Logo" 
                className="h-24 w-auto mx-auto mb-4"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 bg-clip-text text-transparent">
                Excellence in
              </span>
              <br />
              <span className="text-gray-900">Education</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Personalized tutoring that transforms students into confident learners. 
              Join hundreds of successful students on their journey to academic excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link to="/contact">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="px-8 py-3 rounded-full text-lg font-semibold border-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                <Link to="/services">
                  View Packages
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mb-4 group-hover:shadow-lg transition-shadow">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible packages designed to meet every student's unique needs and learning goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Basic"
              price="₹2,000-3,000"
              period="/month"
              description="Perfect for students who need group learning support"
              features={[
                "Group tuition at your home",
                "Weekly progress tracking",
                "Study materials included",
                "Homework assistance"
              ]}
              popular={false}
            />
            
            <PricingCard
              title="Standard"
              price="₹3,500-4,500"
              period="/month"
              description="Enhanced learning with digital tools and parent updates"
              features={[
                "Everything in Basic",
                "QuizGrid assessment platform",
                "ParentSync progress updates",
                "Monthly performance reports",
                "Doubt clearing sessions"
              ]}
              popular={true}
            />
            
            <PricingCard
              title="Premium"
              price="₹6,000-8,000"
              period="/month"
              description="Complete personalized learning experience"
              features={[
                "One-on-one personalized tuition",
                "Full learning dashboard",
                "Speaking & communication sessions",
                "24/7 doubt support",
                "Career guidance sessions",
                "Exam preparation coaching"
              ]}
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Students Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from real students and parents</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialCard testimonial={testimonials[currentTestimonial]} />
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful students who have transformed their academic performance with our proven teaching methods.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/contact">
              Enroll Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
