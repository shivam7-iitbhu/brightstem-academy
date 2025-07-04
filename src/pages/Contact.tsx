
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 94546 84161",
      description: "Mon-Sat 9AM-7PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@brightstem.in",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Delhi, India",
      description: "Home tuition available"
    },
    {
      icon: Clock,
      title: "Availability",
      details: "Flexible Timings",
      description: "Weekend slots available"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const selectedPackage = formData.get('package') as string;
      
      const enrollmentData = {
        student_name: formData.get('studentName') as string,
        grade: formData.get('grade') as string,
        parent_name: formData.get('parentName') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        package: selectedPackage,
        subjects: formData.get('subjects') as string || null,
        address: formData.get('address') as string,
        message: formData.get('message') as string || null,
      };

      // Choose the appropriate endpoint based on package
      const functionName = selectedPackage === 'summer-camp' ? 'submit-enrollment' : 'submit-general-enrollment';
      
      const { data, error } = await supabase.functions.invoke(functionName, {
        body: enrollmentData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Enrollment Request Submitted!",
        description: "Thank you for your interest. We'll contact you within 24 hours to discuss your requirements.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();

    } catch (error) {
      console.error('Error submitting enrollment:', error);
      toast({
        title: "Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Start Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to unlock your academic potential? Get in touch with us today and take the first step 
              towards educational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2">{info.details}</p>
                  <p className="text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section id="enrollment-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-12">
              <CardTitle className="text-3xl font-bold mb-4">Enrollment Form</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Fill out the form below and we'll get back to you within 24 hours to discuss your learning needs.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="studentName" className="text-lg font-semibold text-gray-700">Student Name *</Label>
                    <Input 
                      id="studentName" 
                      name="studentName"
                      placeholder="Enter student's full name" 
                      required 
                      className="h-12 text-lg border-2 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="grade" className="text-lg font-semibold text-gray-700">Grade/Class *</Label>
                    <Select name="grade" required>
                      <SelectTrigger className="h-12 text-lg border-2 focus:border-blue-500">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Grade</SelectItem>
                        <SelectItem value="2">2nd Grade</SelectItem>
                        <SelectItem value="3">3rd Grade</SelectItem>
                        <SelectItem value="4">4th Grade</SelectItem>
                        <SelectItem value="5">5th Grade</SelectItem>
                        <SelectItem value="6">6th Grade</SelectItem>
                        <SelectItem value="7">7th Grade</SelectItem>
                        <SelectItem value="8">8th Grade</SelectItem>
                        <SelectItem value="9">9th Grade</SelectItem>
                        <SelectItem value="10">10th Grade</SelectItem>
                        <SelectItem value="11">11th Grade</SelectItem>
                        <SelectItem value="12">12th Grade</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentName" className="text-lg font-semibold text-gray-700">Parent/Guardian Name *</Label>
                    <Input 
                      id="parentName" 
                      name="parentName"
                      placeholder="Enter parent's name" 
                      required 
                      className="h-12 text-lg border-2 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg font-semibold text-gray-700">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      placeholder="+91 94546 84161" 
                      required 
                      className="h-12 text-lg border-2 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-semibold text-gray-700">Email Address *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="parent@example.com" 
                    required 
                    className="h-12 text-lg border-2 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="package" className="text-lg font-semibold text-gray-700">Preferred Package *</Label>
                  <Select name="package" required>
                    <SelectTrigger className="h-12 text-lg border-2 focus:border-blue-500">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic (₹2,000-3,000/month)</SelectItem>
                      <SelectItem value="standard">Standard (₹3,500-4,500/month)</SelectItem>
                      <SelectItem value="premium">Premium (₹6,000-8,000/month)</SelectItem>
                      <SelectItem value="summer-camp">Summer Camp 2025 (₹8,500 for 3 weeks)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subjects" className="text-lg font-semibold text-gray-700">Subjects Needed</Label>
                  <Input 
                    id="subjects" 
                    name="subjects"
                    placeholder="e.g., Mathematics, Science, English" 
                    className="h-12 text-lg border-2 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-lg font-semibold text-gray-700">Address *</Label>
                  <Textarea 
                    id="address" 
                    name="address"
                    placeholder="Enter your complete address for home tuition" 
                    required 
                    rows={3}
                    className="text-lg border-2 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-semibold text-gray-700">Additional Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about specific learning goals, challenges, or preferences..." 
                    rows={4}
                    className="text-lg border-2 focus:border-blue-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 h-6 w-6" />
                      Submit Enrollment Request
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How do I know which package is right for my child?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We offer a free consultation to assess your child's needs and recommend the best package. 
                  You can also start with any package and upgrade or modify as needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Are the sessions conducted at home?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, all our tuition sessions are conducted at your home for convenience and comfort. 
                  We also offer online sessions when needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can I track my child's progress?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely! Our Standard and Premium packages include detailed progress tracking, 
                  regular reports, and parent-teacher communication through our ParentSync platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
