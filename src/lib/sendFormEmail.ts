
const functionEndpoint = 'https://rnlwovbygyomxzjzbqgv.supabase.co/functions/v1/resend-contact-ts';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ReferralFormData {
  referringProvider: string;
  referralContact: string;
  referralEmail: string;
  clientName: string;
  clientNumber: string;
  clientEmail: string;
  clientDOB: string;
  clientGender: string;
  clientState: string;
  insuranceInfo: string;
  referralPurpose: string;
  [key: string]: string;
}

interface WaitingListFormData {
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
  concerns: string;
  insurance: string;
  hasInsurance: string;
  region: string;
  [key: string]: string;
}

type FormData = ContactFormData | ReferralFormData | WaitingListFormData;

export const sendFormEmail = async (
  formData: FormData,
  formType: 'contact' | 'waiting-list' | 'referral' = 'contact'
) => {
  try {
    console.log("Sending this to Edge Function:", formData);
    
    const response = await fetch(functionEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        formType,
        formData 
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message };
    } else {
      const error = await response.text();
      return { success: false, message: error };
    }
  } catch (err: any) {
    console.error("sendFormEmail error:", err);
    return {
      success: false,
      message: err?.message || 'Unexpected error occurred while sending form.',
    };
  }
};
