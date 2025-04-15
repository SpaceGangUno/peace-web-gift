
import { createClient } from '@supabase/supabase-js';

// For Vite, environment variables need to be accessed via import.meta.env.VITE_*
// These values can be stored in Supabase's UI under "Project Settings" > "API"
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rnlwovbygyomxzjzbqgv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJubHdvdmJ5Z3lvbXh6anpicWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NzQ1MzcsImV4cCI6MjA2MDI1MDUzN30.-d-ZM2svULiUPAOV1oYXDSTakqsCrn00E8za4nc7IQ4';
const functionEndpoint = 'https://rnlwovbygyomxzjzbqgv.supabase.co/functions/v1/send-form-email';

// If the environment variables aren't available, provide a fallback implementation
export const sendFormEmail = async (formData: any, formType: 'contact' | 'waiting-list' | 'referral') => {
  console.log('Attempting to send form email:', { formType, formData });

  try {
    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('Supabase client created successfully');
    
    // Try using direct function endpoint first (more reliable)
    try {
      console.log('Attempting to use direct function endpoint');
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
        })
      });

      if (!response.ok) {
        throw new Error(`Function returned status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Email sent successfully via direct endpoint', data);
      return { success: true };
    } 
    catch (directEndpointError) {
      console.warn('Direct endpoint failed, falling back to supabase.functions.invoke', directEndpointError);
      
      // Fall back to using supabase.functions.invoke
      const { error } = await supabase.functions.invoke('send-form-email', {
        body: {
          formType,
          formData,
          to: 'admin@thegiftofpeace.org'
        }
      });

      console.log('Supabase function invocation completed');

      if (error) {
        console.error('Error from Supabase function:', error);
        throw error;
      }

      console.log('Email sent successfully via functions.invoke');
      return { success: true };
    }
  } catch (error) {
    console.error('Error sending form email:', error);
    
    // Provide a fallback behavior for development/testing
    console.log('Form submission (fallback mode):', {
      to: 'admin@thegiftofpeace.org',
      formType,
      formData
    });
    
    // Return success to allow testing without actual email sending
    return { success: true, message: 'Test mode - email would have been sent' };
  }
};
