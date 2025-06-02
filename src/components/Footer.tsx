
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleQuickEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you shortly to discuss enrollment options.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Quick Enrollment Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of successful learners. Enter your email and we'll contact you within 24 hours.
          </p>
          
          <form onSubmit={handleQuickEnroll} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-gray-900 border-0"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 h-12 font-semibold"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enroll
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/d8899f5c-745b-4049-aaf0-37773ca2e953.png" 
                  alt="BrightStem Academy Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">BrightStem Academy</span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming lives through quality education. Personalized learning solutions 
                for every student's unique journey to success.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">Home Tuition</li>
                <li className="text-gray-400">Online Classes</li>
                <li className="text-gray-400">Exam Preparation</li>
                <li className="text-gray-400">Speaking Sessions</li>
                <li className="text-gray-400">Progress Tracking</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">+91 94546 84161</p>
                    <p className="text-gray-400 text-sm">Mon-Sat 9AM-7PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">contact@brightstem.in</p>
                    <p className="text-gray-400 text-sm">Quick response within 24hrs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Delhi, India</p>
                    <p className="text-gray-400 text-sm">Home tuition available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 BrightStem Academy. All rights reserved. Transforming education, one student at a time.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
