
import { createClient } from '@supabase/supabase-js';

// For Vite, environment variables need to be accessed via import.meta.env.VITE_*
// These values can be stored in Supabase's UI under "Project Settings" > "API"
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rnlwovbygyomxzjzbqgv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// If the environment variables aren't available, provide a fallback implementation
export const sendFormEmail = async (formData: any, formType: 'contact' | 'waiting-list' | 'referral') => {
  try {
    if (!supabaseAnonKey) {
      console.error('Supabase API key missing. Please check your environment variables.');
      
      // Provide a fallback behavior for development/testing
      console.log('Form submission (fallback mode):', {
        to: 'admin@thegiftofpeace.org',
        formType,
        formData
      });
      
      // Return success to allow testing without actual email sending
      return { success: true, message: 'Test mode - email would have been sent' };
    }
    
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
    throw error;
  }
};
