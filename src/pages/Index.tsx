
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen, Award, Calendar, Clock, MapPin, Trophy, Lightbulb, Target, CheckCircle, ChevronLeft, ChevronRight, UserCheck, TrendingUp, Coffee, Presentation, Medal, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import { CONSTANTS } from '@/lib/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { useRef } from 'react';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const packagesRef = useRef<HTMLDivElement | null>(null);
  const popupShownRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (packagesRef.current && !popupShownRef.current) {
        const rect = packagesRef.current.getBoundingClientRect();
        if (rect.bottom < window.innerHeight - 100) {
          setShowDemoPopup(true);
          popupShownRef.current = true;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate logo animation
  const logoTransform = Math.min(scrollY / 100, 1); // 0 to 1 based on scroll
  const contentExpand = Math.min(scrollY / 100, 1); // 0 to 1 based on scroll

  const testimonials = [
    {
      name: "Aanya Sharma",
      role: "Class 10 Student",
      school: "Jain Bharati Mrigavati Vidyalaya, New Delhi",
      content: "The small batch size really helped me overcome my hesitation in asking questions. My grades in Mathematics improved significantly, and I feel more confident in problem-solving.",
      rating: 5
    },
    {
      name: "Arjun Malhotra",
      role: "Class 12 Student",
      school: "The Srijan School, Model Town",
      content: "The IIT-NIT alumni sessions were eye-opening. Getting direct guidance from Google and Amazon engineers helped me understand what it takes to succeed in tech. The coding bootcamp was exceptional!",
      rating: 5
    },
    {
      name: "Ishita Patel",
      role: "Class 11 Student",
      school: "CRPF Public School, Rohini",
      content: "The weekly testing system helped me identify and work on my weak areas. The personalized attention in Olympiad preparation gave me the confidence to win Gold in SOF Mathematics Olympiad.",
      rating: 5
    },
    {
      name: "Advait Kapoor",
      role: "Class 9 Student",
      school: "DAV Public School, Ashok Vihar",
      content: "Public speaking sessions transformed me from a shy student to someone who now actively participates in school debates. The teaching methodology is unique and highly effective.",
      rating: 5
    },
    {
      name: "Ananya Gupta",
      role: "Class 12 Student",
      school: "Prabhu Dayal Public School, Shalimar Bagh",
      content: "The AI & Computer Science package opened new horizons for me. Learning Python and machine learning concepts alongside regular studies has been incredibly valuable.",
      rating: 5
    },
    {
      name: "Reyansh Singh",
      role: "Class 10 Student",
      school: "Amity International School, Pushp Vihar",
      content: "Monthly student seminars helped me develop presentation skills and confidence. The peer learning environment is fantastic, and teachers ensure everyone understands core concepts thoroughly.",
      rating: 5
    },
    {
      name: "Zara Verma",
      role: "Class 11 Student",
      school: "Amity International School, Saket",
      content: "The NTSE preparation strategy was excellent. Regular mock tests and detailed analysis of my performance helped me qualify for NTSE with a good margin.",
      rating: 5
    },
    {
      name: "Vihaan Mehra",
      role: "Class 9 Student",
      school: "Cambridge School, Shrinivaspuri",
      content: "The complementary curriculum approach ensures I'm always ahead in my school topics. The teaching style makes complex concepts easy to understand and remember.",
      rating: 5
    },
    {
      name: "Avni Saxena",
      role: "Class 12 Student",
      school: "The Indian School, New Delhi",
      content: "BrightStem's approach to competitive exam preparation is unique. They focus on conceptual understanding rather than just solving problems. This helped me excel in JEE preparation.",
      rating: 5
    },
    {
      name: "Dhruv Chadha",
      role: "Class 10 Student",
      school: "Fr Agnel School, Gautam Nagar",
      content: "The bi-weekly parent meetings keep my parents well-informed about my progress. The personal attention and regular feedback have helped me improve consistently.",
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
      title: CONSTANTS.PACKAGES.COMPLETE_LEARNING.title,
      originalPrice: CONSTANTS.PACKAGES.COMPLETE_LEARNING.originalPrice,
      price: CONSTANTS.PACKAGES.COMPLETE_LEARNING.price,
      period: CONSTANTS.PACKAGES.COMPLETE_LEARNING.period,
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
    },
    {
      title: CONSTANTS.PACKAGES.AI_COMPUTER_SCIENCE.title,
      originalPrice: CONSTANTS.PACKAGES.AI_COMPUTER_SCIENCE.originalPrice,
      price: CONSTANTS.PACKAGES.AI_COMPUTER_SCIENCE.price,
      period: CONSTANTS.PACKAGES.AI_COMPUTER_SCIENCE.period,
      description: "Future-ready learning with AI, coding, and robotics fundamentals",
      features: [
        "Python programming from basics",
        "AI tools and applications",
        "Arduino-based robotics projects",
        "Machine learning concepts",
        "Coding best practices",
        "Project-based learning",
        "Tech industry insights",
        "Problem-solving methodologies",
        "Digital literacy skills",
        "Innovation mindset development"
      ],
      popular: false
    }
  ];

  const whyChooseUsCards = [
    {
      icon: Users,
      title: "Optimal Small Batches (4-5 Students)",
      content: "Research shows 1:1 coaching lacks peer learning opportunities, while large classrooms (30+ students) inhibit questioning. Our scientifically-backed 4-5 student batches create the perfect balance of collaborative learning and personal attention.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: UserCheck,
      title: "Smart Student Placement",
      content: "We don't place students based on grades like traditional coaching centers. Through comprehensive assessments, we evaluate learning ability and style to ensure optimal batch placement for maximum growth.",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Weekly Testing & Progress Tracking",
      content: "Regular assessments monitor progress with detailed reports shared with parents. Special one-on-one sessions for students who need extra support ensure everyone stays on track.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Coffee,
      title: "Bi-weekly Parent Meetings",
      content: "Deep 30-minute sessions every two weeks to understand your child completely - their nature, lifestyle, interests, and dreams. Education goes beyond textbooks; it's about shaping their way of living.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Presentation,
      title: "Monthly Student Seminars",
      content: "All-student gatherings foster collaboration, networking, and peer learning. Students share experiences, learn from each other, and build lasting connections that extend beyond academics.",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: Trophy,
      title: "Weekly IIT-NIT Alumni Sessions",
      content: "Direct access to successful IIT and NIT graduates every week. Get career guidance, learn from their journeys, and ensure your efforts align with your dream goals.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Medal,
      title: "Olympiad Excellence Program",
      content: "Specialized training for SOF Olympiads, NTSE, and other competitive exams. Our structured approach combines conceptual understanding with strategic problem-solving techniques for maximum success.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Mic,
      title: "Public Speaking & Co-curricular",
      content: "Comprehensive development through public speaking, debates, and creative activities. Build confidence, improve communication skills, and develop leadership qualities alongside academic excellence.",
      color: "from-pink-500 to-rose-600"
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
            🎓 <span className="font-bold text-blue-600">New Batch Starting {CONSTANTS.BATCH_START_DATE}</span> • 
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
                  className="w-full h-auto mx-auto lg:mx-0 max-w-xs"
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
              
              <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
                <strong>Personalized tutoring by IITian and NITian experts</strong> with <strong>7+ years of specialized teaching experience</strong>.
              </p>

              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                We leverage <strong className="text-blue-600">cutting-edge AI and modern technology</strong> to create customized learning experiences tailored specifically to each student's unique caliber and learning style. Unlike generic coaching programs, we curate personalized curricula using <strong className="text-green-600">AI-powered assessment tools</strong> and modern teaching methodologies.
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
      <section id="why-choose-us" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BrightStem Academy?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4 mb-12">
              Every aspect of our teaching methodology is grounded in educational research and psychological studies to create the most effective learning environment for your child.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsCards.map((card, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-5 sm:p-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto`}>
                    <card.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">{card.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">{card.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={packagesRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Learning Packages</span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Choose the perfect learning package that aligns with your educational goals. All sessions are conducted online and require a laptop/desktop with stable internet connection.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                <p className="text-base text-gray-700">
                  <span className="font-semibold text-blue-600">Offline Sessions Available:</span> Students can opt for in-person classes at our center in 
                  <span className="font-medium"> Shakti Khand 3</span> for an additional fee of ₹500 per month.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Book Demo Popup */}
      <Dialog open={showDemoPopup} onOpenChange={setShowDemoPopup}>
        <DialogContent className="max-w-xl rounded-2xl shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-green-50">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-blue-700 text-center mb-2">Gift Yourself a Transformational Journey!</DialogTitle>
            <DialogDescription className="text-lg text-gray-700 text-center mb-4">
              Choose a learning path and gift yourself a transformational journey, where education is personalized and success is guaranteed.<br/>
              <span className="font-semibold text-blue-600">Book a free demo to meet the founders and make your mind then!</span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <img src="/lovable-uploads/d8899f5c-745b-4049-aaf0-37773ca2e953.png" alt="Book Demo" className="w-32 h-32 rounded-full shadow-lg animate-bounce" />
            <button
              className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => { window.location.href = '/contact#enrollment-form'; }}
            >
              Book My Free Demo
            </button>
            <p className="text-sm text-gray-500 italic text-center">No commitment required. Just meet us, experience our teaching, and decide for yourself!</p>
          </div>
          <DialogClose asChild>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Students Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students about their transformative learning journey at BrightStem Academy
            </p>
          </div>

          {/* Desktop View - 3 Cards */}
          <div className="hidden lg:block">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                  <CarouselItem key={slideIndex} className="pl-4 basis-full">
                    <div className="grid grid-cols-3 gap-8">
                      {testimonials.slice(slideIndex * 3, (slideIndex * 3) + 3).map((testimonial, index) => (
                        <div key={index} className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="flex items-center gap-2 mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-700 mb-6 line-clamp-4">{testimonial.content}</p>
                          <div className="border-t pt-4">
                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-blue-600">{testimonial.role}</p>
                            <p className="text-sm text-gray-500 mt-1">{testimonial.school}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative translate-y-0 left-0" />
                <CarouselNext className="relative translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>

          {/* Tablet View - 2 Cards */}
          <div className="hidden md:block lg:hidden">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, slideIndex) => (
                  <CarouselItem key={slideIndex} className="pl-4 basis-full">
                    <div className="grid grid-cols-2 gap-6">
                      {testimonials.slice(slideIndex * 2, (slideIndex * 2) + 2).map((testimonial, index) => (
                        <div key={index} className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="flex items-center gap-2 mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-700 mb-6 line-clamp-4">{testimonial.content}</p>
                          <div className="border-t pt-4">
                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-blue-600">{testimonial.role}</p>
                            <p className="text-sm text-gray-500 mt-1">{testimonial.school}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative translate-y-0 left-0" />
                <CarouselNext className="relative translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>

          {/* Mobile View - Single Card */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4">
                    <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-2 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6">{testimonial.content}</p>
                      <div className="border-t pt-4">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-blue-600">{testimonial.role}</p>
                        <p className="text-sm text-gray-500 mt-1">{testimonial.school}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative translate-y-0 left-0" />
                <CarouselNext className="relative translate-y-0 right-0" />
              </div>
            </Carousel>
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
