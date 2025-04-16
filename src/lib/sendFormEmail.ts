
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rnlwovbygyomxzjzbqgv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJubHdvdmJ5Z3lvbXh6anpicWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NzQ1MzcsImV4cCI6MjA2MDI1MDUzN30.-d-ZM2svULiUPAOV1oYXDSTakqsCrn00E8za4nc7IQ4';
const functionEndpoint = 'https://rnlwovbygyomxzjzbqgv.supabase.co/functions/v1/send-form-email';

export const sendFormEmail = async (formData: any, formType: 'contact' | 'waiting-list' | 'referral') => {
  console.log('Attempting to send form email:', { formType, formData });
  
  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    // First attempt: direct endpoint
    try {
      const response = await fetch(functionEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`
        },
        body: JSON.stringify({
          formType,
          formData
        }),
        signal: AbortSignal.timeout(5000)
      });
      
      if (response.ok) {
        console.log('Email sent successfully via direct endpoint');
        return { success: true };
      }
      
      console.error(`Direct endpoint failed with status: ${response.status}`);
    } catch (fetchError) {
      console.error('Direct fetch approach failed:', fetchError);
    }

    // Fallback: supabase.functions.invoke
    console.log('Attempting fallback via supabase.functions.invoke...');
    const { data, error: invokeError } = await supabase.functions.invoke('send-form-email', {
      body: {
        formType,
        formData
      }
    });

    if (invokeError) {
      console.error('Supabase function invoke error:', invokeError);
      throw invokeError;
    }

    console.log('Email sent successfully via functions.invoke', data);
    return { success: true };

  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

