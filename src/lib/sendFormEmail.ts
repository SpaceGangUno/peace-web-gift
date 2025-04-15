
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const sendFormEmail = async (formData: any, formType: 'contact' | 'waiting-list' | 'referral') => {
  try {
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
