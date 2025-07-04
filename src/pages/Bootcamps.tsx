
import { Calendar, Clock, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CONSTANTS } from '@/lib/constants';

const Bootcamps = () => {
  const bootcamps = [
    {
      title: "Python Programming Bootcamp",
      description: "Master Python fundamentals and advanced concepts",
      duration: "4 weeks",
      sessions: "8 sessions",
      level: "Beginner to Intermediate",
      topics: ["Python Basics", "Data Structures", "OOP Concepts", "File Handling", "Web Scraping", "APIs"],
      image: "/lovable-uploads/a509da7d-f612-42d2-aca6-0d96eeece976.png"
    },
    {
      title: "AI & Machine Learning Bootcamp",
      description: "Dive into AI concepts and build your first ML models",
      duration: "6 weeks",
      sessions: "12 sessions",
      level: "Intermediate",
      topics: ["AI Fundamentals", "Machine Learning", "Neural Networks", "Computer Vision", "NLP", "Project Building"],
      image: "/lovable-uploads/c9bda023-675d-4c32-8700-c5b8ee802d27.png"
    },
    {
      title: "Robotics with Arduino Bootcamp",
      description: "Build and program robots using Arduino",
      duration: "5 weeks",
      sessions: "10 sessions",
      level: "Beginner",
      topics: ["Arduino Basics", "Sensors & Actuators", "Circuit Design", "Programming", "Robot Building", "IoT Projects"],
      image: "/lovable-uploads/d8899f5c-745b-4049-aaf0-37773ca2e953.png"
    },
    {
      title: "Web Development Bootcamp",
      description: "Create modern websites from scratch",
      duration: "8 weeks",
      sessions: "16 sessions",
      level: "Beginner to Advanced",
      topics: ["HTML/CSS", "JavaScript", "React", "Backend Development", "Databases", "Deployment"],
      image: "/lovable-uploads/91f78a7b-88e5-4b85-adec-25ea53bc6a81.png"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Maximum 5 students per batch for personalized attention"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Weekend and evening slots available"
    },
    {
      icon: Award,
      title: "Industry Experts",
      description: "Learn from IIT/NIT alumni with industry experience"
    },
    {
      icon: CheckCircle,
      title: "Practical Projects",
      description: "Build real-world projects to showcase your skills"
    }
  ];

  const scrollToEnrollment = () => {
    const element = document.getElementById('enrollment-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on contact page, navigate to it
      window.location.href = '/contact#enrollment-form';
    }
  };

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Specialized <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Bootcamps</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Intensive, hands-on bootcamps designed to fast-track your learning in cutting-edge technologies. 
              From Python programming to AI and robotics - master the skills that matter.
            </p>
            
            {/* Pricing Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{CONSTANTS.PACKAGES.BOOTCAMP.price}</span>
                  <span className="text-lg text-gray-600">{CONSTANTS.PACKAGES.BOOTCAMP.period}</span>
                </div>
                <div className="mb-4">
                  <span className="text-lg line-through text-gray-400">{CONSTANTS.PACKAGES.BOOTCAMP.originalPrice}</span>
                  <Badge className="ml-2 bg-red-100 text-red-600">Save ₹401</Badge>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 font-semibold">
                    Special Price for BrightStem Students: <span className="text-2xl">{CONSTANTS.PACKAGES.BOOTCAMP.enrolledStudentPrice}</span>/session
                  </p>
                  <p className="text-green-600 text-sm mt-1">
                    Already enrolled students get exclusive pricing!
                  </p>
                </div>
              </div>
            </div>

            <Button 
              onClick={scrollToEnrollment}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bootcamps?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bootcamps Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Available <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bootcamps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted bootcamps, each designed to provide intensive, practical learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bootcamps.map((bootcamp, index) => (
              <Card key={index} className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={bootcamp.image} 
                    alt={bootcamp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-900">{bootcamp.title}</CardTitle>
                    <Badge className="bg-blue-100 text-blue-600">{bootcamp.level}</Badge>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">{bootcamp.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {bootcamp.duration}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {bootcamp.sessions}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {bootcamp.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={scrollToEnrollment}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Enroll in This Bootcamp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Batch Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Next Batch Starts {CONSTANTS.BATCH_START_DATE}</h2>
              <p className="text-xl mb-8 text-blue-100">
                Limited seats available. Secure your spot in our intensive bootcamp program.
              </p>
              <Button 
                onClick={scrollToEnrollment}
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Reserve Your Seat Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Bootcamps;
