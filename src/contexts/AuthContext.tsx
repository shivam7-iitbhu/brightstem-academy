import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface Profile {
  id: string;
  role: 'admin' | 'student';
  full_name?: string;
  phone?: string;
  email: string;
  created_at?: string;
  updated_at?: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  loading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        fetchProfile(session.user.id);
      }
      setLoading(false);
    });

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        fetchProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      // Since profiles table doesn't exist in the current database schema,
      // we'll create a basic profile from the user metadata
      setProfile({
        id: userId,
        role: 'student', // Default role
        full_name: user?.user_metadata?.full_name || '',
        email: user?.email || '',
        created_at: user?.created_at,
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch user profile',
        variant: 'destructive'
      });
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      toast({
        title: 'Success!',
        description: 'Please check your email to verify your account.',
      });
    } catch (error) {
      console.error('Error signing up:', error);
      toast({
        title: 'Error',
        description: 'Failed to sign up. Please try again.',
        variant: 'destructive'
      });
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: 'Welcome back!',
        description: 'Successfully signed in.',
      });
    } catch (error) {
      console.error('Error signing in:', error);
      toast({
        title: 'Error',
        description: 'Failed to sign in. Please check your credentials.',
        variant: 'destructive'
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      toast({
        title: 'Goodbye!',
        description: 'Successfully signed out.',
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: 'Error',
        description: 'Failed to sign out.',
        variant: 'destructive'
      });
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) throw error;

      toast({
        title: 'Check your email',
        description: 'We have sent you a password reset link.',
      });
    } catch (error) {
      console.error('Error resetting password:', error);
      toast({
        title: 'Error',
        description: 'Failed to send reset password email.',
        variant: 'destructive'
      });
      throw error;
    }
  };

  const value = {
    user,
    profile,
    signUp,
    signIn,
    signOut,
    resetPassword,
    loading,
    isAdmin: profile?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 