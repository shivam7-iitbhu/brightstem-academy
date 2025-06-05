
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Users, MapPin, Star, Trophy, Brain, Computer, Mic, Puzzle, Target, Gift, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SummerCamp = () => {
  const [activeWeek, setActiveWeek] = useState(1);

  const campSchedule = [
    {
      week: 1,
      title: "Foundation & Fun",
      sessions: [
        { type: "Aptitude", topic: "Pattern Recognition & Logical Thinking", icon: Brain },
        { type: "Computer Science", topic: "Introduction to Programming & AI Basics", icon: Computer },
        { type: "Public Speaking", topic: "Confidence Building & Self Introduction", icon: Mic },
        { type: "Puzzle Session", topic: "Interactive Brain Teasers & Math Puzzles", icon: Puzzle }
      ]
    },
    {
      week: 2,
      title: "Building Skills",
      sessions: [
        { type: "Aptitude", topic: "Number Series & Data Interpretation", icon: Brain },
        { type: "Computer Science", topic: "Coding Games & Algorithm Thinking", icon: Computer },
        { type: "Public Speaking", topic: "Storytelling & Voice Modulation", icon: Mic },
        { type: "Puzzle Session", topic: "Strategy Games & Problem Solving", icon: Puzzle }
      ]
    },
    {
      week: 3,
      title: "Advanced Concepts",
      sessions: [
        { type: "Aptitude", topic: "Critical Thinking & Analytical Reasoning", icon: Brain },
        { type: "Computer Science", topic: "AI Projects & Creative Coding", icon: Computer },
        { type: "Public Speaking", topic: "Debate Skills & Presentation Techniques", icon: Mic },
        { type: "Puzzle Session", topic: "Complex Puzzles & Team Challenges", icon: Puzzle }
      ]
    },
    {
      week: 4,
      title: "Mastery & Showcase",
      sessions: [
        { type: "Aptitude", topic: "Mock Tests & Speed Building", icon: Brain },
        { type: "Computer Science", topic: "Final Project Presentation", icon: Computer },
        { type: "Public Speaking", topic: "Final Presentations & Awards", icon: Mic },
        { type: "Puzzle Session", topic: "Grand Puzzle Championship", icon: Puzzle }
      ]
    }
  ];

  const highlights = [
    {
      icon: Trophy,
      title: "Interactive Learning",
      description: "Hands-on activities, quizzes, and real-time problem solving"
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Maximum 15 students per batch for personalized attention"
    },
    {
      icon: Star,
      title: "Expert Instructors",
      description: "IIT & NIT graduates with specialized teaching experience"
    },
    {
      icon: Gift,
      title: "Final Meetup",
      description: "In-person celebration with certificates and prizes"
    }
  ];

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Calendar className="h-4 w-4" />
              Starting June 9, 2024
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 Summer Learning Camp 2024
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95">
            4 Weeks of Interactive Learning for Class 5-8 Students
            <br />
            <span className="text-yellow-200 font-semibold">Aptitude • Computer Science • Public Speaking • Fun Puzzles</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold">₹8,500</div>
              <div className="text-lg line-through opacity-75">₹12,000</div>
              <div className="text-sm">Limited Time Offer</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold">15</div>
              <div className="text-lg">Students Max</div>
              <div className="text-sm">Per Batch</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold">June 9</div>
              <div className="text-lg">Registration</div>
              <div className="text-sm">Deadline</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/contact">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              <a href="#details">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Camp Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Summer Camp?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Learning Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learning Made <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Fun & Interactive</span>
            </h2>
            <p className="text-xl text-gray-600">See how our students engage with technology and puzzles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=400&fit=crop" 
                alt="Students learning with laptops"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-4 font-semibold">Interactive Computer Learning</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop" 
                alt="Group puzzle solving session"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-4 font-semibold">Collaborative Puzzle Solving</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop" 
                alt="Programming and coding session"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-4 font-semibold">Hands-on Coding Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section id="details" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              4-Week <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Learning Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Structured curriculum designed for progressive learning</p>
          </div>

          {/* Week Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {campSchedule.map((week, index) => (
              <button
                key={week.week}
                onClick={() => setActiveWeek(week.week)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeWeek === week.week
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Week {week.week}: {week.title}
              </button>
            ))}
          </div>

          {/* Active Week Content */}
          {campSchedule.map((week) => (
            activeWeek === week.week && (
              <div key={week.week} className="animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {week.sessions.map((session, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center">
                        <div className="mx-auto w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-3">
                          <session.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg">{session.type}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardDescription className="text-gray-600">
                          {session.topic}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* What Students Will Gain */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Your Child Will <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Gain</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Problem-Solving Skills</h3>
                  <p className="text-gray-600">Develop critical thinking through aptitude training and interactive puzzles</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Introduction to AI & Programming</h3>
                  <p className="text-gray-600">Age-appropriate introduction to coding concepts and artificial intelligence</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Confidence in Public Speaking</h3>
                  <p className="text-gray-600">Build communication skills and overcome stage fright through structured practice</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Logical & Analytical Thinking</h3>
                  <p className="text-gray-600">Strengthen reasoning abilities through structured puzzle-solving sessions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificate & Recognition</h3>
                  <p className="text-gray-600">Completion certificate and prizes at the final in-person meetup</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Student using laptop for learning"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Engagement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🎯 Limited Seats Available!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
            Don't miss this opportunity to give your child a head start in the future. 
            Only 15 seats available per batch. Register before June 9th!
          </p>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-3xl font-bold mb-2">Early Bird Offer</div>
            <div className="text-6xl font-bold mb-2">₹8,500</div>
            <div className="text-xl line-through opacity-75 mb-4">₹12,000</div>
            <div className="text-sm bg-yellow-400 text-red-800 px-4 py-2 rounded-full font-bold">
              Save ₹3,500 - Limited Time!
            </div>
          </div>

          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/contact">
              Secure Your Spot Now <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>

          <p className="text-sm mt-4 opacity-75">
            Registration closes on June 9th or when seats are filled
          </p>
        </div>
      </section>
    </div>
  );
};

export default SummerCamp;
