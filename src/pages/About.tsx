
import { Award, BookOpen, Users, Heart, Target, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const achievements = [
    { icon: Users, title: "500+ Students Taught", description: "Successfully guided over 500 students to academic excellence" },
    { icon: Award, title: "8+ Years Experience", description: "Dedicated years of teaching and mentoring students" },
    { icon: Star, title: "95% Success Rate", description: "Consistently high success rate in student improvement" },
    { icon: BookOpen, title: "Multiple Subjects", description: "Expertise across various academic subjects" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every student receives individual attention tailored to their unique learning style and pace."
    },
    {
      icon: Target,
      title: "Goal-Oriented Learning",
      description: "Clear objectives and milestone tracking to ensure consistent progress towards academic goals."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Approach",
      description: "Holistic education covering academics, personality development, and critical thinking skills."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Meet Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dedicated Educator</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 8 years of teaching experience and a passion for nurturing young minds, 
                I am committed to helping every student reach their full potential through personalized, 
                innovative teaching methods.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">M.Ed in Educational Psychology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Certified in Modern Teaching Methodologies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Specialist in Student Psychology & Motivation</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in delay-300">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Teacher" 
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white shadow-lg">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute bottom-8 -right-8 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for themselves - a testament to dedicated teaching and student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Teaching <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on core values that prioritize student growth, understanding, and long-term success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Message Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Personal Message</h2>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
              "Education is not just about academic excellence; it's about nurturing confident, 
              curious, and capable individuals who can face any challenge life throws at them. 
              Every student has unique potential, and my role is to unlock that potential through 
              patient guidance, innovative teaching methods, and unwavering support."
            </blockquote>
            <div className="text-lg font-semibold text-gray-900">- Your Dedicated Teacher</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
