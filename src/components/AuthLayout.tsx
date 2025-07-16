import { Link } from 'react-router-dom';
import { CONSTANTS } from '@/lib/constants';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/a509da7d-f612-42d2-aca6-0d96eeece976.png" 
            alt={`${CONSTANTS.COMPANY_NAME} Logo`} 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            {CONSTANTS.COMPANY_NAME}
          </span>
        </Link>
      </div>
      <div className="container min-h-screen flex flex-col items-center justify-center py-12">
        {children}
      </div>
    </div>
  );
} 