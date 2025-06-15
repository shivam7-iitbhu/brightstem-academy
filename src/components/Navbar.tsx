import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Summer Camp', 
      path: '/summer-camp', 
      isSpecial: true,
      badge: 'HOT'
    },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/contact') {
      // If already on contact page, scroll to form
      const formSection = document.getElementById('enrollment-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to contact page with hash
      window.location.href = '/contact#enrollment-form';
    }
  };

  // Only show summer camp banner on pages other than summer-camp
  const showSummerCampBanner = location.pathname !== '/summer-camp';

  return (
    <>
      {/* Summer Camp Banner - Show on all pages except summer-camp */}
      {showSummerCampBanner && (
        <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 relative overflow-hidden fixed top-0 w-full z-50">
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Animated running text background */}
          <div className="absolute inset-0 flex items-center opacity-20">
            <div className="animate-marquee whitespace-nowrap text-sm font-bold">
              🚀 SUMMER CAMP 2025 • 4 WEEKS PROGRAM • STARTING JUNE 16th • IIT/NIT MENTORS • LIMITED SEATS • 
              🚀 SUMMER CAMP 2025 • 4 WEEKS PROGRAM • STARTING JUNE 16th • IIT/NIT MENTORS • LIMITED SEATS • 
              🚀 SUMMER CAMP 2025 • 4 WEEKS PROGRAM • STARTING JUNE 16th • IIT/NIT MENTORS • LIMITED SEATS •
            </div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm md:text-base font-semibold">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-300 fill-current animate-pulse" />
                <span>🚀 SUMMER CAMP 2025 - Starting June 16th!</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>4 Weeks Program • Register by June 16th</span>
              </div>
              <Button 
                asChild 
                size="sm" 
                variant="outline" 
                className="bg-white text-red-600 hover:bg-gray-100 border-white animate-bounce"
                onClick={handleEnrollClick}
              >
                <Link to="/contact#enrollment-form">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } ${showSummerCampBanner ? 'top-12' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="group-hover:scale-110 transition-transform">
                <img 
                  src="/lovable-uploads/a509da7d-f612-42d2-aca6-0d96eeece976.png" 
                  alt="BrightStem Academy Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <span className="text-xl font-bold text-blue-900">
                BrightStem Academy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    item.isSpecial
                      ? 'text-orange-600 hover:text-orange-700'
                      : isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {item.name}
                    {item.isSpecial && (
                      <div className="flex items-center gap-1">
                        <Flame className="h-4 w-4 text-orange-500" />
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                          {item.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  {isActive(item.path) && (
                    <span className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full animate-fade-in ${
                      item.isSpecial 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500'
                        : 'bg-gradient-to-r from-blue-600 to-green-500'
                    }`} />
                  )}
                </Link>
              ))}
              <button
                onClick={handleEnrollClick}
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item.isSpecial
                        ? 'text-orange-600 bg-orange-50 hover:bg-orange-100'
                        : isActive(item.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                    {item.isSpecial && (
                      <div className="flex items-center gap-1">
                        <Flame className="h-4 w-4 text-orange-500" />
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          {item.badge}
                        </span>
                      </div>
                    )}
                  </Link>
                ))}
                <button
                  onClick={(e) => {
                    setIsOpen(false);
                    handleEnrollClick(e);
                  }}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-green-500 text-white px-3 py-2 rounded-md font-medium mt-4"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
