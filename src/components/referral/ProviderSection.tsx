
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { ReferralFormData } from "@/types/referral";

interface ProviderSectionProps {
  form: UseFormReturn<ReferralFormData>;
}

const ProviderSection: React.FC<ProviderSectionProps> = ({ form }) => {
  return (
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
  );
};

export default ProviderSection;
