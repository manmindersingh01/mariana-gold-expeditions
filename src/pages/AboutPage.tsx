import { motion } from "framer-motion";
import { Users, Award, Compass, Ship, ChevronRight, Anchor, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { teamMembers } from "@/data/team";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="pt-24 pb-20 bg-primary-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[url('/images/about-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-primary-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">About Mariana's Gold</h1>
            <p className="text-xl text-foreground/90 mb-8">
              Discover the story behind the world's premier maritime exploration company and the passionate team of experts who make our expeditions possible.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium">
                Our Story
              </span>
            </div>
            <h2 className="heading-lg">A Legacy of Exploration and Discovery</h2>
            <p className="text-body">
              Founded in 2005 by renowned marine archaeologist Dr. Elena Mariana, our company began as a small research team dedicated to documenting shipwrecks in the Mediterranean. What started as a passion project quickly evolved into one of the world's leading maritime exploration companies.
            </p>
            <p className="text-body">
              Over the past two decades, we've mapped more uncharted ocean floor than any private company in history, discovered dozens of previously unknown shipwrecks, and developed cutting-edge technology for deep-sea exploration. Our commitment to scientific integrity, historical preservation, and environmental responsibility has made us the partner of choice for museums, research institutions, and documentary filmmakers worldwide.
            </p>
            <p className="text-body">
              Today, Mariana's Gold Expeditions continues to push the boundaries of underwater exploration, combining adventure with scientific discovery and bringing the mysteries of the deep to light.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-accent/30 shadow-xl shadow-primary-900/50">
              <img
                src="/images/founder.jpg"
                alt="Dr. Elena Mariana, Founder"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-xl font-bold text-white">Dr. Elena Mariana</h3>
                <p className="text-sm text-white/80">Founder & Chief Archaeologist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-primary-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium">
                Our Mission
              </span>
            </div>
            <h2 className="heading-lg">Mission & Values</h2>
            <p className="text-body max-w-2xl mx-auto mt-4">
              We are guided by a commitment to exploration, preservation, and education in all our underwater endeavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary-700 border-primary-600 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-accent/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Compass className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Exploration</h3>
                <p className="text-sm text-foreground/80">
                  We push the boundaries of underwater exploration, venturing into the unknown depths to discover what lies beneath. Our expeditions combine cutting-edge technology with human curiosity to map uncharted territories and find lost treasures of history.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-700 border-primary-600 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-secondary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Ship className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Preservation</h3>
                <p className="text-sm text-foreground/80">
                  We are committed to preserving maritime history for future generations. Our documentation and recovery methods adhere to the highest archaeological standards, ensuring that artifacts and shipwrecks are treated with the respect they deserve.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-700 border-primary-600 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-accent/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Education</h3>
                <p className="text-sm text-foreground/80">
                  We believe in sharing our discoveries with the world. Through documentaries, museum exhibitions, and educational programs, we bring the wonders of the deep sea to people of all ages, inspiring the next generation of explorers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium">
              Our Team
            </span>
          </div>
          <h2 className="heading-lg">Meet the Explorers</h2>
          <p className="text-body max-w-2xl mx-auto mt-4">
            Our diverse team of experts brings together decades of experience in marine archaeology, deep-sea exploration, and underwater technology.
          </p>
        </div>

        <Tabs defaultValue="leadership" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-primary-700">
              <TabsTrigger value="leadership" className="font-display">Leadership</TabsTrigger>
              <TabsTrigger value="archaeologists" className="font-display">Archaeologists</TabsTrigger>
              <TabsTrigger value="technical" className="font-display">Technical Team</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="leadership">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teamMembers
                .filter((member) => member.department === "leadership")
                .map((member) => (
                  <motion.div key={member.id} variants={itemVariants}>
                    <Card className="bg-primary-800 border-primary-700 overflow-hidden">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="font-display text-xl font-semibold text-white">{member.name}</h3>
                          <p className="text-sm text-white/80">{member.position}</p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-sm text-foreground/80">{member.bio}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="archaeologists">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teamMembers
                .filter((member) => member.department === "archaeology")
                .map((member) => (
                  <motion.div key={member.id} variants={itemVariants}>
                    <Card className="bg-primary-800 border-primary-700 overflow-hidden">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="font-display text-xl font-semibold text-white">{member.name}</h3>
                          <p className="text-sm text-white/80">{member.position}</p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-sm text-foreground/80">{member.bio}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="technical">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teamMembers
                .filter((member) => member.department === "technical")
                .map((member) => (
                  <motion.div key={member.id} variants={itemVariants}>
                    <Card className="bg-primary-800 border-primary-700 overflow-hidden">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="font-display text-xl font-semibold text-white">{member.name}</h3>
                          <p className="text-sm text-white/80">{member.position}</p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-sm text-foreground/80">{member.bio}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Achievements */}
      <div className="bg-primary-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium">
                Our Achievements
              </span>
            </div>
            <h2 className="heading-lg">Milestones & Discoveries</h2>
            <p className="text-body max-w-2xl mx-auto mt-4">
              Over the years, our team has made significant contributions to maritime archaeology and underwater exploration.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30"></div>
            
            <div className="space-y-16 relative">
              {/* 2005 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="inline-block mb-2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                      2005
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Company Founded</h3>
                  <p className="text-foreground/80">
                    Dr. Elena Mariana establishes Mariana's Gold Expeditions with a small team of archaeologists and divers, focusing initially on Mediterranean shipwrecks.
                  </p>
                </div>
                <div className="relative md:pl-12">
                  <div className="absolute left-1/2 md:left-0 top-0 transform -translate-x-1/2 md:translate-x-0 w-6 h-6 rounded-full bg-accent border-4 border-primary-800"></div>
                  <img
                    src="/images/timeline-2005.jpg"
                    alt="Company founding"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              {/* 2010 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:order-2 md:pl-12">
                  <div className="inline-block mb-2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                      2010
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Discovery of the Santa Maria</h3>
                  <p className="text-foreground/80">
                    Our team discovers the remains of the Santa Maria, a 16th-century Spanish galleon carrying gold from the New World, off the coast of Florida.
                  </p>
                </div>
                <div className="relative md:order-1 md:text-right md:pr-12">
                  <div className="absolute left-1/2 md:right-0 top-0 transform -translate-x-1/2 md:translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-primary-800"></div>
                  <img
                    src="/images/timeline-2010.jpg"
                    alt="Santa Maria discovery"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              {/* 2015 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="inline-block mb-2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                      2015
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Mariana Deep Explorer Launched</h3>
                  <p className="text-foreground/80">
                    We develop and launch our proprietary deep-sea submersible, capable of reaching depths of up to 7,000 meters, revolutionizing our exploration capabilities.
                  </p>
                </div>
                <div className="relative md:pl-12">
                  <div className="absolute left-1/2 md:left-0 top-0 transform -translate-x-1/2 md:translate-x-0 w-6 h-6 rounded-full bg-accent border-4 border-primary-800"></div>
                  <img
                    src="/images/timeline-2015.jpg"
                    alt="Submersible launch"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              {/* 2020 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:order-2 md:pl-12">
                  <div className="inline-block mb-2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                      2020
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Mariana Trench Expedition</h3>
                  <p className="text-foreground/80">
                    Our team conducts a groundbreaking expedition to the Mariana Trench, documenting previously unknown species and geological formations.
                  </p>
                </div>
                <div className="relative md:order-1 md:text-right md:pr-12">
                  <div className="absolute left-1/2 md:right-0 top-0 transform -translate-x-1/2 md:translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-primary-800"></div>
                  <img
                    src="/images/timeline-2020.jpg"
                    alt="Mariana Trench expedition"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              {/* 2023 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="inline-block mb-2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                      2023
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Global Expansion</h3>
                  <p className="text-foreground/80">
                    Mariana's Gold Expeditions expands operations to all major oceans, with new research vessels and international partnerships.
                  </p>
                </div>
                <div className="relative md:pl-12">
                  <div className="absolute left-1/2 md:left-0 top-0 transform -translate-x-1/2 md:translate-x-0 w-6 h-6 rounded-full bg-accent border-4 border-primary-800"></div>
                  <img
                    src="/images/timeline-2023.jpg"
                    alt="Global expansion"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium">
              Our Partners
            </span>
          </div>
          <h2 className="heading-lg">Trusted Collaborators</h2>
          <p className="text-body max-w-2xl mx-auto mt-4">
            We work with leading institutions, museums, and organizations around the world to advance underwater exploration and preservation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-primary-800 p-6 rounded-lg flex items-center justify-center">
              <img
                src={`/images/partner-${i + 1}.png`}
                alt={`Partner ${i + 1}`}
                className="max-h-16 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-lg mb-4">Join Us on Our Next Adventure</h2>
              <p className="text-foreground/90 mb-6">
                Whether you're a researcher, adventurer, or simply curious about the mysteries of the deep, there are many ways to get involved with Mariana's Gold Expeditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
                  Join an Expedition
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Career Opportunities
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-accent/30 shadow-xl shadow-primary-900/50">
                <img
                  src="/images/team-expedition.jpg"
                  alt="Team on expedition"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;