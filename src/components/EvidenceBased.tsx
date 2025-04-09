
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EvidenceBased = () => {
  const practices = [
    {
      name: "Psychodynamic Therapy",
      description:
        "Psychodynamic therapy is based on the idea that our past experiences, especially those from our early childhood, have a significant impact on our present behavior, thoughts, and emotional patterns. In simpler terms, psychodynamic therapy helps people dig deep into their past to better understand why they think and act the way they do today to work through any emotional issues and improve their overall mental health.",
      image: "/lovable-uploads/3d4db493-ae96-4b9b-8c69-1f2d8da78c89.png",
    },
    {
      name: "Cognitive Behavioral Therapy",
      description:
        "CBT focuses on identifying negative thinking patterns and teaching practical skills to cope with everyday challenges more effectively. The goal is to help individuals develop healthier thinking habits, improve emotional regulation, and engage in more constructive behaviors, leading to a better overall quality of life.",
      image: "/lovable-uploads/10b860a6-a737-466f-a1aa-1ff1f9c5429b.png",
    },
    {
      name: "Emotion Focused Therapy",
      description:
        "EFT is based on the idea that unprocessed or unresolved emotions can lead to mental and emotional distress. EFT involves identifying emotional patterns, understanding their origins, and learning how to transform negative emotions into more adaptive ones. This therapeutic approach is particularly useful for individuals dealing with issues such as depression, anxiety, and relationship problems.",
      image: "/lovable-uploads/217a179e-6020-4251-bd91-348812ee99b2.png",
    },
    {
      name: "Mindfulness Techniques",
      description:
        "Mindfulness combines various therapeutic approaches that emphasize cultivating present-moment awareness, non-judgmental acceptance, and self-compassion. These practices help individuals develop a deeper understanding of their thoughts, emotions, and physical sensations, and teach them to respond to life's challenges with a more balanced and focused mindset.",
      image: "/lovable-uploads/af4f5b72-1ce8-4ee0-85f6-94ba223d8166.png",
    },
    {
      name: "Acceptance and Commitment Therapy",
      description:
        "ACT helps individuals accept difficult feelings while committing to behaviors that improve and enrich life. It combines mindfulness skills with the practice of self-acceptance, helping you develop a psychological flexibility that allows you to better connect with the present moment and take action based on your values.",
    },
  ];

  return (
    <section id="evidence-based" className="section bg-[#f2fce2]/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bookmania mb-4">
            Evidence-Based <span className="gold-text">Practices</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We utilize therapeutic approaches backed by scientific research to provide the most
            effective treatment for your specific needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto my-12 evidence-carousel">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {practices.map((practice, index) => (
                <CarouselItem key={index} className="md:basis-4/5">
                  <div className="p-1">
                    <Card className="border-wasabi/30 shadow-lg overflow-hidden h-full">
                      <div 
                        className="bg-gradient-to-br from-emerald-green/90 to-emerald-green/70 text-white p-8 rounded-lg h-full"
                        style={{
                          backgroundImage: practice.image ? `url(${practice.image})` : 'none',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundBlendMode: 'overlay'
                        }}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-2xl md:text-3xl text-creased-khaki">
                            {practice.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-white/90">{practice.description}</p>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="left-2 md:-left-10 bg-gold/80 hover:bg-gold text-noir-vigne border-none h-10 w-10"
            />
            <CarouselNext 
              className="right-2 md:-right-10 bg-gold/80 hover:bg-gold text-noir-vigne border-none h-10 w-10" 
            />
          </Carousel>
        </div>

        <div className="mt-12 p-6 bg-wasabi/10 rounded-lg max-w-3xl mx-auto border border-wasabi/20">
          <h3 className="font-bookmania text-xl mb-3 text-center text-emerald-green">Our Commitment to Quality Care</h3>
          <p className="text-center text-wasabi">
            We continuously stay updated on the latest research and best practices 
            in mental health treatment. Our therapeutic approaches are tailored to your 
            individual needs while being grounded in methods proven to be effective.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EvidenceBased;
