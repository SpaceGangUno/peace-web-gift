
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormData {
  formType: 'contact' | 'waiting-list' | 'referral';
  formData: any;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, formData }: FormData = await req.json();
    let emailContent;
    let subject;

    // Format email content based on form type
    switch (formType) {
      case 'contact':
        subject = 'New Contact Form Submission';
        emailContent = `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        `;
        break;
        
      case 'waiting-list':
        subject = 'New Waiting List Submission';
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
        
      case 'referral':
        subject = 'New Professional Referral';
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
    }

    const emailResponse = await resend.emails.send({
      from: "The Gift of Peace <admin@thegiftofpeace.org>",
      to: ["admin@thegiftofpeace.org"],
      subject: subject,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in resend-contact function:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
