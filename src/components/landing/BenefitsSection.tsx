import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "🎯",
    title: "Personalized Workout Plans",
    description: "Custom-designed routines that fit your fitness level, goals, and schedule"
  },
  {
    icon: "⚡",
    title: "Rapid Results",
    description: "See visible changes in just 2 weeks with our proven training methods"
  },
  {
    icon: "👨‍💼",
    title: "Expert Certified Trainers",
    description: "Work with top-rated professionals with 10+ years of experience"
  },
  {
    icon: "🍎",
    title: "Complete Nutrition Guide",
    description: "Meal plans and nutrition coaching to maximize your transformation"
  },
  {
    icon: "📱",
    title: "24/7 Support Access",
    description: "Get answers to your questions anytime through our mobile app"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-primary">
            Why Choose Our Elite Training Program?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just give you workouts – we give you a complete transformation system 
            that's helped thousands achieve their dream physique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-fitness-neon transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Success Stories" },
            { number: "30", label: "Day Guarantee" },
            { number: "95%", label: "Client Retention" },
            { number: "24/7", label: "Expert Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-fitness-neon mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;