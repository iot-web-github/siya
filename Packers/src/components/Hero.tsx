import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-moving.jpg";
import { scrollToSection } from "@/lib/scroll-utils";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent font-semibold">
                <Star className="h-5 w-5 fill-current" />
                <span>Trusted by 10,000+ Happy Customers</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Stress-Free Moving
                </span>
                <br />
                Made Simple
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional packing, loading, and moving services you can trust. 
                We handle your belongings with care while you focus on starting fresh.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">Free Packing Materials</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">On-Time Guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => scrollToSection('contact')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20"
                onClick={() => scrollToSection('services')}
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10k+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">5★</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-primary">
              <img 
                src={heroImage} 
                alt="Professional movers loading a truck with care and efficiency"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating trust badge */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-background/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-soft">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-3 w-3 sm:h-4 sm:w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-xs sm:text-sm">5.0 Rating</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1 hidden sm:block">From 1,200+ Reviews</div>
              </div>

              {/* Floating service badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-primary/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-soft">
                <div className="text-primary-foreground font-semibold text-sm sm:text-base">24/7 Available</div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">Emergency Moving</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;