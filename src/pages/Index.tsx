
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen, Award, ChevronDown, Calendar, Clock, MapPin, Trophy } from 'lucide-react';
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
      {/* Summer Camp Banner */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 relative overflow-hidden fixed top-0 w-full z-50">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm md:text-base font-semibold">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-300 fill-current" />
              <span>🚀 SUMMER CAMP 2024 - Starting June 9th!</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Limited Seats • Register by June 9th</span>
            </div>
            <Button asChild size="sm" variant="outline" className="bg-white text-red-600 hover:bg-gray-100 border-white">
              <Link to="/summer-camp">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden pt-32">
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
                src="/lovable-uploads/a509da7d-f612-42d2-aca6-0d96eeece976.png" 
                alt="BrightStem Academy Logo" 
                className="h-24 w-auto mx-auto mb-4"
              />
            </div>
            
            {/* Summer Camp Highlight */}
            <div className="mb-8 p-6 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl border-2 border-orange-300 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Trophy className="h-6 w-6 text-orange-600" />
                <span className="text-2xl font-bold text-orange-600">4-Week Summer Camp 2024</span>
                <Trophy className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Interactive Learning Camp for Class 5-8
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <span className="font-semibold">Duration:</span> 4 Weeks (June 9 - July 6)
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-orange-600" />
                    <span className="font-semibold">Age Group:</span> Class 5-8 Students
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span className="font-semibold">Format:</span> Online + Final Meetup
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-orange-600" />
                    <span className="font-semibold">Price:</span> ₹8,500 <span className="line-through text-gray-500">₹12,000</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link to="/summer-camp">
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
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 bg-clip-text text-transparent">
                Excellence in
              </span>
              <br />
              <span className="text-gray-900">Education</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
              Personalized tutoring by <strong>IITian and NITian experts</strong> with <strong>5+ years of specialized teaching experience</strong>. 
              Join hundreds of successful students on their journey to academic excellence.
            </p>

            {/* Team Credentials Banner */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto shadow-lg">
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium">
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
              Special launch pricing! Limited time offer with savings up to 33% on all packages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Basic"
              originalPrice="₹4,000"
              price="₹3,000"
              period="/month"
              description="Perfect for students who need group learning support"
              features={[
                "Group tuition at your home",
                "Weekly progress tracking",
                "Study materials included",
                "Homework assistance",
                "Monthly assessments",
                "WhatsApp doubt support"
              ]}
              popular={false}
            />
            
            <PricingCard
              title="Standard"
              originalPrice="₹5,000"
              price="₹4,000"
              period="/month"
              description="Enhanced learning with digital tools and parent updates"
              features={[
                "Everything in Basic",
                "QuizGrid assessment platform",
                "ParentSync progress updates",
                "Monthly performance reports",
                "Doubt clearing sessions",
                "Online resource access",
                "Speaking skill sessions"
              ]}
              popular={true}
            />
            
            <PricingCard
              title="Premium"
              originalPrice="₹7,500"
              price="₹5,000"
              period="/month"
              description="Complete personalized learning experience"
              features={[
                "One-on-one personalized tuition",
                "Full learning dashboard",
                "Speaking & communication sessions",
                "24/7 doubt support",
                "Career guidance sessions",
                "Exam preparation coaching",
                "Coding bootcamp access"
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
