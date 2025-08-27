import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 71,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Warning Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-fitness-orange/20 border border-fitness-orange rounded-full text-fitness-orange font-bold text-sm mb-8 shadow-glow animate-pulse">
            🚨 URGENT: Limited Spots Remaining
          </div>

          <h2 className="mb-6 leading-tight">
            Only <span className="text-fitness-neon">5 Spots Left</span> for This Month
          </h2>

          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            We limit our program to just 15 clients per month to ensure maximum attention and results. 
            <span className="text-fitness-orange font-semibold"> Don't miss your chance to transform your life!</span>
          </p>

          {/* Countdown Timer */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm mb-8 max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-fitness-neon">
                Offer Expires In:
              </h3>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="bg-fitness-neon text-primary font-bold text-2xl md:text-3xl px-3 py-2 rounded-lg min-w-[60px]">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm mt-2 text-gray-300">Hours</div>
                </div>
                <div className="text-center">
                  <div className="bg-fitness-neon text-primary font-bold text-2xl md:text-3xl px-3 py-2 rounded-lg min-w-[60px]">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm mt-2 text-gray-300">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="bg-fitness-neon text-primary font-bold text-2xl md:text-3xl px-3 py-2 rounded-lg min-w-[60px]">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm mt-2 text-gray-300">Seconds</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scarcity Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <div className="text-sm text-gray-300">
                <span className="text-fitness-orange font-bold">Premium Location</span><br />
                Downtown Gym Access
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">👥</div>
              <div className="text-sm text-gray-300">
                <span className="text-fitness-orange font-bold">Small Groups Only</span><br />
                Max 4 People per Session
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-sm text-gray-300">
                <span className="text-fitness-orange font-bold">Elite Trainers</span><br />
                Top 1% Certified Pros
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToTop}
            size="lg"
            className="text-lg font-bold px-8 py-4 bg-gradient-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105 mb-6"
          >
            🔥 SECURE MY SPOT NOW - BEFORE IT'S GONE!
          </Button>

          <p className="text-sm text-gray-400">
            ⚠️ Once we reach capacity, the next available start date will be in 6-8 weeks
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;