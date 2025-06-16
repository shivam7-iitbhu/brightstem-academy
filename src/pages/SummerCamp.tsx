import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MapPin, Star, Trophy, BookOpen, Lightbulb, Target, Award, CheckCircle, ArrowRight, Send, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SummerCamp = () => {
  const handleEnrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/contact#enrollment-form';
  };

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Trophy className="h-4 w-4" />
              Summer Learning Adventure 2025
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                4-Week Interactive
              </span>
              <br />
              <span className="text-gray-900">Learning Camp</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our exciting 4-week summer camp for Class 5-8 students! Learn through interactive sessions, 
              hands-on projects, and fun activities with IIT/NIT mentors.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <Calendar className="h-6 w-6 text-orange-600 mb-2 mx-auto" />
                <p className="font-semibold text-gray-900">June 16 - July 12</p>
                <p className="text-sm text-gray-600">4 Weeks Duration</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <Users className="h-6 w-6 text-orange-600 mb-2 mx-auto" />
                <p className="font-semibold text-gray-900">Class 5-8</p>
                <p className="text-sm text-gray-600">Age Appropriate</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <Clock className="h-6 w-6 text-orange-600 mb-2 mx-auto" />
                <p className="font-semibold text-gray-900">2 Hours/Day</p>
                <p className="text-sm text-gray-600">Interactive Sessions</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <MapPin className="h-6 w-6 text-orange-600 mb-2 mx-auto" />
                <p className="font-semibold text-gray-900">Online + Meetup</p>
                <p className="text-sm text-gray-600">Final Week at India Gate</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleEnrollClick}
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">₹8,500</p>
                <p className="text-sm text-gray-500 line-through">₹12,000</p>
                <p className="text-sm text-green-600 font-medium">Save ₹3,500!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Week Schedule Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Learning Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 weeks of intensive online learning followed by an exciting meetup week in Delhi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle className="text-xl">Week 1</CardTitle>
                <CardDescription>Foundation Building</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Math fundamentals & problem-solving
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Science exploration & experiments
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    English communication skills
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Introduction to coding
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <CardTitle className="text-xl">Week 2</CardTitle>
                <CardDescription>Skill Development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Advanced problem-solving techniques
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Creative writing & storytelling
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Science projects & presentations
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Basic programming concepts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <CardTitle className="text-xl">Week 3</CardTitle>
                <CardDescription>Mastery & Projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Final project preparation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Presentation skills workshop
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Coding project showcase
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Mock test preparation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-50 to-pink-50">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-orange-600">Meetup Week</CardTitle>
                <CardDescription className="text-orange-500">In-Person at India Gate, Delhi</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Interactive quiz competitions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Final project presentations
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Mock tests & assessments
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Student networking & fun activities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4-Week Detailed Schedule Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">4-Week Schedule</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive breakdown of what your child will learn each week
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-orange-500 to-red-500">
                  <TableHead className="text-white font-bold text-lg py-6">Week</TableHead>
                  <TableHead className="text-white font-bold text-lg">Focus Area</TableHead>
                  <TableHead className="text-white font-bold text-lg">Topics Covered</TableHead>
                  <TableHead className="text-white font-bold text-lg">Activities</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-blue-50 transition-colors">
                  <TableCell className="font-bold text-blue-600 text-lg py-6">Week 1</TableCell>
                  <TableCell className="font-semibold">Foundation Building</TableCell>
                  <TableCell>
                    <ul className="space-y-1 text-sm">
                      <li>• Math fundamentals & problem-solving</li>
                      <li>• Science exploration & experiments</li>
                      <li>• English communication skills</li>
                      <li>• Introduction to coding</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="space-y-1 text-sm">
                      <li>• Interactive math games</li>
                      <li>• Science experiments at home</li>
                      <li>• Speaking & writing exercises</li>
                      <li>• Basic programming concepts</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-green-50 transition-colors">
                  <TableCell className="font-bold text-green-600 text-lg py-6">Week 2</TableCell>
                  <TableCell className="font-semibold">Skill Development</TableCell>
                  <TableCell>
                    <ul className="space-y-1 text-sm">
                      <li>• Advanced problem-solving techniques</li>
                      <li>• Creative writing & storytelling</li>
                      <li>• Science projects & presentations</li>
                      <li>• Basic programming concepts</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="space-y-1 text-sm">
                      <li>• Logic puzzles & brain teasers</li>
                      <li>• Story creation workshops</li>
                      <li>• Project-based learning</li>
                      <li>• Coding challenges</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-purple-50 transition-colors">
                  <TableCell className="font-bold text-purple-600 text-lg py-6">Week 3</TableCell>
                  <TableCell className="font-semibold">Mastery & Projects</TableCell>
                  <TableCell>
                    <ul className="space-y-1 text-sm">
                      <li>• Final project preparation</li>
                      <li>• Presentation skills workshop</li>
                      <li>• Coding project showcase</li>
                      <li>• Mock test preparation</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="space-y-1 text-sm">
                      <li>• Individual project work</li>
                      <li>• Public speaking practice</li>
                      <li>• Code review sessions</li>
                      <li>• Assessment preparation</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-orange-50 transition-colors">
                  <TableCell className="font-bold text-orange-600 text-lg py-6">Week 4</TableCell>
                  <TableCell className="font-semibold">Meetup Week (Delhi)</TableCell>
                  <TableCell>
                    <ul className="space-y-1 text-sm">
                      <li>• Interactive quiz competitions</li>
                      <li>• Final project presentations</li>
                      <li>• Mock tests & assessments</li>
                      <li>• Student networking & fun activities</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="space-y-1 text-sm">
                      <li>• Live competitions at India Gate</li>
                      <li>• Project showcase event</li>
                      <li>• Skills assessment tests</li>
                      <li>• Group activities & games</li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Our Summer Camp?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of learning from IIT/NIT mentors with proven teaching methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">IIT/NIT Mentors</h3>
                <p className="text-gray-600">Learn from graduates of India's top engineering institutes with real industry experience</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Learning</h3>
                <p className="text-gray-600">Hands-on activities, experiments, and project-based learning that makes education fun</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Small Batch Size</h3>
                <p className="text-gray-600">Limited seats ensure personalized attention and better learning outcomes</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h3>
                <p className="text-gray-600">Math, Science, English, and Coding - all in one comprehensive program</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Unique Meetup Experience</h3>
                <p className="text-gray-600">Final week in-person meetup at India Gate for presentations and networking</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certification</h3>
                <p className="text-gray-600">Receive completion certificates and skill badges for your learning journey</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Your Child Will Gain Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Your Child <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Will Gain</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond academics - building confidence, creativity, and critical thinking skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Problem-Solving Skills</h3>
              <p className="text-gray-600">Develop analytical thinking and creative problem-solving abilities through hands-on challenges</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Communication Skills</h3>
              <p className="text-gray-600">Build confidence in speaking, presenting, and expressing ideas clearly and effectively</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Creative Thinking</h3>
              <p className="text-gray-600">Encourage out-of-the-box thinking and innovative approaches to learning</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <p className="text-gray-600">Strengthen foundation in core subjects with personalized attention and guidance</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership Qualities</h3>
              <p className="text-gray-600">Develop leadership skills through group projects and presentation opportunities</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Confidence Building</h3>
              <p className="text-gray-600">Build self-confidence through achievements, recognition, and positive learning experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Made Fun & Interactive Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learning Made <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Fun & Interactive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience education like never before with our innovative teaching methods and creative activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                  alt="Computer Science and Coding"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Code className="h-8 w-8 mb-2" />
                  <p className="text-lg font-semibold">Computer Science & Coding</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Programming Fundamentals</h3>
                <p className="text-gray-600">Learn coding concepts through interactive exercises, visual programming, and hands-on projects</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Creative Science Experiments"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Lightbulb className="h-8 w-8 mb-2" />
                  <p className="text-lg font-semibold">Creative Science Experiments</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-on Experiments</h3>
                <p className="text-gray-600">Virtual and DIY science experiments that bring concepts to life with everyday materials</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Gamified Learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Trophy className="h-8 w-8 mb-2" />
                  <p className="text-lg font-semibold">Gamified Learning</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Games</h3>
                <p className="text-gray-600">Learn through puzzles, coding challenges, and educational games that make learning addictive</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Secure Your Spot Today!
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Limited seats available for our Summer Camp 2025. Don't miss this opportunity to give your child 
            an unforgettable learning experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleEnrollClick}
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Secure Your Spot Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-orange-100">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">₹8,500</div>
              <div className="text-sm">Early Bird Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-sm">Limited Seats</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-sm">Weeks Program</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SummerCamp;
