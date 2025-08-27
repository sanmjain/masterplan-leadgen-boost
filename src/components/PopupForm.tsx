import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-gradient-hero rounded-lg border border-white/20 shadow-2xl max-w-md w-full animate-scale-in">
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-fitness-neon transition-colors"
        >
          <X size={24} />
        </button>

        <div className="relative z-10 p-8 text-white text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-fitness-orange/30 border border-fitness-orange rounded-full text-fitness-orange font-bold text-sm mb-6 shadow-glow animate-pulse">
            ⚡ WAIT! Don't Miss Out!
          </div>

          <h3 className="text-2xl font-bold mb-4 leading-tight">
            Last Chance to Join the <span className="text-fitness-neon">Transformation</span>
          </h3>

          <p className="text-gray-200 mb-6">
            Only <span className="text-fitness-orange font-bold">3 spots left</span> this month! 
            Secure your transformation now before it's too late.
          </p>

          {/* Popup Form */}
          <form method="post" action="https://systeme.io/embedded/32634344/subscription" className="space-y-4">
            <div>
              <Label htmlFor="popup-surname" className="sr-only">Full Name</Label>
              <input
                type="text"
                name="surname"
                id="popup-surname"
                placeholder="Your Full Name"
                required
                className="w-full h-12 bg-white/20 border border-white/30 text-white placeholder:text-gray-300 rounded-md px-3"
              />
            </div>
            <div>
              <Label htmlFor="popup-email" className="sr-only">Email</Label>
              <input
                type="email"
                name="email"
                id="popup-email"
                placeholder="Your Email Address"
                required
                className="w-full h-12 bg-white/20 border border-white/30 text-white placeholder:text-gray-300 rounded-md px-3"
              />
            </div>
            <div>
              <Label htmlFor="popup-phone" className="sr-only">Phone</Label>
              <input
                type="tel"
                name="phone_number"
                id="popup-phone"
                placeholder="Your Phone Number"
                required
                className="w-full h-12 bg-white/20 border border-white/30 text-white placeholder:text-gray-300 rounded-md px-3"
              />
            </div>
            
            <div className="f-row">
              <button 
                type="submit"
                className="w-full h-12 font-bold bg-gradient-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105 rounded-md text-white btn"
              >
                🔥 CLAIM MY SPOT NOW!
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-400 mt-4">
            Limited time offer. Act now or lose your chance forever!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;