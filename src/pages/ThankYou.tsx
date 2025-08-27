import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    // Add confetti or celebration animation here if needed
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
        {/* Success Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-fitness-neon/30 border border-fitness-neon rounded-full text-fitness-neon font-bold text-lg mb-8 shadow-glow">
          ✅ SUCCESS! Your Spot is Reserved
        </div>

        {/* Main Message */}
        <h1 className="mb-6 leading-tight">
          Thank You for Taking Action!
        </h1>

        <div className="space-y-6 mb-8">
          <p className="text-xl text-gray-200">
            🎉 <span className="text-fitness-neon font-semibold">Congratulations!</span> You've just secured your spot in our exclusive 30-day transformation program.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-fitness-orange font-bold text-lg mb-4">What Happens Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <span className="text-fitness-neon font-bold">1.</span>
                <span>Our team will contact you within <strong>2 hours</strong> to schedule your free consultation</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-fitness-neon font-bold">2.</span>
                <span>We'll create your <strong>personalized transformation plan</strong></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-fitness-neon font-bold">3.</span>
                <span>You'll start seeing results in just <strong>14 days!</strong></span>
              </div>
            </div>
          </div>

          <p className="text-gray-300">
            📱 Keep your phone handy - we'll be calling you soon to get started on your transformation journey!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button 
            onClick={() => window.location.href = '/'}
            size="lg"
            className="bg-gradient-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Return to Home
          </Button>
          
          <p className="text-sm text-gray-400">
            Questions? Contact us immediately at{" "}
            <a href="tel:+1234567890" className="text-fitness-neon hover:underline">
              (123) 456-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;