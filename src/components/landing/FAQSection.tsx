import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the 30-day program?",
    answer: "You get personalized workout plans, complete nutrition guidance, meal plans, 24/7 support access, progress tracking, and weekly check-ins with your dedicated trainer. Everything you need to transform your body in 30 days."
  },
  {
    question: "How much does the program cost?",
    answer: "Our limited-time offer is $297 for the complete 30-day transformation program (regularly $597). This includes everything mentioned above - no hidden fees or upsells. Payment plans are available."
  },
  {
    question: "What if I don't see results?",
    answer: "We're so confident in our program that we offer a 100% money-back guarantee. If you don't see significant results within 30 days following our program exactly as designed, we'll refund every penny."
  },
  {
    question: "Do I need gym experience?",
    answer: "Absolutely not! Our program is designed for all fitness levels. Whether you're a complete beginner or have some experience, we'll customize everything to match your current abilities and goals."
  },
  {
    question: "How often do I need to work out?",
    answer: "The program includes 4-5 workouts per week, each lasting 45-60 minutes. We design flexible schedules that work with your lifestyle - morning, lunch, or evening sessions available."
  },
  {
    question: "Is nutrition coaching included?",
    answer: "Yes! You'll receive complete meal plans, grocery lists, and nutrition coaching. We'll teach you exactly what to eat, when to eat it, and how to prepare meals that support your transformation goals."
  },
  {
    question: "Where are the training sessions held?",
    answer: "Sessions are held at our premium downtown location with state-of-the-art equipment. We also offer some virtual coaching options for flexibility, but in-person training produces the best results."
  },
  {
    question: "What makes this different from other programs?",
    answer: "Our program combines personalized training, nutrition coaching, and lifestyle guidance in one comprehensive package. Plus, you get 24/7 access to your trainer and our proven system that's helped 500+ clients succeed."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Here's everything you need to know 
            about our transformation program.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-fitness-neon transition-colors py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-sm max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-primary mb-3">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-4">
            We're here to help! Fill out the form above and we'll answer any questions 
            you have during your free consultation call.
          </p>
          <div className="text-sm text-fitness-neon font-medium">
            📞 Get personalized answers in 15 minutes or less
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;