-- Add email column to profiles table
ALTER TABLE profiles ADD COLUMN email TEXT;

-- Update existing profiles with email from auth.users
UPDATE profiles 
SET email = users.email
FROM auth.users
WHERE profiles.id = users.id;

-- Make email column NOT NULL after populating data
ALTER TABLE profiles ALTER COLUMN email SET NOT NULL;

-- Update the handle_new_user trigger to include email
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, role, full_name, email)
  VALUES (
    new.id,
    'student',
    new.raw_user_meta_data->>'full_name',
    new.email
  );
  RETURN new;
END;
$$; 