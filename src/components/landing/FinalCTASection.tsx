import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to secure your spot.",
        variant: "destructive",
      });
      return;
    }

    console.log("Final CTA lead captured:", formData);
    toast({
      title: "Congratulations!",
      description: "Your transformation spot is secured! Expect our call within 2 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", preferredTime: "" });
  };

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Final Urgency Message */}
          <div className="inline-flex items-center px-6 py-3 bg-fitness-orange/30 border border-fitness-orange rounded-full text-fitness-orange font-bold text-sm mb-8 shadow-glow animate-pulse">
            🔥 LAST CHANCE - Don't Let This Opportunity Pass You By!
          </div>

          <h2 className="mb-6 leading-tight">
            Ready to <span className="text-fitness-neon">Transform Your Life</span>?
          </h2>

          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join the hundreds of success stories who took action today. 
            Your dream body is just <span className="text-fitness-orange font-bold">30 days away</span>.
          </p>

          {/* Benefits Reminder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold text-fitness-neon mb-1">Personalized Plan</div>
              <div className="text-sm text-gray-300">Custom workouts & nutrition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-fitness-neon mb-1">Fast Results</div>
              <div className="text-sm text-gray-300">Visible changes in 2 weeks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💯</div>
              <div className="font-semibold text-fitness-neon mb-1">100% Guarantee</div>
              <div className="text-sm text-gray-300">Money back if not satisfied</div>
            </div>
          </div>

          {/* Final Form */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-md mx-auto mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-fitness-neon">
                Secure Your Spot Now - FREE Consultation
              </h3>
              
              <form method="post" action="https://systeme.io/embedded/32634344/subscription" className="space-y-4">
                <div>
                  <Label htmlFor="final-surname" className="sr-only">Full Name</Label>
                  <input
                    type="text"
                    name="surname"
                    id="final-surname"
                    placeholder="Your Full Name *"
                    required
                    className="w-full h-12 bg-white/20 border border-white/30 text-white placeholder:text-gray-300 rounded-md px-3"
                  />
                </div>
                <div>
                  <Label htmlFor="final-email" className="sr-only">Email</Label>
                  <input
                    type="email"
                    name="email"
                    id="final-email"
                    placeholder="Your Email Address *"
                    required
                    className="w-full h-12 bg-white/20 border border-white/30 text-white placeholder:text-gray-300 rounded-md px-3"
                  />
                </div>
                <div>
                  <Label htmlFor="final-phone" className="sr-only">Phone</Label>
                  <input
                    type="tel"
                    name="phone_number"
                    id="final-phone"
                    placeholder="Your Phone Number *"
                    required
                    className="w-full h-12 bg-white/20 border border-white/30 text-white placeholder:text-gray-300 rounded-md px-3"
                  />
                </div>
                
                <div className="f-row">
                  <button 
                    type="submit"
                    className="w-full h-14 text-lg font-bold bg-gradient-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105 rounded-md text-white btn"
                  >
                    🚀 YES! START MY TRANSFORMATION
                  </button>
                </div>
              </form>
              
              <p className="text-xs text-gray-400 mt-4">
                * By submitting, you agree to receive calls/texts about our program. 
                No spam, unsubscribe anytime.
              </p>
            </CardContent>
          </Card>

          {/* Final Trust Signals */}
          <div className="text-center space-y-2 text-sm text-gray-300">
            <p>✅ 30-Day Money Back Guarantee • ✅ 500+ Success Stories • ✅ Expert Certified Trainers</p>
            <p className="text-fitness-orange font-semibold">
              ⏰ This offer expires when we reach 15 clients this month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;