import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, Package, Warehouse, Truck, Shield } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Moving",
      description: "Complete home relocation services with professional packing and careful handling of your personal belongings.",
      features: ["Full packing service", "Furniture disassembly", "Secure loading", "Safe transportation"]
    },
    {
      icon: Building,
      title: "Commercial Moving",
      description: "Office and business relocations with minimal downtime. We understand your business needs.",
      features: ["IT equipment moving", "Office furniture", "Document handling", "Weekend availability"]
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "Professional packing with high-quality materials to ensure your items arrive safely.",
      features: ["Quality materials", "Expert techniques", "Fragile item care", "Unpacking service"]
    },
    {
      icon: Warehouse,
      title: "Storage Solutions",
      description: "Secure, climate-controlled storage facilities for short-term and long-term needs.",
      features: ["Climate controlled", "24/7 security", "Flexible terms", "Easy access"]
    },
    {
      icon: Truck,
      title: "Long Distance",
      description: "Interstate and cross-country moves with tracking and regular updates on your shipment.",
      features: ["GPS tracking", "Regular updates", "Insurance coverage", "Dedicated team"]
    },
    {
      icon: Shield,
      title: "Specialty Moving",
      description: "Specialized services for pianos, artwork, antiques, and other valuable or delicate items.",
      features: ["Piano moving", "Art handling", "Antique care", "Custom crating"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive moving solutions tailored to your specific needs. 
            From small apartments to large offices, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 border-0 shadow-soft">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => scrollToSection('contact')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8"
            onClick={() => scrollToSection('contact')}
          >
            Get Custom Quote for Your Move
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;