import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, DollarSign, Users, Award, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Complete protection for your belongings with comprehensive insurance coverage and proper licensing."
    },
    {
      icon: Clock,
      title: "On-Time Guarantee",
      description: "We respect your schedule. Punctuality is our promise, and we deliver on time, every time."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. What we quote is what you pay, with detailed breakdown."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our trained professionals have years of experience handling moves of all sizes and complexities."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality checks and standards ensure your belongings are handled with utmost care."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to address any concerns or questions during your move."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">MoveEase Pro</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't just move your belongings – we move your life with care, 
            professionalism, and a commitment to excellence that sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center border-0 shadow-soft hover:shadow-primary transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-8">
            Our Track Record Speaks for Itself
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">10K+</div>
              <div className="text-primary-foreground/80">Successful Moves</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">99.9%</div>
              <div className="text-primary-foreground/80">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">5.0</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;