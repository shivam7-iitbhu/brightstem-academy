
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CONSTANTS } from '@/lib/constants';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();

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
      name: 'Bootcamps', 
      path: '/bootcamps', 
      isSpecial: true,
      badge: 'NEW',
      icon: Code
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/contact') {
      const formSection = document.getElementById('enrollment-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/contact#enrollment-form';
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } top-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Section - Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="/lovable-uploads/a509da7d-f612-42d2-aca6-0d96eeece976.png" 
                alt={`${CONSTANTS.COMPANY_NAME} Logo`} 
                className="h-10 w-auto group-hover:opacity-80 transition"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                {CONSTANTS.COMPANY_NAME}
              </span>
            </Link>
          </div>

          {/* Navigation Items - Center */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex w-full justify-center space-x-8">
              {navItems.map((item, idx) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  } ${idx === 0 ? 'ml-12 lg:ml-20' : ''}`}
                >
                  {/* Add icon for Bootcamps */}
                  {item.icon && (
                    <item.icon className="inline-block mr-1 h-4 w-4 align-text-bottom text-blue-500" />
                  )}
                  {item.name}
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
              <Button
                onClick={handleEnrollClick}
                className="circular-trail-button bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a Free Demo
              </Button>
            </div>
          </div>

          {/* Auth Section - Right */}
          <div className="hidden md:flex items-center space-x-4">
            {user && (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  Welcome, <span className="font-semibold text-blue-600">{profile?.full_name}</span>
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative">
                      <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-full p-2">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      <div className="flex flex-col">
                        <span className="font-medium">{profile?.full_name}</span>
                        <span className="text-xs text-gray-500">{user.email}</span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {profile?.role === 'admin' && (
                      <DropdownMenuItem onClick={() => navigate('/admin')}>
                        <Code className="mr-2 h-4 w-4" />
                        <span>Admin Panel</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {user && (
              <div className="px-3 py-2 text-sm text-gray-600">
                Welcome, <span className="font-semibold text-blue-600">{profile?.full_name}</span>
              </div>
            )}
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                } ${idx === 0 ? 'ml-8' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {/* Add icon for Bootcamps */}
                {item.icon && (
                  <item.icon className="inline-block mr-1 h-4 w-4 align-text-bottom text-blue-500" />
                )}
                {item.name}
                {item.badge && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-500 text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
            {/* Only show admin/logout for signed-in users */}
            {user && (
              <div className="mt-4 space-y-2">
                {profile?.role === 'admin' && (
                  <Button
                    onClick={() => {
                      navigate('/admin');
                      setIsOpen(false);
                    }}
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Admin Panel
                  </Button>
                )}
                <Button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  variant="ghost"
                  className="w-full justify-start text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
