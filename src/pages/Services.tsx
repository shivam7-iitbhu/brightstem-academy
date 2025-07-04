
import { Check, Users, Brain, Trophy, BookOpen, MessageSquare, Calendar, UserCheck, TrendingUp, Coffee, Presentation, GraduationCap } from 'lucide-react';
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
      benefits: ["Peer learning opportunities", "Individual attention", "Interactive discussions", "Optimal learning environment"]
    },
    {
      icon: UserCheck,
      title: "Ability-Based Student Placement",
      description: "We place students based on learning ability and style, not just grades, ensuring optimal growth for each child.",
      benefits: ["Learning ability assessment", "Optimal batch placement", "Personalized approach", "Maximum growth potential"]
    },
    {
      icon: TrendingUp,
      title: "Weekly Testing & Progress Tracking",
      description: "Regular assessments with detailed reports shared with parents, plus special one-on-one support when needed.",
      benefits: ["Weekly assessments", "Detailed progress reports", "Parent updates", "Individual support sessions"]
    },
    {
      icon: Coffee,
      title: "Bi-weekly Parent Meetings",
      description: "Deep 30-minute sessions every two weeks to understand your child completely - their nature, interests, and dreams.",
      benefits: ["30-minute deep sessions", "Complete child understanding", "Lifestyle assessment", "Holistic education approach"]
    },
    {
      icon: Presentation,
      title: "Monthly Student Seminars",
      description: "All-student gatherings that foster collaboration, networking, and peer learning beyond academics.",
      benefits: ["Student networking", "Collaborative learning", "Peer interaction", "Community building"]
    },
    {
      icon: GraduationCap,
      title: "Weekly IIT-NIT Alumni Sessions",
      description: "Direct access to successful IIT and NIT graduates every week for career guidance and mentorship.",
      benefits: ["Career guidance", "Alumni mentorship", "Goal alignment", "Success insights"]
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
            
            {/* Illustrative Image */}
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Small group learning environment"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              />
              <p className="text-sm text-gray-500 mt-4 italic">Optimal batch sizes - the perfect balance of collaboration and personal attention</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardHeader className="pb-4">
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
                <CardContent>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-gray-50">
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                "Python programming from basics to advanced",
                "AI & Machine Learning fundamentals",
                "Arduino-based robotics projects",
                "Web development and app creation",
                "Data science and analytics basics",
                "Hands-on tech project building",
                "Industry-relevant coding practices",
                "Future career guidance in tech fields",
                "Access to premium coding platforms and tools"
              ]}
              additionalDetails={[
                "Perfect for students interested in technology careers",
                "Industry-experienced instructors (Google & Amazon engineers)",
                "Real-world project portfolio development",
                "Certification upon course completion",
                "Advanced career counseling for tech fields",
                "Access to latest AI tools and technologies",
                "Preparation for competitive programming"
              ]}
              popular={false}
            />
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
