
import { Award, BookOpen, Users, Heart, Target, Star, Code, Briefcase, GraduationCap } from 'lucide-react';
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

  const teamMembers = [
    {
      name: "Akanksha Dubey",
      role: "Founder & Lead Educator",
      image: "/lovable-uploads/3abdda0c-44ad-45fd-bded-abb0824d0462.png",
      qualifications: ["B.Ed (Bachelor of Education)", "M.Sc in Zoology"],
      experience: "5+ years of teaching experience",
      specialties: ["Modern Teaching Methodologies", "Public Speaking Expert at PlanetSpark", "Student Psychology & Assessment"],
      icon: GraduationCap,
      bgColor: "from-pink-500 to-purple-600"
    },
    {
      name: "Shivam Dubey",
      role: "Faculty & Tech Lead",
      image: "/lovable-uploads/c9bda023-675d-4c32-8700-c5b8ee802d27.png",
      qualifications: ["IIT BHU Graduate", "Software Engineer at Google"],
      experience: "Expert in AI-powered education",
      specialties: ["Coding Bootcamps", "Career Guidance", "Modern Teaching with AI", "Doubt Clearing Sessions"],
      icon: Code,
      bgColor: "from-blue-500 to-green-600"
    },
    {
      name: "Vivek Dubey",
      role: "Faculty & Industry Expert",
      image: "/lovable-uploads/91f78a7b-88e5-4b85-adec-25ea53bc6a81.png",
      qualifications: ["NIT Allahabad Graduate", "Software Engineer at Amazon"],
      experience: "Expert in current IT tech stack",
      specialties: ["Coding Bootcamps", "Career Counseling", "Industry Best Practices", "Technical Guidance"],
      icon: Briefcase,
      bgColor: "from-green-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              A unique combination of educational expertise and industry experience. Our team brings together 
              IITian and NITian tech professionals with specialized teaching methodologies to provide 
              world-class education that bridges academic learning with real-world applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">IIT BHU Graduate</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">NIT Allahabad Graduate</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Google Engineer</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">Amazon Engineer</span>
              <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full">5+ Years Teaching</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three passionate educators and industry experts committed to transforming education through innovation and excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${member.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <member.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className={`text-lg font-semibold mb-4 bg-gradient-to-r ${member.bgColor} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Qualifications</h4>
                        <ul className="space-y-1">
                          {member.qualifications.map((qual, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                              {qual}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                        <p className="text-gray-600 text-sm">{member.experience}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Teaching <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Philosophy</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
              "We believe in combining the best of traditional teaching methods with cutting-edge technology and industry insights. 
              Our unique blend of educational expertise from B.Ed qualified teachers and real-world experience from top-tier 
              tech companies ensures that our students receive education that is both academically sound and practically relevant. 
              Every student has unlimited potential, and our mission is to unlock it through innovative, personalized learning experiences."
            </blockquote>
            <div className="text-lg font-semibold text-gray-900">- BrightStem Academy Team</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
