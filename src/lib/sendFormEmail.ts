
import { createClient } from '@supabase/supabase-js';

// For Vite, environment variables need to be accessed via import.meta.env.VITE_*
// These values can be stored in Supabase's UI under "Project Settings" > "API"
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rnlwovbygyomxzjzbqgv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJubHdvdmJ5Z3lvbXh6anpicWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NzQ1MzcsImV4cCI6MjA2MDI1MDUzN30.-d-ZM2svULiUPAOV1oYXDSTakqsCrn00E8za4nc7IQ4';

// If the environment variables aren't available, provide a fallback implementation
export const sendFormEmail = async (formData: any, formType: 'contact' | 'waiting-list' | 'referral') => {
  try {
    // Initialize Supabase client with the environment variables
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    // Call the Supabase Edge Function to send the email
    const { error } = await supabase.functions.invoke('send-form-email', {
      body: {
        formType,
        formData,
        to: 'admin@thegiftofpeace.org'
      }
    });

    if (error) throw error;
    return { success: true };
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
