
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, student_name, parent_name, package: selectedPackage } = await req.json()
    
    console.log('Sending welcome email to:', email)

    // Email configuration (placeholder for user to fill)
    const gmailUser = "shivam7.hustler@gmail.com"
    const gmailPassword = "Sd@@0805" // This should be stored as a secret
    
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #3B82F6, #10B981); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to BrightStem Academy!</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #333; margin-top: 0;">Dear ${parent_name},</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            Thank you for choosing BrightStem Academy for ${student_name}'s educational journey! We're excited to help ${student_name} achieve academic excellence.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3B82F6;">
            <h3 style="color: #3B82F6; margin-top: 0;">Enrollment Details:</h3>
            <p style="margin: 5px 0;"><strong>Student:</strong> ${student_name}</p>
            <p style="margin: 5px 0;"><strong>Package:</strong> ${selectedPackage}</p>
          </div>
          
          <h3 style="color: #333;">What's Next?</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>Our team will contact you within 24 hours to schedule a free consultation</li>
            <li>We'll assess ${student_name}'s learning needs and customize the program</li>
            <li>You'll receive access to our ParentSync platform for progress tracking</li>
            <li>Our certified IIT/NIT mentors will begin the personalized learning journey</li>
          </ul>
          
          <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1976d2; font-weight: bold;">
              📞 Have questions? Call us at +91 94546 84161
            </p>
          </div>
          
          <p style="color: #666; margin-bottom: 30px;">
            We're committed to providing the best learning experience for ${student_name}. 
            Our proven teaching methodologies and personalized attention ensure academic success.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <div style="background: linear-gradient(135deg, #3B82F6, #10B981); color: white; padding: 15px 30px; border-radius: 25px; display: inline-block; font-weight: bold;">
              Welcome to Academic Excellence!
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #999; font-size: 14px; text-align: center;">
            Best regards,<br>
            <strong>The BrightStem Academy Team</strong><br>
            IIT/NIT Mentors • Proven Teaching Methods • Academic Excellence
          </p>
        </div>
      </div>
    `

    // For now, we'll log the email content since we need to set up proper email service
    console.log('Email content prepared for:', email);
    console.log('Would send email with content:', emailContent);
    
    // TODO: Integrate with email service (Gmail SMTP, SendGrid, etc.)
    // This is a placeholder - in production, you would use a proper email service
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Welcome email prepared',
        emailPreview: emailContent.substring(0, 200) + '...'
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error preparing welcome email:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to prepare welcome email' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
