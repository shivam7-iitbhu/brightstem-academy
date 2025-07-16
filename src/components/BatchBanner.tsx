import { Link } from 'react-router-dom';
import { CONSTANTS } from '@/lib/constants';

export function BatchBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 to-green-50 border-b border-blue-100 py-3 text-center h-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm md:text-base font-medium text-gray-700">
          🎓 <span className="font-bold text-blue-600">New Batch Starting {CONSTANTS.BATCH_START_DATE}</span> • 
          <span className="text-orange-600 font-semibold"> Limited Seats Available</span> • 
          <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline font-semibold ml-2">
            Book a free demo →
          </Link>
        </p>
      </div>
    </div>
  );
} 