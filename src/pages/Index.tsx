
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
  const isMobile = useIsMobile();

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

  const pricingPlans = [
    {
      title: "Basic",
      originalPrice: "₹4,000",
      price: "₹3,000",
      period: "/month",
      description: "Perfect for students who need group learning support",
      features: [
        "Group tuition at your home",
        "Weekly progress tracking",
        "Study materials included",
        "Homework assistance",
        "Monthly assessments",
        "WhatsApp doubt support"
      ],
      popular: false
    },
    {
      title: "Standard",
      originalPrice: "₹5,000",
      price: "₹4,000",
      period: "/month",
      description: "Enhanced learning with digital tools and parent updates",
      features: [
        "Everything in Basic",
        "QuizGrid assessment platform",
        "ParentSync progress updates",
        "Monthly performance reports",
        "Doubt clearing sessions",
        "Online resource access",
        "Speaking skill sessions"
      ],
      popular: true
    },
    {
      title: "Premium",
      originalPrice: "₹7,500",
      price: "₹5,000",
      period: "/month",
      description: "Complete personalized learning experience",
      features: [
        "One-on-one personalized tuition",
        "Full learning dashboard",
        "Speaking & communication sessions",
        "24/7 doubt support",
        "Career guidance sessions",
        "Exam preparation coaching",
        "Coding bootcamp access"
      ],
      popular: false
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
      {/* New Batch Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border-b border-blue-100 py-3 text-center">
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Logo */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/a509da7d-f612-42d2-aca6-0d96eeece976.png" 
                  alt="BrightStem Academy Logo" 
                  className="h-32 md:h-40 w-auto mx-auto lg:mx-0"
                />
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mt-4">
                  BrightStem Academy
                </h2>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 bg-clip-text text-transparent">
                  Excellence in
                </span>
                <br />
                <span className="text-gray-900">Education</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
                Personalized tutoring by <strong>IITian and NITian experts</strong> with <strong>5+ years of specialized teaching experience</strong>. 
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
                    <span className="text-gray-700">B.Ed Certified • 5+ Years Teaching Expert</span>
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
                  <Link to="/services">
                    View Packages
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

      {/* Summer Camp Highlight */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="h-6 w-6 text-orange-600" />
              <span className="text-2xl font-bold text-orange-600">3-Week Summer Camp 2025</span>
              <Trophy className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Learning Camp for Class 5-8
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span><strong>Duration:</strong> 3 Weeks (June 16 - July 5)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-orange-600" />
                  <span><strong>Age Group:</strong> Class 5-8 Students</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  <span><strong>Format:</strong> Online + Final Meetup</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-orange-600" />
                  <span><strong>Price:</strong> ₹8,500 <span className="line-through text-gray-500">₹12,000</span></span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link to="/contact">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3 rounded-full text-lg font-semibold border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300">
                <Link to="/summer-camp">
                  View Details
                </Link>
              </Button>
            </div>
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
              Experience the transformative power of early guidance from IIT/NIT mentors with proven teaching methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">IIT/NIT Expert Mentors</h3>
                <p className="text-gray-600">Learn from graduates of India's premier institutes - IIT BHU & NIT Allahabad with real industry experience at Google & Amazon</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Teaching Methods</h3>
                <p className="text-gray-600">Our founder Akanksha Dubey's 5+ years of experience tackles exact student hurdles with methodologies that ensure concept clarity</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Early Guidance Advantage</h3>
                <p className="text-gray-600">Starting early with quality mentorship builds strong foundations, confidence, and academic excellence for future success</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Learning</h3>
                <p className="text-gray-600">Customized teaching approaches that adapt to each student's learning style, pace, and specific academic challenges</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Holistic Development</h3>
                <p className="text-gray-600">Beyond academics - building communication skills, confidence, critical thinking, and leadership qualities for overall growth</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
                <p className="text-gray-600">500+ successful students with 95% improvement rate and 4.9-star ratings from satisfied parents and students</p>
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
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Special launch pricing! Limited time offer with savings up to 33% on all packages.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <Calendar className="h-4 w-4" />
              Fresh batches starting July 15, 2025
            </div>
          </div>

          {isMobile ? (
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {pricingPlans.map((plan, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5">
                    <PricingCard {...plan} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden" />
              <CarouselNext className="hidden" />
            </Carousel>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          )}
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
