import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Anchor, Compass, Ship, Wrench, Users, Phone, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <Anchor className="h-8 w-8 text-accent" />
            <span className="font-display text-xl md:text-2xl font-bold text-foreground">
              Mariana's Gold
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "text-accent after:w-full" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/expeditions"
              className={`nav-link ${
                isActive("/expeditions") ? "text-accent after:w-full" : ""
              }`}
            >
              Expeditions
            </Link>
            <Link
              to="/shipwrecks"
              className={`nav-link ${
                isActive("/shipwrecks") ? "text-accent after:w-full" : ""
              }`}
            >
              Shipwrecks
            </Link>
            <Link
              to="/equipment"
              className={`nav-link ${
                isActive("/equipment") ? "text-accent after:w-full" : ""
              }`}
            >
              Equipment
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                isActive("/about") ? "text-accent after:w-full" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${
                isActive("/contact") ? "text-accent after:w-full" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  {theme === "dark" ? (
                    <Moon className="h-5 w-5 text-secondary" />
                  ) : (
                    <Sun className="h-5 w-5 text-accent" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              className="hidden md:flex border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Book Expedition
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-accent" />
              ) : (
                <Menu className="h-6 w-6 text-accent" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary-900/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`flex items-center space-x-2 p-2 rounded-md ${
                isActive("/") ? "bg-primary-800 text-accent" : ""
              }`}
              onClick={closeMenu}
            >
              <Compass className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/expeditions"
              className={`flex items-center space-x-2 p-2 rounded-md ${
                isActive("/expeditions") ? "bg-primary-800 text-accent" : ""
              }`}
              onClick={closeMenu}
            >
              <Compass className="h-5 w-5" />
              <span>Expeditions</span>
            </Link>
            <Link
              to="/shipwrecks"
              className={`flex items-center space-x-2 p-2 rounded-md ${
                isActive("/shipwrecks") ? "bg-primary-800 text-accent" : ""
              }`}
              onClick={closeMenu}
            >
              <Ship className="h-5 w-5" />
              <span>Shipwrecks</span>
            </Link>
            <Link
              to="/equipment"
              className={`flex items-center space-x-2 p-2 rounded-md ${
                isActive("/equipment") ? "bg-primary-800 text-accent" : ""
              }`}
              onClick={closeMenu}
            >
              <Wrench className="h-5 w-5" />
              <span>Equipment</span>
            </Link>
            <Link
              to="/about"
              className={`flex items-center space-x-2 p-2 rounded-md ${
                isActive("/about") ? "bg-primary-800 text-accent" : ""
              }`}
              onClick={closeMenu}
            >
              <Users className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className={`flex items-center space-x-2 p-2 rounded-md ${
                isActive("/contact") ? "bg-primary-800 text-accent" : ""
              }`}
              onClick={closeMenu}
            >
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
              Book Expedition
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;