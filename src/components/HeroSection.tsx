import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToExplore = () => {
    const exploreSection = document.getElementById("explore");
    exploreSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-hero relative bg-ocean-gradient">
      {/* Parallax background layers */}
      <div
        className="absolute inset-0 bg-[url('/images/deep-ocean-bg.jpg')] bg-cover bg-center"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div
        className="absolute inset-0 bg-[url('/images/particles-overlay.png')] bg-repeat opacity-30"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-900"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium">
                Professional Maritime Exploration
              </span>
            </motion.div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="heading-xl mb-6 text-glow"
          >
            Discover the Mysteries of the <span className="text-accent">Deep Sea</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto"
          >
            Join Mariana's Gold Expeditions on thrilling underwater adventures to explore shipwrecks, discover treasures, and uncover the secrets of the ocean depths.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button className="bg-accent text-accent-foreground hover:bg-accent/80 text-lg px-6 py-6">
              Book an Expedition
            </Button>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-6 py-6">
              Explore Shipwrecks
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce"
            onClick={scrollToExplore}
          >
            <ArrowDown className="h-6 w-6 text-secondary" />
          </Button>
        </motion.div>
      </div>
      
      {/* Depth marker */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:block">
        <div className="flex flex-col items-center">
          <div className="h-32 w-px bg-secondary/30"></div>
          <div className="depth-marker mt-2">-3,500m</div>
        </div>
      </div>
      
      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-secondary/20"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-50px`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;