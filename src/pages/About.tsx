
import { Award, BookOpen, Users, Heart, Target, Star, Code, Briefcase, GraduationCap, CheckCircle, Calendar, UserCheck, TrendingUp, Coffee, Presentation, Trophy, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

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

  const teachingPhilosophy = [
    {
      icon: Users,
      title: "Optimal Small Batches (4-5 Students)",
      description: "Research shows 1:1 coaching lacks peer learning opportunities, while large classrooms (30+ students) inhibit questioning. Our scientifically-backed 4-5 student batches create the perfect balance of collaborative learning and personal attention.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: UserCheck,
      title: "Smart Student Placement",
      description: "We don't place students based on grades like traditional coaching centers. Through comprehensive assessments, we evaluate learning ability and style to ensure optimal batch placement for maximum growth.",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Weekly Testing & Progress Tracking",
      description: "Regular assessments monitor progress with detailed reports shared with parents. Special one-on-one sessions for students who need extra support ensure everyone stays on track.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Coffee,
      title: "Bi-weekly Parent Meetings",
      description: "Deep 30-minute sessions every two weeks to understand your child completely - their nature, lifestyle, interests, and dreams. Education goes beyond textbooks; it's about shaping their way of living.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Presentation,
      title: "Monthly Student Seminars",
      description: "All-student gatherings foster collaboration, networking, and peer learning. Students share experiences, learn from each other, and build lasting connections that extend beyond academics.",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: Trophy,
      title: "Weekly IIT-NIT Alumni Sessions",
      description: "Direct access to successful IIT and NIT graduates every week. Get career guidance, learn from their journeys, and ensure your efforts align with your dream goals.",
      color: "from-indigo-500 to-purple-600"
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
      image: "/lovable-uploads/91f78a7b-88e5-4b85-adec-25ea53bc6a81.png",
      qualifications: ["IIT BHU Graduate", "Software Engineer at Google"],
      experience: "Expert in AI-powered education",
      specialties: ["Coding Bootcamps", "Career Guidance", "Modern Teaching with AI", "Doubt Clearing Sessions"],
      icon: Code,
      bgColor: "from-blue-500 to-green-600"
    },
    {
      name: "Vivek Dubey",
      role: "Faculty & Industry Expert",
      image: "/lovable-uploads/c9bda023-675d-4c32-8700-c5b8ee802d27.png",
      qualifications: ["NIT Allahabad Graduate", "Software Engineer at Amazon"],
      experience: "Expert in current IT tech stack",
      specialties: ["Coding Bootcamps", "Career Counseling", "Industry Best Practices", "Technical Guidance"],
      icon: Briefcase,
      bgColor: "from-green-500 to-blue-600"
    }
  ];

  const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
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
  );

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-4">
              A unique combination of educational expertise and industry experience. Our team brings together 
              IITian and NITian tech professionals with specialized teaching methodologies to provide 
              world-class education that bridges academic learning with real-world applications.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium px-4">
              <span className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full">IIT BHU Graduate</span>
              <span className="bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full">NIT Allahabad Graduate</span>
              <span className="bg-purple-100 text-purple-800 px-3 sm:px-4 py-2 rounded-full">Google Engineer</span>
              <span className="bg-orange-100 text-orange-800 px-3 sm:px-4 py-2 rounded-full">Amazon Engineer</span>
              <span className="bg-pink-100 text-pink-800 px-3 sm:px-4 py-2 rounded-full">5+ Years Teaching</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Three passionate educators and industry experts committed to transforming education through innovation and excellence.
            </p>
          </div>

          {/* Desktop View - Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* Mobile and Tablet View - Carousel */}
          <div className="lg:hidden">
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                    <TeamMemberCard member={member} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Numbers that speak for themselves - a testament to dedicated teaching and student success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-3 sm:mb-6 group-hover:scale-110 transition-transform">
                    <achievement.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{achievement.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Teaching Philosophy Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Research-Backed <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Teaching Philosophy</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4 mb-8">
              Every aspect of our teaching methodology is grounded in educational research and psychological studies 
              to create the most effective learning environment for your child.
            </p>
            
            {/* Clean Modern Button */}
            <div className="flex justify-center mb-12">
              <Link 
                to="/#why-choose-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                Explore Our Teaching Methods
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Illustrative Image */}
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Small group learning environment"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              />
              <p className="text-sm text-gray-500 mt-4 italic">Small batch learning - the perfect balance of collaboration and personal attention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Built on core values that prioritize student growth, understanding, and long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Pledge Section */}
      <section className="py-8 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Pledge to Excellence</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700">
              <p className="font-semibold text-blue-600">As educators and mentors, we solemnly pledge to:</p>
              <div className="grid gap-3 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p>Nurture each student's unique potential through personalized attention and guidance</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p>Maintain the highest standards of educational excellence by combining traditional wisdom with modern innovation</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p>Foster a supportive learning environment where questions are encouraged and curiosity is celebrated</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p>Bridge academic knowledge with real-world applications through our IIT-NIT alumni network</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p>Ensure transparent communication with parents and regular updates on student progress</p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <p className="italic text-sm sm:text-base">
                  "We don't just teach; we inspire, guide, and empower. Our commitment is to transform education into a journey of discovery and growth."
                </p>
                <div className="mt-2 font-semibold text-gray-900">
                  - Team BrightStem Academy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
