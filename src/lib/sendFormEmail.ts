
import { createClient } from '@supabase/supabase-js';

// For Vite, environment variables need to be accessed via import.meta.env.VITE_*
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rnlwovbygyomxzjzbqgv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJubHdvdmJ5Z3lvbXh6anpicWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NzQ1MzcsImV4cCI6MjA2MDI1MDUzN30.-d-ZM2svULiUPAOV1oYXDSTakqsCrn00E8za4nc7IQ4';
const functionEndpoint = 'https://rnlwovbygyomxzjzbqgv.supabase.co/functions/v1/send-form-email';

// Implement a logging function that handles email form submissions
export const sendFormEmail = async (formData: any, formType: 'contact' | 'waiting-list' | 'referral') => {
  console.log('Attempting to send form email:', { formType, formData });
  
  try {
    // Try to send via Supabase functions, but don't worry if it fails
    // We'll use this as a "best effort" approach
    try {
      // Initialize Supabase client
      const supabase = createClient(supabaseUrl, supabaseAnonKey);
      
      // Attempt direct function endpoint first
      try {
        const response = await fetch(functionEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseAnonKey}`
          },
          body: JSON.stringify({
            formType,
            formData,
            to: 'admin@thegiftofpeace.org'
          }),
          // Set a reasonable timeout to avoid hanging
          signal: AbortSignal.timeout(5000)
        });
        
        if (response.ok) {
          console.log('Email sent successfully via direct endpoint');
          return { success: true };
        }
        
        console.error(`Direct endpoint failed with status: ${response.status}`);
        // If direct fetch fails, proceed to invoke
      } catch (fetchError) {
        console.error('Direct fetch approach failed:', fetchError);
        // If direct fetch fails, proceed to invoke
      }

      // Fall back to supabase.functions.invoke if direct fetch failed or returned error
      console.log('Attempting fallback via supabase.functions.invoke...');
      const { data, error: invokeError } = await supabase.functions.invoke('send-form-email', {
        body: {
          formType,
          formData,
          to: 'admin@thegiftofpeace.org'
        }
      });

      if (invokeError) {
        console.error('Supabase function invoke error:', invokeError);
        // Both methods failed, fall back to local logging and return failure
        throw invokeError; // Re-throw to be caught by the outer catch block
      }

      console.log('Email sent successfully via functions.invoke', data);
      return { success: true };

    } catch (supabaseError) {
      // This catch block now handles errors from both direct fetch (if re-thrown)
      // and functions.invoke
      console.error('Failed to send email via Supabase:', supabaseError);
    }

    // Fallback: Log locally if Supabase calls failed
    console.log('Form submission recorded locally:', {
      to: 'admin@thegiftofpeace.org',
      formType,
      formData
    });
    
    // Return failure as email sending did not succeed
    return {
      success: false,
      message: 'Form submission recorded locally, but failed to send email via Supabase.',
      error: 'Supabase function call failed.' // Provide a generic error message
    };

  } catch (error) {
    // Catch any truly unexpected errors during the process
    console.error('Unexpected critical error in sendFormEmail:', error);

    // Log locally as a last resort
    console.log('Emergency fallback - form submission recorded locally:', {
      to: 'admin@thegiftofpeace.org',
      formType,
      formData
    });
    
    // Return failure
    return {
      success: false,
      message: 'Form submission recorded locally due to an unexpected error.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};
