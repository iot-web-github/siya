import React from 'react';
import { Heart, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ModernBlog</h3>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Discover insights, stories, and ideas from passionate writers across technology, 
              design, business, and lifestyle. Join our community of forward-thinking readers.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Technology</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Business</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Lifestyle</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-2" /> by the ModernBlog Team
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;