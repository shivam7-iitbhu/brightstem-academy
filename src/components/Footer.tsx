
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
              <div className="mt-6 text-gray-400 text-sm">
                Already a member?{' '}
                <Link to="/auth/login" className="text-blue-400 hover:text-white underline">Login</Link>
                {' '}|{' '}
                <Link to="/auth/signup" className="text-blue-400 hover:text-white underline">Register</Link> here
              </div>
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
                    <p className="text-white font-medium">+91 94546 84161 <span className="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs align-middle">WhatsApp</span></p>
                    <p className="text-gray-400 text-sm">Available on WhatsApp • Queries responded within 15 mins • Mon-Sat 9AM-7PM</p>
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
