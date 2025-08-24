import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How far in advance should I book my move?",
      answer: "We recommend booking your move at least 2-4 weeks in advance, especially during peak moving season (May-September). However, we can often accommodate last-minute moves based on availability."
    },
    {
      question: "What's included in your moving services?",
      answer: "Our full-service moves include professional packing, loading, transportation, unloading, and unpacking. We provide all necessary equipment, packing materials, and protective coverings. Additional services like storage and specialty item handling are available."
    },
    {
      question: "How do you calculate moving costs?",
      answer: "Moving costs depend on several factors: distance, size of your home, amount of belongings, services requested, and timing. We provide free, detailed estimates with no hidden fees. Local moves are typically charged hourly, while long-distance moves are based on weight and distance."
    },
    {
      question: "Are my belongings insured during the move?",
      answer: "Yes, all moves include basic liability coverage. We also offer additional full-value protection insurance for complete peace of mind. Our team will explain all insurance options during your free consultation."
    },
    {
      question: "What should I do to prepare for moving day?",
      answer: "We'll provide a detailed moving checklist, but key preparations include: confirming logistics, preparing an essentials box, ensuring clear pathways, and being present during the move. Our team handles the heavy lifting – you just need to be ready!"
    },
    {
      question: "Do you provide packing materials?",
      answer: "Yes, we provide all necessary packing materials including boxes, tape, bubble wrap, packing paper, and protective blankets. High-quality materials are included in our service packages, ensuring your belongings are properly protected."
    },
    {
      question: "Can you move specialty items like pianos or artwork?",
      answer: "Absolutely! We specialize in moving delicate and valuable items including pianos, artwork, antiques, and electronics. Our team has specialized equipment and training for handling these items safely."
    },
    {
      question: "What happens if there are delays?",
      answer: "While rare, if delays occur due to weather or unforeseen circumstances, we'll keep you informed every step of the way. We have contingency plans in place and will work with you to minimize any inconvenience."
    },
    {
      question: "Do you offer storage solutions?",
      answer: "Yes, we offer both short-term and long-term storage in our secure, climate-controlled facilities. Perfect for when your new home isn't ready or you need to downsize temporarily."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, and all major credit cards. Payment is typically due upon completion of services, though we can discuss payment arrangements for large moves during your consultation."
    }
  ];

  const tips = [
    {
      title: "Start Early",
      description: "Begin planning your move 8 weeks before your moving date"
    },
    {
      title: "Declutter First", 
      description: "Donate or sell items you don't need to reduce moving costs"
    },
    {
      title: "Label Everything",
      description: "Clear labeling helps movers place boxes in correct rooms"
    },
    {
      title: "Pack Essentials",
      description: "Keep important items and first-day necessities with you"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our moving services. 
            Can't find what you're looking for? Contact us directly!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 shadow-soft hover:shadow-primary transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Tips */}
            <div className="bg-secondary/20 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Moving Tips</h3>
              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-primary">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-center">
              <MessageCircle className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-foreground mb-2">Still Have Questions?</h3>
              <p className="text-primary-foreground/90 mb-6 text-sm">
                Our moving experts are here to help you plan the perfect move.
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                Contact Us Now
              </Button>
            </div>

            {/* Free Quote CTA */}
            <div className="border-2 border-accent rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Get Your Free Quote</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Detailed estimate with no hidden fees
              </p>
              <Button variant="accent" size="lg" className="w-full">
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;