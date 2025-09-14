import { supabase } from "@/integrations/supabase/client";

const functionName = 'resend-contact-ts';

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
}

type FormData = ContactFormData | ReferralFormData | WaitingListFormData;

export const sendFormEmail = async (
  formData: FormData,
  formType: 'contact' | 'waiting-list' | 'referral' = 'contact'
) => {
  try {
    console.log("Sending this to Edge Function:", { formType, formData });

    const { data, error } = await supabase.functions.invoke(functionName, {
      body: { formType, formData },
    });

    if (!error) {
      return { success: true, message: (data as any)?.message ?? 'Submitted successfully' };
    }

    // Supabase functions may return structured errors
    return { success: false, message: (error as any)?.message || 'Function invocation failed' };
  } catch (err: any) {
    console.error("sendFormEmail error:", err);
    return {
      success: false,
      message: err?.message || 'Unexpected error occurred while sending form.',
    };
  }
};
