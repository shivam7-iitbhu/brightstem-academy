import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AuthLayout } from '@/components/AuthLayout';

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      setIsLoading(true);
      await resetPassword(values.email);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Reset password error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <AuthLayout>
        <div className="w-full max-w-lg flex flex-col items-center space-y-6">
          <Card className="border-0 shadow-lg w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
              <CardDescription>
                We have sent you a password reset link. Please check your email and follow the instructions.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                to="/auth/login"
                className="hover:text-primary underline underline-offset-4"
              >
                Back to login
              </Link>
            </CardFooter>
          </Card>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-lg flex flex-col items-center space-y-6">
        <Card className="border-0 shadow-lg w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Reset your password</CardTitle>
            <CardDescription>
              Enter your email address and we'll send you a link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending reset link...' : 'Send reset link'}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              Remember your password?{' '}
              <Link
                to="/auth/login"
                className="hover:text-primary underline underline-offset-4"
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
        >
          ← Back to Home
        </Link>
      </div>
    </AuthLayout>
  );
} 