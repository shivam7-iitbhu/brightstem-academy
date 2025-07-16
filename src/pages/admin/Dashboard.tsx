import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  Users,
  BookOpen,
  TrendingUp,
  Calendar,
  DollarSign,
  Star,
  Home,
  LogOut
} from 'lucide-react';

const stats = [
  {
    title: 'Total Students',
    value: '250',
    change: '+12%',
    trend: 'up',
    icon: Users,
    description: 'Active students this month',
  },
  {
    title: 'Active Courses',
    value: '8',
    change: '+2',
    trend: 'up',
    icon: BookOpen,
    description: 'Running courses',
  },
  {
    title: 'Revenue',
    value: '₹1.2L',
    change: '+18%',
    trend: 'up',
    icon: DollarSign,
    description: 'This month',
  },
  {
    title: 'Student Satisfaction',
    value: '4.8',
    change: '+0.2',
    trend: 'up',
    icon: Star,
    description: 'Average rating',
  },
];

const recentActivities = [
  {
    id: 1,
    type: 'enrollment',
    student: 'Rahul Sharma',
    course: 'AI & Computer Science',
    date: '2 hours ago',
  },
  {
    id: 2,
    type: 'completion',
    student: 'Priya Patel',
    course: 'Complete Learning Package',
    date: '5 hours ago',
  },
  {
    id: 3,
    type: 'enrollment',
    student: 'Amit Kumar',
    course: 'Summer Camp - Robotics',
    date: '1 day ago',
  },
];

const upcomingClasses = [
  {
    id: 1,
    title: 'Introduction to Python',
    time: '10:00 AM',
    date: 'Today',
    students: 5,
  },
  {
    id: 2,
    title: 'Advanced Mathematics',
    time: '2:00 PM',
    date: 'Today',
    students: 4,
  },
  {
    id: 3,
    title: 'Web Development Basics',
    time: '11:00 AM',
    date: 'Tomorrow',
    students: 6,
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header with navigation buttons */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your academy.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Button>
          <Button
            variant="destructive"
            onClick={handleSignOut}
            className="flex items-center space-x-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-green-500 p-3 rounded-xl">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <div className="flex items-baseline">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <span className="ml-2 text-sm font-medium text-green-600">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activities and Upcoming Classes */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Activities */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center space-x-4 border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                  {activity.type === 'enrollment' ? (
                    <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Star className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {activity.student}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.type === 'enrollment' ? 'Enrolled in' : 'Completed'}{' '}
                    {activity.course}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.date}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Classes */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Classes</h3>
          <div className="space-y-4">
            {upcomingClasses.map((class_) => (
              <div
                key={class_.id}
                className="flex items-center space-x-4 border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0"
              >
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {class_.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {class_.time} - {class_.date}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {class_.students} students
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
} 