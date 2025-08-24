import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>info@moveease.com</span>
            </div>
          </div>
          <div className="text-muted-foreground">
            Licensed & Insured • 24/7 Support
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MoveEase Pro
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="hidden md:inline-flex"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Quote
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a href="#home" className="block text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="block text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#testimonials" className="block text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Quote
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;