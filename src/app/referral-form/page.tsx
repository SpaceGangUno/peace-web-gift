"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendFormEmail } from "@/lib/sendFormEmail";
import { ReferralFormData } from "@/types/referral";

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

type FormValues = z.infer<typeof formSchema>;

const ReferralFormPage = () => {
  const form = useForm<FormValues>({
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
            <h1 className="font-bookmania text-3xl md:text-4xl text-noir-vigne mb-4">Referral Form</h1>
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
                <div className="space-y-4">
                  <h2 className="font-bookmania text-xl text-noir-vigne">Referring Provider Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="referringProvider"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Referring Provider/Agency</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter provider or agency name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="referralContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Referral Contact Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(000) 000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="referralEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-muted">
                  <h2 className="font-bookmania text-xl text-noir-vigne">Client Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="clientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Client Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter client's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="clientNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Client Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter client's phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="clientEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter client's email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="clientDOB"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter client's date of birth" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="clientGender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter client's gender" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="clientState"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter client's state" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="insuranceInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Insurance Information</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter insurance information" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-4 pt-4 border-t border-muted">
                  <h2 className="font-bookmania text-xl text-noir-vigne">Referral Purpose</h2>
                  
                  <FormField
                    control={form.control}
                    name="referralPurpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Referral</FormLabel>
                        <FormDescription>
                          Please include type of counseling being sought, medication regimen, mental health treatment history, etc.
                        </FormDescription>
                        <FormControl>
                          <Textarea
                            placeholder="Enter purpose of referral..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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

export default ReferralFormPage;
