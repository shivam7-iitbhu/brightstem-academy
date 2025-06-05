
import { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, BookOpen, Trophy, Play, CheckCircle, Clock, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent',
      content: "BrightStem Academy has transformed my child's learning experience. The tutors are engaging, and the progress is remarkable!",
      rating: 5,
    },
    {
      name: 'Aryan Patel',
      role: 'Student',
      content: 'I used to struggle with math, but BrightStem Academy made it fun and easy. Now I look forward to my tutoring sessions!',
      rating: 5,
    },
    {
      name: 'Meera Kapoor',
      role: 'Teacher',
      content: 'As a teacher, I appreciate the personalized approach BrightStem Academy takes. It complements classroom learning perfectly.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Sales Bar - Fixed at the very top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 text-center text-sm font-medium animate-pulse">
        🔥 Summer Camp 2024: Early Bird Discount - Save 30%! Limited Time Offer 🔥
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6 animate-fade-in">
                Unlock Your Child's Potential with <span className="text-orange-600">Personalized Tutoring</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed animate-fade-in delay-100">
                Empowering students with tailored learning experiences, expert tutors, and proven results.
                Join BrightStem Academy and watch your child thrive!
              </p>
              <div className="space-x-4 animate-fade-in delay-200">
                <Button size="lg">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 animate-slide-in-right">
              <img
                src="/lovable-uploads/young-students-studying-together.jpg"
                alt="Students Learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        {/* Animated Circles */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-100 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-around">
          <div className="w-24 h-24 rounded-full bg-blue-200 opacity-30 animate-pulse"></div>
          <div className="w-32 h-32 rounded-full bg-purple-200 opacity-30 animate-pulse delay-1000"></div>
          <div className="w-20 h-20 rounded-full bg-green-200 opacity-30 animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
              Why Choose BrightStem Academy?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer a unique approach to tutoring that focuses on personalized learning,
              expert instruction, and measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Star className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Personalized Learning</h3>
              <p className="text-gray-700 text-center">
                Tailored tutoring plans to meet your child's specific needs and learning style.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Users className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Expert Tutors</h3>
              <p className="text-gray-700 text-center">
                Experienced and passionate tutors dedicated to helping your child succeed.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-purple-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <BookOpen className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-700 text-center">
                Covering a wide range of subjects and grade levels, from elementary to high school.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Trophy className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Proven Results</h3>
              <p className="text-gray-700 text-center">
                Track record of helping students improve their grades and achieve their academic goals.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-red-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Play className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Engaging Learning</h3>
              <p className="text-gray-700 text-center">
                Interactive and fun learning environment that keeps students motivated and engaged.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-teal-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <CheckCircle className="h-8 w-8 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Progress Tracking</h3>
              <p className="text-gray-700 text-center">
                Monitor your child's progress and see the impact of our tutoring services firsthand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Choose the plan that best fits your needs and budget.
              All plans include personalized tutoring and progress tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              originalPrice="₹4,000"
              price="₹2,800"
              period="/ month"
              description="Perfect for students starting their learning journey"
              features={[
                '1 hour per week',
                'Personalized learning plan',
                'Progress reports',
                'Email support'
              ]}
            />
            <PricingCard
              title="Standard"
              originalPrice="₹6,500"
              price="₹4,550"
              period="/ month"
              description="Ideal for students who need regular support"
              features={[
                '2 hours per week',
                'Personalized learning plan',
                'Progress reports',
                'Parent-teacher conferences',
                'WhatsApp support'
              ]}
              popular={true}
            />
            <PricingCard
              title="Premium"
              originalPrice="₹11,500"
              price="₹8,050"
              period="/ month"
              description="Comprehensive support for serious learners"
              features={[
                '3 hours per week',
                'Personalized learning plan',
                'Progress reports',
                'Parent-teacher conferences',
                '24/7 support',
                'Additional practice materials'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="relative">
            <TestimonialCard
              testimonial={testimonials[currentTestimonial]}
            />
            {/* Navigation Dots */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-500'}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Join BrightStem Academy today and unlock your child's full potential.
            Contact us to schedule a free consultation and learn more about our programs.
          </p>
          <Button size="lg" variant="secondary">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
