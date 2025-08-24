import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Home, MapPin, Calendar, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MovingCalculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fromZip: "",
    toZip: "",
    homeSize: "",
    moveDate: "",
    distance: "",
    services: {
      packing: false,
      unpacking: false,
      storage: false,
      specialty: false,
      insurance: false
    }
  });
  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const homeSizes = [
    { value: "studio", label: "Studio/1 Room", multiplier: 1 },
    { value: "1bedroom", label: "1 Bedroom", multiplier: 1.5 },
    { value: "2bedroom", label: "2 Bedroom", multiplier: 2 },
    { value: "3bedroom", label: "3 Bedroom", multiplier: 2.5 },
    { value: "4bedroom", label: "4+ Bedroom", multiplier: 3.5 },
    { value: "office", label: "Small Office", multiplier: 2 },
    { value: "warehouse", label: "Large Office/Warehouse", multiplier: 4 }
  ];

  const serviceOptions = [
    { key: "packing", label: "Professional Packing", cost: 300 },
    { key: "unpacking", label: "Unpacking Service", cost: 200 },
    { key: "storage", label: "Storage (1 month)", cost: 150 },
    { key: "specialty", label: "Specialty Items (Piano, Art)", cost: 250 },
    { key: "insurance", label: "Full Value Protection", cost: 100 }
  ];

  const calculateEstimate = () => {
    if (!formData.homeSize || !formData.distance) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsCalculating(true);

    // Simulate API call
    setTimeout(() => {
      const homeSize = homeSizes.find(size => size.value === formData.homeSize);
      const baseRate = 100; // Base hourly rate
      const distance = parseInt(formData.distance) || 10;
      
      // Calculate base cost
      let baseCost = baseRate * homeSize.multiplier * Math.max(4, distance / 50);
      
      // Add distance cost for long moves
      if (distance > 100) {
        baseCost += distance * 2;
      }

      // Add selected services
      let servicesCost = 0;
      Object.keys(formData.services).forEach(serviceKey => {
        if (formData.services[serviceKey]) {
          const service = serviceOptions.find(s => s.key === serviceKey);
          if (service) {
            servicesCost += service.cost;
          }
        }
      });

      const totalCost = baseCost + servicesCost;
      const estimateRange = {
        low: Math.round(totalCost * 0.8),
        high: Math.round(totalCost * 1.2),
        exact: Math.round(totalCost)
      };

      setEstimate(estimateRange);
      setIsCalculating(false);

      toast({
        title: "Estimate Calculated!",
        description: "Your moving estimate is ready below."
      });
    }, 2000);
  };

  const handleServiceChange = (serviceKey: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceKey]: checked
      }
    }));
  };

  return (
    <section id="calculator" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Moving Cost <span className="bg-gradient-primary bg-clip-text text-transparent">Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate for your move. Our calculator considers all factors 
            to give you the most accurate pricing possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Calculator className="h-6 w-6 text-primary" />
                <span>Get Your Estimate</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Location Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fromZip" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>From ZIP Code</span>
                  </Label>
                  <Input
                    id="fromZip"
                    placeholder="12345"
                    value={formData.fromZip}
                    onChange={(e) => setFormData(prev => ({ ...prev, fromZip: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="toZip" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>To ZIP Code</span>
                  </Label>
                  <Input
                    id="toZip"
                    placeholder="67890"
                    value={formData.toZip}
                    onChange={(e) => setFormData(prev => ({ ...prev, toZip: e.target.value }))}
                  />
                </div>
              </div>

              {/* Home Size */}
              <div className="space-y-2">
                <Label className="flex items-center space-x-2">
                  <Home className="h-4 w-4" />
                  <span>Home/Office Size</span>
                </Label>
                <Select value={formData.homeSize} onValueChange={(value) => setFormData(prev => ({ ...prev, homeSize: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your home size" />
                  </SelectTrigger>
                  <SelectContent>
                    {homeSizes.map(size => (
                      <SelectItem key={size.value} value={size.value}>
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Distance and Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="distance">Distance (miles)</Label>
                  <Input
                    id="distance"
                    type="number"
                    placeholder="50"
                    value={formData.distance}
                    onChange={(e) => setFormData(prev => ({ ...prev, distance: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moveDate" className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Move Date</span>
                  </Label>
                  <Input
                    id="moveDate"
                    type="date"
                    value={formData.moveDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, moveDate: e.target.value }))}
                  />
                </div>
              </div>

              {/* Additional Services */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Additional Services</Label>
                <div className="space-y-3">
                  {serviceOptions.map(service => (
                    <div key={service.key} className="flex items-center justify-between space-x-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={service.key}
                          checked={formData.services[service.key]}
                          onCheckedChange={(checked) => handleServiceChange(service.key, checked as boolean)}
                        />
                        <Label htmlFor={service.key} className="text-sm cursor-pointer">
                          {service.label}
                        </Label>
                      </div>
                      <span className="text-sm text-muted-foreground">+${service.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={calculateEstimate} 
                className="w-full" 
                size="lg"
                variant="hero"
                disabled={isCalculating}
              >
                {isCalculating ? "Calculating..." : "Calculate My Estimate"}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {estimate && (
              <Card className="shadow-primary border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    <DollarSign className="h-6 w-6 text-accent" />
                    <span>Your Moving Estimate</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-gradient-primary rounded-2xl">
                    <div className="text-4xl font-bold text-primary-foreground mb-2">
                      ${estimate.low} - ${estimate.high}
                    </div>
                    <p className="text-primary-foreground/90">Estimated Moving Cost</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">What's Included:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Professional moving crew</li>
                      <li>• Moving truck and fuel</li>
                      <li>• Basic packing materials</li>
                      <li>• Loading and unloading</li>
                      <li>• Basic liability coverage</li>
                      {Object.keys(formData.services).map(serviceKey => 
                        formData.services[serviceKey] && (
                          <li key={serviceKey}>
                            • {serviceOptions.find(s => s.key === serviceKey)?.label}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground mb-4">
                      * This is an estimate based on typical moves. Final cost may vary based on 
                      actual services, distance, and specific requirements.
                    </p>
                    <div className="space-y-2">
                      <Button variant="hero" size="lg" className="w-full">
                        Get Detailed Quote
                      </Button>
                      <Button variant="outline" size="lg" className="w-full">
                        Schedule Survey
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tips Card */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Money-Saving Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Move during off-peak times (fall/winter)</li>
                  <li>• Declutter before packing</li>
                  <li>• Pack some items yourself</li>
                  <li>• Book 3-4 weeks in advance</li>
                  <li>• Compare multiple quotes</li>
                  <li>• Consider mid-week moves</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingCalculator;