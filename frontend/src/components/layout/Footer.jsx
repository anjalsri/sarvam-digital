import { Link } from 'react-router-dom';
import { Rocket, Globe, MessageSquare, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Rocket className="text-primary h-6 w-6" />
              <span className="font-bold text-xl tracking-tight">Sarvam <span className="text-primary">Digital</span></span>
            </Link>
            <p className="text-sm text-foreground/70 mb-4">
              Empowering your digital presence with cutting-edge marketing, SEO, and development solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors"><Globe className="h-5 w-5" /></a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors"><MessageSquare className="h-5 w-5" /></a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-base">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-foreground/70">
              <li><Link to="/services" className="hover:text-primary transition-colors">Search Engine Optimization</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Content Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-base">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-foreground/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-base">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm text-foreground/70">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/70">
            &copy; {new Date().getFullYear()} Sarvam Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
