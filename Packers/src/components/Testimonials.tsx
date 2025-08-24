import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Austin, TX",
      rating: 5,
      text: "Absolutely fantastic service! The team was professional, careful, and made our interstate move completely stress-free. Every item arrived in perfect condition.",
      move: "3-bedroom house, TX to CA"
    },
    {
      name: "Michael Chen",
      location: "Seattle, WA", 
      rating: 5,
      text: "Best moving company I've ever used. They packed everything expertly, delivered on time, and the pricing was exactly as quoted. Highly recommend!",
      move: "Office relocation"
    },
    {
      name: "Emily Rodriguez",
      location: "Denver, CO",
      rating: 5,
      text: "Moving with kids is tough, but MoveEase Pro made it easy. They handled our piano and antiques with such care. The whole team was amazing!",
      move: "2-bedroom apartment"
    },
    {
      name: "David Wilson",
      location: "Miami, FL",
      rating: 5,
      text: "Professional from start to finish. Great communication, punctual delivery, and reasonable pricing. They even helped us arrange furniture in our new home.",
      move: "Long-distance move"
    },
    {
      name: "Jennifer Kim",
      location: "Boston, MA",
      rating: 5,
      text: "Their packing service is worth every penny. Everything was organized, labeled, and arrived safely. The unpacking service saved us so much time!",
      move: "Corporate relocation"
    },
    {
      name: "Robert Martinez",
      location: "Phoenix, AZ",
      rating: 5,
      text: "Moved my elderly parents with such care and patience. The team went above and beyond to make them comfortable. Truly exceptional service.",
      move: "Senior moving service"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers 
            have to say about their moving experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-primary transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-8 w-8 text-accent/30" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs text-accent font-medium">{testimonial.move}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
            <div className="text-xs sm:text-sm font-semibold">FEATURED ON:</div>
            <div className="text-xs sm:text-sm">Better Business Bureau A+</div>
            <div className="text-xs sm:text-sm">Google Reviews 5★</div>
            <div className="text-xs sm:text-sm">Yelp Elite Badge</div>
            <div className="text-xs sm:text-sm">HomeAdvisor Screened</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;