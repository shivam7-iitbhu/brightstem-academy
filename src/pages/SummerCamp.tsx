
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Users, MapPin, Star, Trophy, Brain, Computer, Mic, Puzzle, Target, Gift, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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

      {/* Weekly Schedule - Moved to second position */}
      <section id="details" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              4-Week <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Learning Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Structured curriculum designed for progressive learning</p>
          </div>

          {/* Interactive Learning Schedule Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
              <h3 className="text-2xl font-bold text-center">📚 Complete Learning Schedule</h3>
              <p className="text-center text-orange-100 mt-2">Interactive sessions designed for maximum engagement</p>
            </div>
            
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b-2 border-gray-200">
                    <TableHead className="text-center font-bold text-gray-900 py-4 text-lg">Week</TableHead>
                    <TableHead className="text-center font-bold text-gray-900 py-4 text-lg">
                      <div className="flex items-center justify-center gap-2">
                        <Brain className="h-5 w-5 text-purple-600" />
                        Aptitude
                      </div>
                    </TableHead>
                    <TableHead className="text-center font-bold text-gray-900 py-4 text-lg">
                      <div className="flex items-center justify-center gap-2">
                        <Computer className="h-5 w-5 text-blue-600" />
                        Computer Science
                      </div>
                    </TableHead>
                    <TableHead className="text-center font-bold text-gray-900 py-4 text-lg">
                      <div className="flex items-center justify-center gap-2">
                        <Mic className="h-5 w-5 text-green-600" />
                        Public Speaking
                      </div>
                    </TableHead>
                    <TableHead className="text-center font-bold text-gray-900 py-4 text-lg">
                      <div className="flex items-center justify-center gap-2">
                        <Puzzle className="h-5 w-5 text-orange-600" />
                        Puzzle Session
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campSchedule.map((week, index) => (
                    <TableRow 
                      key={week.week} 
                      className={`transition-all duration-200 hover:bg-gray-50 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                      }`}
                    >
                      <TableCell className="text-center py-6 border-r border-gray-200">
                        <div className="space-y-2">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold text-lg">
                            {week.week}
                          </div>
                          <div className="font-bold text-gray-900 text-lg">{week.title}</div>
                          <div className="text-sm text-gray-600">Week {week.week}</div>
                        </div>
                      </TableCell>
                      
                      {week.sessions.map((session, sessionIndex) => (
                        <TableCell key={sessionIndex} className="text-center py-6 px-4">
                          <div className="space-y-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto ${
                              session.type === 'Aptitude' ? 'bg-purple-100' :
                              session.type === 'Computer Science' ? 'bg-blue-100' :
                              session.type === 'Public Speaking' ? 'bg-green-100' :
                              'bg-orange-100'
                            }`}>
                              <session.icon className={`h-5 w-5 ${
                                session.type === 'Aptitude' ? 'text-purple-600' :
                                session.type === 'Computer Science' ? 'text-blue-600' :
                                session.type === 'Public Speaking' ? 'text-green-600' :
                                'text-orange-600'
                              }`} />
                            </div>
                            <div className="text-sm font-medium text-gray-900 leading-tight px-2">
                              {session.topic}
                            </div>
                          </div>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Schedule Summary Footer */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">16</div>
                  <div className="text-sm text-gray-600">Total Sessions</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-red-600">4</div>
                  <div className="text-sm text-gray-600">Subject Areas</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">2hrs</div>
                  <div className="text-sm text-gray-600">Per Session</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-600">Interactive</div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-purple-800">Aptitude Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-purple-700 text-center">Develop logical thinking and problem-solving skills</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <Computer className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-blue-800">Tech Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-700 text-center">Introduction to programming and AI concepts</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <Mic className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-green-800">Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-700 text-center">Build confidence in public speaking and presentations</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <Puzzle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-orange-800">Critical Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-700 text-center">Enhance analytical skills through fun puzzles</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Moved to third position */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Summer Camp?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* What Students Will Gain - Moved to fourth position */}
      <section className="py-20 bg-gray-50">
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

      {/* Learning Made Fun & Interactive - Fifth position with AI-generated images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learning Made <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Fun & Interactive</span>
            </h2>
            <p className="text-xl text-gray-600">Creative and engaging learning experiences designed for young minds</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <Computer className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Interactive Computing</h3>
                  <p className="text-gray-600">Students exploring AI and programming concepts</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white p-4 font-semibold">Hands-on Technology Learning</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <Puzzle className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Creative Problem Solving</h3>
                  <p className="text-gray-600">Students collaborating on puzzle challenges</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white p-4 font-semibold">Team-based Learning Adventures</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-purple-100 via-blue-100 to-teal-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <Mic className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Confident Speaking</h3>
                  <p className="text-gray-600">Students practicing presentation skills</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white p-4 font-semibold">Building Communication Skills</p>
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
