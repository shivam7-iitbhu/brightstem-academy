
import { Check, Users, Brain, MessageSquare, Target, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PricingCard from '@/components/PricingCard';

const Services = () => {
  const features = [
    {
      icon: Users,
      title: "QuizGrid Assessment Platform",
      description: "Advanced AI-powered assessment system that identifies knowledge gaps and provides personalized practice recommendations.",
      benefits: ["Adaptive learning paths", "Real-time performance tracking", "Detailed analytics", "Weakness identification"]
    },
    {
      icon: MessageSquare,
      title: "ParentSync Communication",
      description: "Keep parents in the loop with regular updates, progress reports, and direct communication channels.",
      benefits: ["Weekly progress reports", "Instant messaging", "Parent-teacher conferences", "Academic milestone alerts"]
    },
    {
      icon: Brain,
      title: "One-on-One Personalized Sessions",
      description: "Exclusive individual attention tailored to each student's unique learning style and pace.",
      benefits: ["Customized curriculum", "Flexible scheduling", "Individual pace", "Personal attention"]
    },
    {
      icon: Target,
      title: "Speaking & Communication Sessions",
      description: "Build confidence and communication skills through structured speaking practice and presentation training.",
      benefits: ["Public speaking confidence", "Language fluency", "Presentation skills", "Interview preparation"]
    }
  ];

  const subjects = [
    "Mathematics", "Science", "English", "Social Studies", 
    "Physics", "Chemistry", "Biology", "Computer Science"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From group sessions to premium one-on-one tutoring, discover the perfect learning package 
              designed to unlock your child's full academic potential.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Learning <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge educational technology combined with proven teaching methodologies.
            </p>
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
              Subjects We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cover</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage across all major academic subjects with specialized focus areas.
            </p>
          </div>

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
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning Package</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to provide exceptional value while meeting diverse learning needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Basic"
              price="₹2,000-3,000"
              period="/month"
              description="Perfect for students who need group learning support"
              features={[
                "Group tuition at your home",
                "Weekly progress tracking",
                "Study materials included",
                "Homework assistance",
                "Monthly assessments"
              ]}
              popular={false}
            />
            
            <PricingCard
              title="Standard"
              price="₹3,500-4,500"
              period="/month"
              description="Enhanced learning with digital tools and parent updates"
              features={[
                "Everything in Basic",
                "QuizGrid assessment platform",
                "ParentSync progress updates",
                "Monthly performance reports",
                "Doubt clearing sessions",
                "Online resource access"
              ]}
              popular={true}
            />
            
            <PricingCard
              title="Premium"
              price="₹6,000-8,000"
              period="/month"
              description="Complete personalized learning experience"
              features={[
                "One-on-one personalized tuition",
                "Full learning dashboard",
                "Speaking & communication sessions",
                "24/7 doubt support",
                "Career guidance sessions",
                "Exam preparation coaching",
                "Priority scheduling"
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
            Join our community of successful learners and experience the difference personalized education can make.
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
