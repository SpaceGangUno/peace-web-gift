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
    const payload = {
      formData,
      formType
    };

    const response = await fetch(functionEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const res = await response.json();
      return { success: true, message: res.message };
    } else {
      const errorText = await response.text();
      console.error('Failed to send:', errorText);
      return { success: false, message: errorText };
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return {
      success: false,
      message: 'Unexpected error occurred while sending the form.'
    };
  }
};
