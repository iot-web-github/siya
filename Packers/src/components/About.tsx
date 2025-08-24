import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, MapPin, Award, Clock, Shield } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, number: "50+", label: "Expert Team Members" },
    { icon: MapPin, number: "25+", label: "Cities Covered" },
    { icon: Award, number: "15+", label: "Years of Excellence" },
    { icon: CheckCircle, number: "10K+", label: "Happy Customers" }
  ];

  const certifications = [
    "Licensed Moving Company",
    "Fully Insured Operations", 
    "DOT Certified",
    "Better Business Bureau A+",
    "Professional Moving Association Member",
    "ISO 9001:2015 Quality Certified"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">MoveEase Pro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2009, we've been the trusted name in professional moving services. Our commitment to excellence, 
            attention to detail, and customer-first approach has made us the preferred choice for thousands of families and businesses.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                MoveEase Pro was founded with a simple mission: to make moving stress-free and affordable for everyone. 
                What started as a small local business has grown into a full-service moving company serving multiple cities.
              </p>
              <p>
                Our founder, having experienced the challenges of moving firsthand, was determined to create a company 
                that would treat customers' belongings as if they were their own. This philosophy remains at the heart 
                of everything we do today.
              </p>
              <p>
                Today, we're proud to be a family-owned business that combines traditional values with modern moving 
                techniques and technology to deliver exceptional service every time.
              </p>
            </div>
          </div>
          <div className="bg-gradient-primary rounded-3xl p-8 text-center">
            <h4 className="text-2xl font-bold text-primary-foreground mb-6">Our Mission</h4>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              "To provide stress-free, reliable, and affordable moving services while treating every customer 
              like family and every belonging like a treasure."
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-0 shadow-soft hover:shadow-primary transition-all duration-300">
              <CardHeader className="pb-2">
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {achievement.number}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 shadow-soft">
            <CardHeader>
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We show up on time, every time. Your schedule is our priority, and we honor our commitments without exception.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-soft">
            <CardHeader>
              <Clock className="h-16 w-16 text-accent mx-auto mb-4" />
              <CardTitle className="text-2xl">Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our trained professionals work quickly and systematically to minimize disruption to your daily routine.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-soft">
            <CardHeader>
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We strive for perfection in every aspect of our service, from initial consultation to final delivery.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="bg-background rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            Licensed, Certified & <span className="bg-gradient-primary bg-clip-text text-transparent">Trusted</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-secondary/20">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="hero" size="lg">
              Start Your Move Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;