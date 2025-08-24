import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    moveDate: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the form for missing or invalid information",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Quote Request Sent!",
        description: "We'll contact you within 24 hours with your personalized quote.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        moveDate: "",
        message: ""
      });
      setErrors({});
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your <span className="bg-gradient-primary bg-clip-text text-transparent">Free Quote</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to make your move? Get a personalized quote in minutes. 
            Our team will contact you within 2 hours with competitive pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Quote Form */}
          <Card className="border-0 shadow-primary">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center justify-center">
                <Send className="h-6 w-6 mr-2 text-primary" />
                Request Your Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="(555) 123-4567"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Type *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                    <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Moving</SelectItem>
                      <SelectItem value="commercial">Commercial Moving</SelectItem>
                      <SelectItem value="packing">Packing Services</SelectItem>
                      <SelectItem value="storage">Storage Solutions</SelectItem>
                      <SelectItem value="long-distance">Long Distance</SelectItem>
                      <SelectItem value="specialty">Specialty Moving</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="moveDate" className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Preferred Move Date</span>
                </Label>
                <Input
                  id="moveDate"
                  type="date"
                  value={formData.moveDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, moveDate: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your move *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Describe your moving needs, timeline, and any special requirements..."
                  rows={4}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Get Your Free Quote
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Required fields. We'll contact you within 24 hours during business hours.
              </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Call Us Now</div>
                      <div className="text-muted-foreground">+9190000000000</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div className="text-muted-foreground">info@moveease.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Our Office</div>
                      <div className="text-muted-foreground">123 Business Ave, Suite 100<br className="hidden sm:block" />Your City, ST 12345</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Business Hours</div>
                      <div className="text-muted-foreground">Mon-Fri: 7AM-7PM<br className="hidden sm:block" />Sat-Sun: 8AM-5PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-gradient-accent">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-accent-foreground mb-4">Emergency Moving?</h3>
                <p className="text-accent-foreground/90 mb-4">
                  Need to move urgently? We offer 24/7 emergency moving services with same-day availability.
                </p>
                {/* <Button variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                  Call Emergency Line: (555) 999-MOVE
                </Button> */}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <p className="text-muted-foreground mb-4">
                  We proudly serve the entire metropolitan area and surrounding regions:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Local moves within 50 miles</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Long-distance interstate moves</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>International relocations</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Commercial & office moves</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;