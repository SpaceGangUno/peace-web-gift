const functionEndpoint = 'https://rnlwovbygyomxzjzbqgv.supabase.co/functions/v1/resend-contact-ts';

export const sendFormEmail = async (
  formData: {
    name: string;
    email: string;
    phone?: string;
    message: string;
  },
  formType: 'contact' | 'waiting-list' | 'referral'
) => {
  try {
    const response = await fetch(functionEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData, formType }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message };
    } else {
      const error = await response.text();
      return { success: false, message: error };
    }
  } catch (err: any) {
    return {
      success: false,
      message: err?.message || 'Unexpected error occurred while sending form.',
    };
  }
};
