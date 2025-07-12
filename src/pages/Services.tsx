
import { Check, Users, Brain, Trophy, BookOpen, MessageSquare, Calendar, UserCheck, TrendingUp, Coffee, Presentation, GraduationCap, Target, BarChart3, Users2, Mic, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import PricingCard from '@/components/PricingCard';
import { CONSTANTS } from '@/lib/constants';

const Services = () => {
  const features = [
    {
      icon: Users,
      title: "Smart Small Batches (4-5 Students)",
      description: "Research-backed optimal batch sizes that foster collaborative learning while ensuring personal attention for every student.",
      benefits: ["Peer learning opportunities", "Individual attention", "Interactive discussions", "Optimal learning environment"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: UserCheck,
      title: "Ability-Based Student Placement",
      description: "We place students based on learning ability and style, not just grades, ensuring optimal growth for each child.",
      benefits: ["Learning ability assessment", "Optimal batch placement", "Personalized approach", "Maximum growth potential"],
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: TrendingUp,
      title: "Weekly Testing & Progress Tracking",
      description: "Regular assessments with detailed reports shared with parents, plus special one-on-one support when needed.",
      benefits: ["Weekly assessments", "Detailed progress reports", "Parent updates", "Individual support sessions"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Coffee,
      title: "Bi-weekly Parent Meetings",
      description: "Deep 30-minute sessions every two weeks to understand your child completely - their nature, interests, and dreams.",
      benefits: ["30-minute deep sessions", "Complete child understanding", "Lifestyle assessment", "Holistic education approach"],
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Mic,
      title: "Public Speaking Session Per Week",
      description: "Boost your child's confidence when they go out in the world with dedicated weekly public speaking sessions.",
      benefits: ["Weekly speaking practice", "Confidence building", "Communication skills", "Real-world preparation"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: BarChart3,
      title: "Detailed Tracking of Child's Performance",
      description: "Comprehensive monitoring system to track every aspect of your child's academic and personal development.",
      benefits: ["Performance analytics", "Growth metrics", "Strengths identification", "Area-wise tracking"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Target,
      title: "Finding Gaps and Working on Weak Areas",
      description: "Systematic identification of learning gaps with targeted interventions to strengthen weak areas.",
      benefits: ["Gap analysis", "Targeted support", "Weakness addressing", "Skill reinforcement"],
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Users2,
      title: "Foster Collaboration",
      description: "Connect students from different schools and backgrounds to build collaborative learning experiences.",
      benefits: ["Cross-school networking", "Diverse perspectives", "Team building", "Social skills development"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const subjects = [
    "Mathematics", "Science", "English", "Social Studies", 
    "Physics", "Chemistry", "Biology", "Computer Science"
  ];

  const techSubjects = [
    "Python Programming", "AI & Machine Learning", "Arduino Robotics", 
    "Web Development", "Data Science Basics", "Tech Project Building"
  ];

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From traditional academics to cutting-edge AI & Computer Science, discover our research-backed 
              teaching methodology designed to unlock your child's full potential.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg text-blue-800 font-medium">
                🚀 <span className="font-bold">New Batch Starting {CONSTANTS.BATCH_START_DATE}</span> • 
                <span className="text-orange-600 font-semibold"> Limited Seats Available</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research-Backed Teaching Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Research-Backed <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Teaching Philosophy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Every aspect of our methodology is grounded in educational research and psychological studies 
              to create the most effective learning environment.
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 lg:w-1/3">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-3/5 lg:w-2/3 p-6">
                    <CardHeader className="pb-4 px-0">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900">{feature.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning Package</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special launch pricing - Limited time offer! Two comprehensive packages designed for different learning goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <PricingCard
              title="Traditional Academics"
              originalPrice="₹5,000"
              price="₹3,500"
              period="/month"
              description="Comprehensive academic support with personalized attention and modern teaching methods"
              features={[
                "Small batch tuition (4-5 students maximum)",
                "Weekly progress testing and detailed reports",
                "Bi-weekly 30-minute parent meetings",
                "Comprehensive study materials included",
                "Daily homework assistance and guidance",
                "Monthly student collaboration seminars",
                "Weekly IIT-NIT alumni career guidance sessions",
                "WhatsApp doubt support (9 AM - 6 PM)",
                "Ability-based student placement (not grade-based)",
                "Curriculum that complements school education"
              ]}
              additionalDetails={[
                "Minimum 3-month commitment required",
                "Classes held 5 days a week (Monday to Friday)",
                "Each session is 1.5 hours long",
                "All major subjects covered (Math, Science, English, Social Studies)",
                "Special one-on-one sessions for students needing extra support",
                "Olympiad preparation included"
              ]}
              popular={true}
            />
            
            <PricingCard
              title="AI & Computer Science"
              originalPrice="₹7,000"
              price="₹4,500"
              period="/month"
              description="Cutting-edge technology education including AI, programming, and robotics for future-ready students"
              features={[
                "Everything in Traditional Academics Package",
                "Python programming with real projects",
                "AI & Machine Learning fundamentals",
                "Arduino-based robotics projects",
                "Web development (HTML, CSS, JavaScript)",
                "Data science basics and visualization",
                "Tech project portfolio building",
                "Industry expert guest sessions",
                "Tech internship preparation",
                "Future career guidance in tech"
              ]}
              additionalDetails={[
                "Minimum 3-month commitment required",
                "Advanced computer lab access included",
                "Individual laptops provided during classes",
                "Take-home project kits included",
                "Monthly tech showcase presentations",
                "Direct mentorship from tech professionals"
              ]}
            />
          </div>

          {/* Schedule Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Class <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Schedule</span>
            </h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-blue-100 bg-blue-50">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                      <Calendar className="mr-3 h-6 w-6" />
                      Weekly Schedule
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <strong>4 classes per week</strong> - One class each day
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <strong>Sunday:</strong> Public speaking & co-curricular activities
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <strong>3 Academic sessions:</strong> Choose Mon/Wed/Fri OR Tue/Thu/Sat
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-100 bg-purple-50">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                      <Clock className="mr-3 h-6 w-6" />
                      Class Structure
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <strong>1 hour per class</strong> - Perfectly timed sessions
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <strong>First 15 minutes:</strong> Q&A from previous class
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <strong>Next 45 minutes:</strong> New topic teaching
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <p className="text-lg text-gray-700">
                  <strong className="text-blue-600">Flexible scheduling</strong> designed to complement your child's school routine while ensuring optimal learning outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Holistic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              We complement school education with our specialized curriculum, ensuring continuous progress 
              without repetition. From traditional academics to cutting-edge technology.
            </p>
          </div>

          {/* Academic Subjects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Traditional Academic Subjects</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {subjects.map((subject, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{subject}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tech Subjects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">AI & Computer Science Subjects</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techSubjects.map((subject, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{subject}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Beyond Academics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Olympiad Preparation</h3>
                <p className="text-gray-600 text-sm">Math, Science, English & Computer Olympiads</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Communication Skills</h3>
                <p className="text-gray-600 text-sm">Public speaking, presentation & interpersonal skills</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md bg-gradient-to-br from-teal-50 to-green-50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Critical Thinking</h3>
                <p className="text-gray-600 text-sm">Problem-solving, innovation & analytical skills</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Success Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Successful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Students</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our amazing students who have achieved their academic goals with BrightStem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Student Arjun" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Arjun Kumar</h4>
                <p className="text-sm">Class 10 - 95% in Board Exams</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c4e40244?w=400&h=400&fit=crop&crop=face" 
                alt="Student Priya" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Priya Sharma</h4>
                <p className="text-sm">Class 12 - JEE Main Qualified</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                alt="Student Rohit" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Rohit Patel</h4>
                <p className="text-sm">Class 11 - Math Olympiad Winner</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" 
                alt="Student Sneha" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Sneha Gupta</h4>
                <p className="text-sm">Class 9 - Science Fair Champion</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our community of successful learners and experience the difference research-backed, 
            personalized education can make. New batch starts {CONSTANTS.BATCH_START_DATE}!
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/contact">
              Start Your Journey Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
