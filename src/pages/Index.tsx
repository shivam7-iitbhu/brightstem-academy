import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Star, CheckCircle, Target, TrendingUp, Globe, Heart, Calendar, Clock, MapPin, Trophy, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/contact#enrollment-form';
  };

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
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
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
            <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                      <Star className="h-6 w-6 text-yellow-300 fill-current" />
                      <span className="text-lg font-bold">Special Announcement</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      🚀 Summer Camp 2025 - 4 Weeks Program!
                    </h2>
                    <p className="text-xl text-orange-100 mb-6">
                      Join our intensive 4-week summer learning program starting June 16th. 
                      3 weeks of online interactive sessions + 1 week meetup in Delhi!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                      <Link to="/summer-camp">
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          Learn More <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <div className="text-center">
                        <p className="text-2xl font-bold">₹8,500</p>
                        <p className="text-sm text-orange-200">Early Bird Price</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Calendar className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                      <p className="font-bold text-white">June 16 - July 12</p>
                      <p className="text-sm text-orange-200">4 Weeks Total</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Users className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                      <p className="font-bold text-white">Class 5-8</p>
                      <p className="text-sm text-orange-200">Limited Seats</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Clock className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                      <p className="font-bold text-white">2 Hours/Day</p>
                      <p className="text-sm text-orange-200">Interactive Sessions</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <MapPin className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                      <p className="font-bold text-white">Delhi Meetup</p>
                      <p className="text-sm text-orange-200">Week 4 at India Gate</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">BrightStem Academy</span> Unique?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique features include:
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
      <section className="py-20 bg-white">
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
