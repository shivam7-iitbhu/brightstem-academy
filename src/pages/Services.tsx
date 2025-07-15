
import { Check, Users, Brain, Trophy, BookOpen, MessageSquare, Calendar, UserCheck, TrendingUp, Coffee, Presentation, GraduationCap, Medal, Mic } from 'lucide-react';
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
              Every aspect of our teaching methodology is grounded in educational research and psychological studies 
              to create the most effective learning environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Optimal Small Batches (4-5 Students)</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">Research shows 1:1 coaching lacks peer learning opportunities, while large classrooms (30+ students) inhibit questioning. Our scientifically-backed 4-5 student batches create the perfect balance of collaborative learning and personal attention.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <UserCheck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Smart Student Placement</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">We don't place students based on grades like traditional coaching centers. Through comprehensive assessments, we evaluate learning ability and style to ensure optimal batch placement for maximum growth.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Weekly Testing & Progress Tracking</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">Regular assessments monitor progress with detailed reports shared with parents. Special one-on-one sessions for students who need extra support ensure everyone stays on track.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Bi-weekly Parent Meetings</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">Deep 30-minute sessions every two weeks to understand your child completely - their nature, lifestyle, interests, and dreams. Education goes beyond textbooks; it's about shaping their way of living.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Presentation className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Monthly Student Seminars</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">All-student gatherings foster collaboration, networking, and peer learning. Students share experiences, learn from each other, and build lasting connections that extend beyond academics.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Weekly IIT-NIT Alumni Sessions</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">Direct access to successful IIT and NIT graduates every week. Get career guidance, learn from their journeys, and ensure your efforts align with your dream goals.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Medal className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Olympiad Excellence Program</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">Specialized training for SOF Olympiads, NTSE, and other competitive exams. Our structured approach combines conceptual understanding with strategic problem-solving techniques for maximum success.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Mic className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Public Speaking & Co-curricular</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">Comprehensive development through public speaking, debates, and creative activities. Build confidence, improve communication skills, and develop leadership qualities alongside academic excellence.</p>
              </CardContent>
            </Card>
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
