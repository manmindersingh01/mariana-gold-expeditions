import { Link } from "react-router-dom";
import { Anchor, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Anchor className="h-8 w-8 text-accent" />
              <span className="font-display text-xl font-bold">Mariana's Gold</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Professional maritime exploration and treasure hunting expeditions to the world's most mysterious shipwrecks and underwater sites.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary-800 hover:text-accent">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary-800 hover:text-accent">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary-800 hover:text-accent">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary-800 hover:text-accent">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/expeditions" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Expeditions
                </Link>
              </li>
              <li>
                <Link to="/shipwrecks" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Shipwreck Database
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">123 Ocean Drive, Marina Bay, San Francisco, CA 94111</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm">info@marianasgold.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to receive updates on new expeditions and discoveries.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary-800 border-primary-700 focus:border-accent text-primary-foreground"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Mariana's Gold Expeditions. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
            {" | "}
            <Link to="/terms" className="hover:text-accent">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;