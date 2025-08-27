import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    age: 28,
    result: "Lost 25 lbs in 30 days",
    quote: "I never thought I could achieve results this fast! The personalized approach made all the difference. I feel stronger and more confident than ever.",
    initials: "SJ",
    rating: 5
  },
  {
    name: "Mike Rodriguez",
    age: 35,
    result: "Gained 15 lbs muscle",
    quote: "The nutrition guidance was a game-changer. I've tried other programs before, but this one actually works. My wife can't stop complimenting my new physique!",
    initials: "MR",
    rating: 5
  },
  {
    name: "Emma Chen",
    age: 24,
    result: "Transformed completely",
    quote: "From zero confidence to feeling like a fitness model! The 24/7 support kept me motivated even on tough days. Best investment I've ever made.",
    initials: "EC",
    rating: 5
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Trainer Profile */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32 border-4 border-fitness-neon shadow-glow">
                  <AvatarFallback className="text-2xl font-bold bg-gradient-accent text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                  Meet Your Lead Trainer
                </h2>
                <h3 className="text-xl text-fitness-neon font-semibold mb-4">
                  John Davis, NASM-CPT, CSCS
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With over 12 years of experience training elite athletes and everyday heroes, 
                  John has helped over 1,000 clients transform their bodies and lives. 
                  Certified by NASM and specializing in rapid transformation protocols.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-center mb-12 text-primary">
            Real Results from Real People
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-fitness-orange text-xl">⭐</span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <Avatar className="border-2 border-fitness-neon/20">
                      <AvatarFallback className="bg-gradient-accent text-white font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonial.name}, {testimonial.age}
                      </div>
                      <div className="text-sm text-fitness-neon font-medium">
                        {testimonial.result}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="text-center bg-white rounded-2xl shadow-card p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Join the Success Stories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "Average Weight Loss", value: "18 lbs" },
              { metric: "Muscle Gain", value: "12 lbs" },
              { metric: "Success Rate", value: "94%" },
              { metric: "Client Satisfaction", value: "4.9/5" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-fitness-orange mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;