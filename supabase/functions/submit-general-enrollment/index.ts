
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    // Parse request body
    const enrollmentData = await req.json()
    
    console.log('Received general enrollment data:', enrollmentData)

    // Validate required fields
    const requiredFields = ['student_name', 'grade', 'parent_name', 'phone', 'email', 'package', 'address']
    for (const field of requiredFields) {
      if (!enrollmentData[field]) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }
    }

    // Insert enrollment data into the enrollments table
    const { data, error } = await supabase
      .from('enrollments')
      .insert([enrollmentData])
      .select()

    if (error) {
      console.error('Error inserting enrollment:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to submit enrollment' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log('Successfully inserted enrollment:', data)

    // Send welcome email
    try {
      const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: {
          email: enrollmentData.email,
          student_name: enrollmentData.student_name,
          parent_name: enrollmentData.parent_name,
          package: enrollmentData.package
        }
      });

      if (emailError) {
        console.error('Error sending welcome email:', emailError);
        // Don't fail the enrollment if email fails
      } else {
        console.log('Welcome email sent successfully');
      }
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the enrollment if email fails
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
