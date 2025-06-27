
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen, Award, Calendar, Clock, MapPin, Trophy, Lightbulb, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate logo animation
  const logoTransform = Math.min(scrollY / 100, 1); // 0 to 1 based on scroll
  const contentExpand = Math.min(scrollY / 100, 1); // 0 to 1 based on scroll

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
    { icon: BookOpen, number: "7+", label: "Years Experience" },
    { icon: Award, number: "95%", label: "Success Rate" }
  ];

  const pricingPlans = [
    {
      title: "Complete Learning Package",
      originalPrice: "₹5,000",
      price: "₹3,500",
      period: "/month",
      description: "Comprehensive personalized learning experience with small batch teaching",
      features: [
        "Small batch classes (4-5 students)",
        "Weekly 30-min parent meetings",
        "Complementary curriculum to school",
        "QuizGrid assessment platform",
        "ParentSync progress updates",
        "Homework assistance & doubt clearing",
        "Study materials included",
        "Monthly performance reports",
        "Speaking skill sessions",
        "Career guidance sessions"
      ],
      popular: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* New Batch Banner - Fixed positioning with no gap */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 to-green-50 border-b border-blue-100 py-3 text-center h-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm md:text-base font-medium text-gray-700">
            🎓 <span className="font-bold text-blue-600">New Batch Starting July 1st</span> • 
            <span className="text-orange-600 font-semibold"> Limited Seats Available</span> • 
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline font-semibold ml-2">
              Enroll Now →
            </Link>
          </p>
        </div>
      </div>

      {/* Hero Section - Adjusted top padding to account for fixed banner */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden pt-28">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left side - Logo (1/3 space) with scroll animation */}
            <div 
              className="lg:col-span-1 text-center lg:text-left animate-fade-in transition-all duration-700"
              style={{
                transform: `scale(${1 - logoTransform * 0.7}) translateY(${-logoTransform * 200}px)`,
                opacity: 1 - logoTransform * 0.8
              }}
            >
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/a509da7d-f612-42d2-aca6-0d96eeece976.png" 
                  alt="BrightStem Academy Logo" 
                  className="w-full h-auto mx-auto lg:mx-0 max-w-sm"
                />
              </div>
            </div>

            {/* Right side - Content (2/3 space) with expansion animation */}
            <div 
              className="lg:col-span-2 text-center lg:text-left animate-fade-in transition-all duration-700"
              style={{
                transform: `scale(${1 + contentExpand * 0.1})`
              }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 bg-clip-text text-transparent">
                  Excellence in
                </span>
                <br />
                <span className="text-gray-900">Education</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
                Personalized tutoring by <strong>IITian and NITian experts</strong> with <strong>7+ years of specialized teaching experience</strong>. 
                Join hundreds of successful students on their journey to academic excellence.
              </p>

              {/* Team Credentials Banner */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700">IIT BHU Graduate • Google Engineer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                    <span className="text-gray-700">NIT Allahabad Graduate • Amazon Engineer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-700">B.Ed Certified • 7+ Years Teaching Expert</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link to="/contact">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="px-8 py-3 rounded-full text-lg font-semibold border-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  <Link to="/bootcamps">
                    View Bootcamps
                  </Link>
                </Button>
              </div>
            </div>
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">BrightStem Academy?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience proven teaching methodologies with personalized attention in an optimal learning environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Teaching Experience</h3>
                <p className="text-gray-600">Founder Akanksha has 7+ years of experience teaching students of different age groups. She is an expert in modern teaching methodologies and curates her program specific to each student's needs, ensuring personalized learning paths for maximum growth.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optimal Batch Size (4-5 Students)</h3>
                <p className="text-gray-600">Based on educational psychology research, we maintain small batches of 4-5 students. Solo learning lacks peer interaction and accountability, while large classrooms inhibit question-asking. Our optimal size ensures active participation, peer learning, and comfortable doubt clarification.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Parent Connect Sessions</h3>
                <p className="text-gray-600">Every week, we dedicate 30 minutes to connect with parents, discussing their child's progress, addressing concerns, and answering questions. This ensures parents stay informed and involved in their child's learning journey.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Complementary Curriculum Design</h3>
                <p className="text-gray-600">Our curriculum is designed to complement, not repeat, what's taught in school. We focus on strengthening concepts, filling knowledge gaps, and advancing learning, ensuring students stay ahead while building strong foundations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Learning Package</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Comprehensive education solution with personalized attention and proven results.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <Calendar className="h-4 w-4" />
              Fresh batches starting July 15, 2025
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <PricingCard {...pricingPlans[0]} />
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
