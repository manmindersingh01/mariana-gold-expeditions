import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Anchor, Compass, Ship, Award, Users, ChevronRight, Droplet, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "@/components/HeroSection";
import ExpeditionCard from "@/components/ExpeditionCard";
import ShipwreckCard from "@/components/ShipwreckCard";
import TestimonialCard from "@/components/TestimonialCard";
import { expeditions } from "@/data/expeditions";
import { shipwrecks } from "@/data/shipwrecks";
import { testimonials } from "@/data/testimonials";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-primary-900 to-primary-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium">
                  About Us
                </span>
              </div>
              <h2 className="heading-lg">Exploring the Ocean's Greatest Mysteries</h2>
              <p className="text-body">
                Mariana's Gold Expeditions is a premier maritime exploration company specializing in deep-sea expeditions, shipwreck discovery, and underwater treasure recovery. With over 20 years of experience and cutting-edge technology, we've mapped more uncharted ocean floor than any private company in history.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/20 p-2 rounded-md">
                    <Anchor className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold">Expert Team</h4>
                    <p className="text-sm text-foreground/80">World-class marine archaeologists and deep-sea explorers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/20 p-2 rounded-md">
                    <Compass className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold">Advanced Tech</h4>
                    <p className="text-sm text-foreground/80">Proprietary sonar and underwater robotics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/20 p-2 rounded-md">
                    <Ship className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold">Historic Finds</h4>
                    <p className="text-sm text-foreground/80">Over 200 shipwrecks documented and preserved</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/20 p-2 rounded-md">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold">Certified</h4>
                    <p className="text-sm text-foreground/80">Full compliance with maritime law and preservation standards</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/80">
                <Link to="/about">
                  Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-accent/30 shadow-xl shadow-primary-900/50">
                <img
                  src="/images/underwater-exploration.jpg"
                  alt="Underwater exploration"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center space-x-2">
                    <div className="sonar-ping w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="font-mono text-xs text-secondary">LIVE EXPEDITION</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mt-2">Mariana Trench Exploration</h3>
                  <p className="text-sm text-white/80">Currently at -8,500m depth</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expeditions Section */}
      <section className="py-20 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium">
                Our Expeditions
              </span>
            </div>
            <h2 className="heading-lg">Discover Our Maritime Adventures</h2>
            <p className="text-body max-w-2xl mx-auto mt-4">
              Join us on thrilling expeditions to the world's most mysterious shipwrecks and underwater treasures. From historical galleons to modern vessels, we explore them all.
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-primary-700">
                <TabsTrigger 
                  value="upcoming" 
                  className={`font-display ${activeTab === "upcoming" ? "text-accent" : "text-foreground/70"}`}
                >
                  Upcoming Expeditions
                </TabsTrigger>
                <TabsTrigger 
                  value="past" 
                  className={`font-display ${activeTab === "past" ? "text-accent" : "text-foreground/70"}`}
                >
                  Past Discoveries
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {expeditions.filter(exp => exp.status === "upcoming").slice(0, 3).map((expedition) => (
                  <motion.div key={expedition.id} variants={itemVariants}>
                    <ExpeditionCard expedition={expedition} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="past">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {expeditions.filter(exp => exp.status === "completed").slice(0, 3).map((expedition) => (
                  <motion.div key={expedition.id} variants={itemVariants}>
                    <ExpeditionCard expedition={expedition} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/80">
              <Link to="/expeditions">
                View All Expeditions <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Shipwreck Database Section */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 map-grid opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium">
                Shipwreck Database
              </span>
            </div>
            <h2 className="heading-lg">Explore Our Documented Shipwrecks</h2>
            <p className="text-body max-w-2xl mx-auto mt-4">
              Our comprehensive database contains detailed information on hundreds of shipwrecks, including 3D sonar maps, historical context, and recovered artifacts.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {shipwrecks.slice(0, 3).map((shipwreck) => (
              <motion.div key={shipwreck.id} variants={itemVariants}>
                <ShipwreckCard shipwreck={shipwreck} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/shipwrecks">
                View Full Database <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium">
                Our Services
              </span>
            </div>
            <h2 className="heading-lg">Professional Maritime Services</h2>
            <p className="text-body max-w-2xl mx-auto mt-4">
              Beyond our expeditions, we offer a range of professional services for researchers, collectors, and maritime enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-primary-700 border-primary-600 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-accent/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Ship className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Shipwreck Surveys</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Professional mapping and documentation of shipwrecks using advanced sonar and underwater imaging technology.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    3D sonar mapping
                  </li>
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    Photogrammetry
                  </li>
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    Historical research
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary-700 border-primary-600 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-secondary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Artifact Authentication</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Expert authentication and valuation of maritime artifacts and treasures with detailed provenance documentation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="bg-secondary/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-secondary" />
                    </div>
                    Material analysis
                  </li>
                  <li className="flex items-center">
                    <div className="bg-secondary/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-secondary" />
                    </div>
                    Historical verification
                  </li>
                  <li className="flex items-center">
                    <div className="bg-secondary/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-secondary" />
                    </div>
                    Certification documents
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary-700 border-primary-600 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-accent/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Private Expeditions</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Custom-designed private expeditions for collectors, researchers, and adventure seekers with full logistical support.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    Personalized itineraries
                  </li>
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    Expert guides
                  </li>
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    State-of-the-art equipment
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-900 relative">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary-800 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium">
                Testimonials
              </span>
            </div>
            <h2 className="heading-lg">What Our Clients Say</h2>
            <p className="text-body max-w-2xl mx-auto mt-4">
              Hear from researchers, collectors, and adventure seekers who have joined our expeditions and used our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary-900 to-primary-800">
        <div className="container mx-auto px-4">
          <div className="bg-primary-700 border border-primary-600 rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Ready to Embark on an Underwater Adventure?</h2>
              <p className="text-body mb-8">
                Join us on our next expedition or inquire about our professional maritime services. Discover the mysteries of the deep with Mariana's Gold Expeditions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
                  Book an Expedition
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;