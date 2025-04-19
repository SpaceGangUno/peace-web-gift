"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { sendFormEmail } from "@/lib/sendFormEmail";
import ProviderSection from "./referral/ProviderSection";
import ClientSection from "./referral/ClientSection";
import type { ReferralFormData } from "@/types/referral";

const formSchema = z.object({
  referringProvider: z.string().min(1, "Referring provider is required"),
  referralContact: z.string().min(1, "Contact number is required"),
  referralEmail: z.string().email("Invalid email address"),
  clientName: z.string().min(1, "Client name is required"),
  clientNumber: z.string().min(1, "Client number is required"),
  clientEmail: z.string().email("Invalid email address"),
  clientDOB: z.string().min(1, "Date of birth is required"),
  clientGender: z.string().min(1, "Gender is required"),
  clientState: z.string().min(1, "State is required"),
  insuranceInfo: z.string().min(1, "Insurance information is required"),
  referralPurpose: z.string().min(1, "Purpose of referral is required"),
});

const ReferralForm = () => {
  const form = useForm<ReferralFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referringProvider: "",
      referralContact: "",
      referralEmail: "",
      clientName: "",
      clientNumber: "",
      clientEmail: "",
      clientDOB: "",
      clientGender: "",
      clientState: "",
      insuranceInfo: "",
      referralPurpose: "",
    },
  });

  const onSubmit = async (data: ReferralFormData) => {
    try {
      await sendFormEmail(data, 'referral');
      console.log("Form submitted:", data);
      toast.success("Referral form submitted successfully! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to submit referral. Please try again.");
    }
  };

  return (
    <PageLayout>
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-bookmania text-3xl md:text-4xl text-noir-vigne mb-4">Professional Referral Form</h1>
            <div className="mb-6 flex justify-center">
              <img 
                src="/lovable-uploads/d88841e0-4a57-4364-87af-91cbdd1142cf.png" 
                alt="The Gift of Peace" 
                className="h-16" 
              />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Gift of Peace Counseling & Wellness, PLLC<br />
              P: (980) 216-6978<br />
              E: admin@thegiftofpeace.org
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <ProviderSection form={form} />
                <div className="border-t border-muted pt-6">
                  <ClientSection form={form} />
                </div>
                <div className="pt-4 flex justify-center">
                  <Button type="submit" variant="gold" size="lg" className="w-full max-w-md">
                    Submit Referral
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>All information provided is confidential and protected under HIPAA.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ReferralForm;
