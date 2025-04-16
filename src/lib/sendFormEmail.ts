import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rnlwovbygyomxzjzbqgv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key-here';
const functionEndpoint = 'https://rnlwovbygyomxzjzbqgv.supabase.co/functions/v1/resend-contact-ts';

export const sendFormEmail = async (
  formData: any,
  formType: 'contact' | 'waiting-list' | 'referral'
) => {
  console.log('Attempting to send form email:', { formType, formData });

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const response = await fetch(functionEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${supabaseAnonKey}`
      },
      body: JSON.stringify({ formType, formData }),
      signal: AbortSignal.timeout(5000)
    });

    if (response.ok) {
      console.log('Email sent successfully via edge function');
      return { success: true };
    } else {
      const errorText = await response.text();
      console.error('Failed to send email:', errorText);
      return {
        success: false,
        message: `Email failed with status ${response.status}`,
        error: errorText
      };
    }
  } catch (error) {
    console.error('Unexpected critical error in sendFormEmail:', error);
    return {
      success: false,
      message: 'Unexpected error occurred while trying to send form email.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};
