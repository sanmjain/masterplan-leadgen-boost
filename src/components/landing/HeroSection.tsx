import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to claim your spot.",
        variant: "destructive",
      });
      return;
    }

    console.log("Lead captured:", formData);
    toast({
      title: "Success!",
      description: "Your spot is reserved! We'll contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        {/* Urgency Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-fitness-neon/20 border border-fitness-neon rounded-full text-fitness-neon font-medium text-sm mb-6 shadow-glow">
          ⚡ LIMITED TIME OFFER - Only 15 Spots Available
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 leading-tight">
          Transform Your Body in{" "}
          <span className="text-fitness-neon shadow-glow">30 Days</span>
          <br />
          With Elite Personal Training
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Get personalized workouts, nutrition guidance, and guaranteed results. 
          <span className="text-fitness-orange font-semibold"> Join 500+ clients who achieved their dream physique</span>
        </p>

        {/* Lead Capture Form */}
        <div className="max-w-md mx-auto mb-8">
          <form method="post" action="https://systeme.io/embedded/32634344/subscription" className="space-y-4">
            <div>
              <Label htmlFor="surname" className="sr-only">Full Name</Label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Your Full Name"
                required
                className="w-full h-12 text-center bg-white/10 border border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm rounded-md px-3"
              />
            </div>
            <div>
              <Label htmlFor="email" className="sr-only">Email</Label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                required
                className="w-full h-12 text-center bg-white/10 border border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm rounded-md px-3"
              />
            </div>
            <div>
              <Label htmlFor="phone_number" className="sr-only">Phone</Label>
              <input
                type="tel"
                name="phone_number"
                id="phone_number"
                placeholder="Your Phone Number"
                required
                className="w-full h-12 text-center bg-white/10 border border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm rounded-md px-3"
              />
            </div>
            <div className="f-row">
              <button 
                type="submit"
                className="w-full h-14 text-lg font-bold bg-gradient-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105 rounded-md text-white btn"
              >
                🔥 CLAIM YOUR TRANSFORMATION SPOT
              </button>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="text-sm text-gray-300 space-y-2">
          <p>✅ No commitment required • ✅ 100% satisfaction guarantee</p>
          <p>⏰ <span className="text-fitness-orange font-semibold">Offer expires in 72 hours</span></p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;