
-- Create a table for general enrollments (all packages)
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  student_name TEXT NOT NULL,
  grade TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  package TEXT NOT NULL,
  subjects TEXT,
  address TEXT NOT NULL,
  message TEXT
);

-- Add Row Level Security (RLS) - making it publicly readable for admin purposes
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert enrollments (for public form)
CREATE POLICY "Anyone can create enrollments" 
  ON public.enrollments 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows reading all enrollments (for admin)
CREATE POLICY "Anyone can view enrollments" 
  ON public.enrollments 
  FOR SELECT 
  USING (true);
