
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What can I expect during the first session?",
      answer: "Your first session is an opportunity for us to get to know each other. We'll discuss what brings you to therapy, your background, goals for treatment, and any questions you might have. This session helps determine if we're a good fit for working together and allows us to develop an initial treatment plan."
    },
    {
      question: "How long does therapy typically last?",
      answer: "The duration of therapy varies widely depending on your specific needs and goals. Some clients benefit from short-term therapy (8-12 sessions) focused on specific issues, while others prefer longer-term support for more complex concerns. We'll regularly review your progress and adjust the treatment plan accordingly."
    },
    {
      question: "Is everything I share confidential?",
      answer: "Confidentiality is a cornerstone of therapy. What you share remains private with a few exceptions: if there is imminent risk of harm to yourself or others, suspected abuse of children or vulnerable adults, or in rare cases when records are court-ordered. These limitations to confidentiality will be discussed in detail during your first session."
    },
    {
      question: "What's the difference between a therapist and a psychiatrist?",
      answer: "Therapists focus on providing talk therapy and behavioral interventions to address mental health concerns. Psychiatrists are medical doctors who can prescribe medication. While we don't prescribe medication, we can coordinate care with your psychiatrist or help you find one if medication might be beneficial as part of your treatment plan."
    },
    {
      question: "Do you offer virtual sessions?",
      answer: "Yes, we offer secure video therapy sessions for clients within our licensed practice states. Virtual therapy provides the same quality care as in-person sessions with the added convenience of attending from your home or other private location."
    },
    {
      question: "What if I need to cancel an appointment?",
      answer: "We understand that situations arise that may prevent you from keeping your appointment. We require 24 hours notice for cancellations to avoid a cancellation fee. You can cancel or reschedule by phone, email, or through our client portal."
    }
  ];

  return (
    <section id="faq" className="section bg-white py-12 sm:py-16 md:py-24">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bookmania mb-4">
              Frequently Asked <span className="gold-text">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-bookmania py-4 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base">
              Have a question that isn't answered here? Feel free to reach out in the contact section below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
