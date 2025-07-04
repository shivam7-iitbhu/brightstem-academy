
import { Calendar, Clock, Users, Code, Brain, Zap, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Bootcamps = () => {
  const bootcamps = [
    {
      title: "Coding Fundamentals",
      duration: "4 Weeks",
      sessions: "2 sessions/week",
      ageGroup: "Class 6-10",
      description: "Learn programming basics with Python and build your first applications",
      topics: ["Python Basics", "Logic Building", "Problem Solving", "Mini Projects"],
      icon: Code,
      color: "blue"
    },
    {
      title: "AI & Machine Learning",
      duration: "6 Weeks", 
      sessions: "2 sessions/week",
      ageGroup: "Class 8-12",
      description: "Discover the world of AI and build your own machine learning models",
      topics: ["AI Concepts", "Data Analysis", "ML Models", "Real-world Applications"],
      icon: Brain,
      color: "purple"
    },
    {
      title: "Python Mastery",
      duration: "8 Weeks",
      sessions: "2 sessions/week", 
      ageGroup: "Class 7-12",
      description: "Master Python programming from basics to advanced concepts",
      topics: ["Advanced Python", "Data Structures", "Web Development", "API Integration"],
      icon: Zap,
      color: "green"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Small Batch Learning",
      description: "Maximum 5 students per batch for personalized attention"
    },
    {
      icon: Target,
      title: "Project-Based Learning",
      description: "Build real projects while learning concepts"
    },
    {
      icon: CheckCircle,
      title: "Certificate of Completion",
      description: "Get certified after successfully completing the bootcamp"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Weekend and evening batches available"
    }
  ];

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Weekly <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Tech Bootcamps</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Empower your child with future-ready skills in coding, AI, Python, and machine learning through our intensive weekly bootcamps
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4" />
                New batches every month
              </div>
              <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <Users className="h-4 w-4" />
                Small batches (Max 5 students)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamp Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {bootcamps.map((bootcamp, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardHeader className={`text-center pb-6 bg-gradient-to-br ${
                  bootcamp.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  bootcamp.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-green-500 to-green-600'
                } text-white`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <bootcamp.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{bootcamp.title}</CardTitle>
                  <CardDescription className="text-blue-100">
                    {bootcamp.ageGroup} • {bootcamp.duration}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6">{bootcamp.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">{bootcamp.sessions}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">Max 5 students per batch</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {bootcamp.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    asChild 
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      bootcamp.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' :
                      bootcamp.color === 'purple' ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' :
                      'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
                    } text-white shadow-lg hover:shadow-xl`}
                  >
                    <Link to="/contact">
                      Enroll Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Bootcamps?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Future-Proof Your Skills?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join our intensive bootcamps and gain the technical skills that will set you apart in the digital age.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/contact">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Bootcamps;
