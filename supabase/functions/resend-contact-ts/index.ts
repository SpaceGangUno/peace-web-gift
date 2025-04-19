
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "npm:@supabase/supabase-js";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;

const resend = new Resend(RESEND_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormData {
  formType: "contact" | "waiting-list" | "referral";
  formData: any;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, formData }: FormData = await req.json();
    let emailContent = "";
    let subject = "";

    // Insert into Supabase tables first based on formType
    switch (formType) {
      case "contact":
        subject = "New Contact Form Submission";

        // Insert into contact_form_submissions table
        await supabase.from("contact_form_submissions").insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          created_at: new Date().toISOString(),
        });

        emailContent = `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        `;
        break;

      case "waiting-list":
        subject = "New Waiting List Submission";

        // Insert into waiting_list_submissions table
        await supabase.from("waiting_list_submissions").insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferred_contact: formData.preferredContact,
          concerns: formData.concerns,
          insurance: formData.insurance,
          has_insurance: formData.hasInsurance,
          region: formData.region,
          created_at: new Date().toISOString(),
        });

        emailContent = `
          <h1>New Waiting List Submission</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Preferred Contact:</strong> ${formData.preferredContact}</p>
          <p><strong>Region:</strong> ${formData.region}</p>
          <p><strong>Insurance:</strong> ${formData.insurance}</p>
          <p><strong>Has Insurance:</strong> ${formData.hasInsurance}</p>
          <p><strong>Concerns:</strong> ${formData.concerns}</p>
        `;
        break;

      case "referral":
        subject = "New Professional Referral";

        // Insert into professional_referrals table
        await supabase.from("professional_referrals").insert({
          referring_provider: formData.referringProvider,
          referral_contact: formData.referralContact,
          referral_email: formData.referralEmail,
          client_name: formData.clientName,
          client_number: formData.clientNumber,
          client_email: formData.clientEmail,
          client_dob: formData.clientDOB,
          client_gender: formData.clientGender,
          client_state: formData.clientState,
          insurance_info: formData.insuranceInfo,
          referral_purpose: formData.referralPurpose,
          created_at: new Date().toISOString(),
        });

        emailContent = `
          <h1>New Professional Referral</h1>
          <h2>Referring Provider Information</h2>
          <p><strong>Provider/Agency:</strong> ${formData.referringProvider}</p>
          <p><strong>Contact Number:</strong> ${formData.referralContact}</p>
          <p><strong>Email:</strong> ${formData.referralEmail}</p>
          
          <h2>Client Information</h2>
          <p><strong>Name:</strong> ${formData.clientName}</p>
          <p><strong>Contact Number:</strong> ${formData.clientNumber}</p>
          <p><strong>Email:</strong> ${formData.clientEmail}</p>
          <p><strong>DOB:</strong> ${formData.clientDOB}</p>
          <p><strong>Gender:</strong> ${formData.clientGender}</p>
          <p><strong>State:</strong> ${formData.clientState}</p>
          <p><strong>Insurance Info:</strong> ${formData.insuranceInfo}</p>
          <p><strong>Referral Purpose:</strong> ${formData.referralPurpose}</p>
        `;
        break;

      default:
        return new Response(
          JSON.stringify({
            success: false,
            message: "Unknown form type",
          }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
    }

    // Send email with resend after storing data
    const emailResponse = await resend.emails.send({
      from: "The Gift of Peace <admin@forms.thegiftofpeace.org>",
      to: ["admin@thegiftofpeace.org"],
      subject,
      html: emailContent,
    });

    console.log("Form data stored and email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Form submitted and email sent successfully" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in resend-contact function:", error);

    return new Response(
      JSON.stringify({ success: false, message: error?.message || "Internal Server Error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);

