import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ListFilter as Filter, Wrench, ChevronDown, ChevronRight, Shield, Droplet, Brush } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { equipment } from "@/data/equipment";

const EquipmentPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch = item.name.
    toLowerCase().
    includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || item.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

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
      <div className="relative bg-[url('/images/equipment-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-primary-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Exploration Equipment</h1>
            <p className="text-xl text-foreground/90 mb-8">
              Discover the cutting-edge technology and specialized gear we use for our deep-sea expeditions and underwater archaeology.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-primary-800 rounded-lg p-6 shadow-lg -mt-16 relative z-20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search equipment..."
                className="pl-10 bg-primary-700 border-primary-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />

            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px] bg-primary-700 border-primary-600">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-primary-700 border-primary-600">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="diving">Diving Gear</SelectItem>
                  <SelectItem value="research">Research Equipment</SelectItem>
                  <SelectItem value="submersible">Submersibles</SelectItem>
                  <SelectItem value="imaging">Imaging Systems</SelectItem>
                  <SelectItem value="recovery">Recovery Tools</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full sm:w-[180px] bg-primary-700 border-primary-600">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent className="bg-primary-700 border-primary-600">
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="bg-primary-700">
              <TabsTrigger value="all" className="font-display">All Equipment</TabsTrigger>
              <TabsTrigger value="diving" className="font-display">Diving Gear</TabsTrigger>
              <TabsTrigger value="research" className="font-display">Research Tools</TabsTrigger>
              <TabsTrigger value="submersible" className="font-display">Submersibles</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            {filteredEquipment.length > 0 ?
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredEquipment.map((item) =>
              <motion.div key={item.id} variants={itemVariants}>
                    <Card className="bg-primary-800 border-primary-700 overflow-hidden h-full flex flex-col">
                      <div className="relative">
                        <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover" />

                        <div className="absolute top-0 right-0 p-2">
                          <Badge className="bg-secondary/20 text-secondary">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex-grow">
                        <h3 className="font-display text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-sm text-foreground/80 mb-4">{item.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <Shield className="h-4 w-4 mr-2 text-accent" />
                            <span>Level: {item.level}</span>
                          </div>
                          {item.maxDepth &&
                      <div className="flex items-center text-sm">
                              <Droplet className="h-4 w-4 mr-2 text-accent" />
                              <span>Max Depth: {item.maxDepth}</span>
                            </div>
                      }
                          {item.manufacturer &&
                      <div className="flex items-center text-sm">
                              <Wrench className="h-4 w-4 mr-2 text-accent" />
                              <span>Manufacturer: {item.manufacturer}</span>
                            </div>
                      }
                        </div>
                      </CardContent>
                      
                      <CardFooter className="p-6 pt-0 border-t border-primary-700 mt-4">
                        <div className="flex items-center justify-between w-full">
                          <div>
                            {item.price &&
                        <>
                                <span className="text-xs text-foreground/70">Price from</span>
                                <p className="font-display text-xl font-semibold text-accent">${item.price}</p>
                              </>
                        }
                            {!item.price &&
                        <span className="text-sm text-foreground/70">Price on request</span>
                        }
                          </div>
                          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                            Details
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
              )}
              </motion.div> :

            <div className="text-center py-12">
                <p className="text-xl text-foreground/70">No equipment found matching your criteria.</p>
                <Button
                variant="outline"
                className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                }}>

                  Clear Filters
                </Button>
              </div>
            }
          </TabsContent>

          <TabsContent value="diving">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredEquipment.
              filter((item) => item.category === "diving").
              map((item) =>
              <motion.div key={item.id} variants={itemVariants}>
                    <Card className="bg-primary-800 border-primary-700 overflow-hidden h-full flex flex-col">
                      <div className="relative">
                        <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover" />

                        <div className="absolute top-0 right-0 p-2">
                          <Badge className="bg-secondary/20 text-secondary">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex-grow">
                        <h3 className="font-display text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-sm text-foreground/80 mb-4">{item.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <Shield className="h-4 w-4 mr-2 text-accent" />
                            <span>Level: {item.level}</span>
                          </div>
                          {item.maxDepth &&
                      <div className="flex items-center text-sm">
                              <Droplet className="h-4 w-4 mr-2 text-accent" />
                              <span>Max Depth: {item.maxDepth}</span>
                            </div>
                      }
                          {item.manufacturer &&
                      <div className="flex items-center text-sm">
                              <Wrench className="h-4 w-4 mr-2 text-accent" />
                              <span>Manufacturer: {item.manufacturer}</span>
                            </div>
                      }
                        </div>
                      </CardContent>
                      
                      <CardFooter className="p-6 pt-0 border-t border-primary-700 mt-4">
                        <div className="flex items-center justify-between w-full">
                          <div>
                            {item.price &&
                        <>
                                <span className="text-xs text-foreground/70">Price from</span>
                                <p className="font-display text-xl font-semibold text-accent">${item.price}</p>
                              </>
                        }
                            {!item.price &&
                        <span className="text-sm text-foreground/70">Price on request</span>
                        }
                          </div>
                          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                            Details
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="research">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredEquipment.
              filter((item) => item.category === "research").
              map((item) =>
              <motion.div key={item.id} variants={itemVariants}>
                    <Card className="bg-primary-800 border-primary-700 overflow-hidden h-full flex flex-col">
                      <div className="relative">
                        <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover" />

                        <div className="absolute top-0 right-0 p-2">
                          <Badge className="bg-secondary/20 text-secondary">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex-grow">
                        <h3 className="font-display text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-sm text-foreground/80 mb-4">{item.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <Shield className="h-4 w-4 mr-2 text-accent" />
                            <span>Level: {item.level}</span>
                          </div>
                          {item.maxDepth &&
                      <div className="flex items-center text-sm">
                              <Droplet className="h-4 w-4 mr-2 text-accent" />
                              <span>Max Depth: {item.maxDepth}</span>
                            </div>
                      }
                          {item.manufacturer &&
                      <div className="flex items-center text-sm">
                              <Wrench className="h-4 w-4 mr-2 text-accent" />
                              <span>Manufacturer: {item.manufacturer}</span>
                            </div>
                      }
                        </div>
                      </CardContent>
                      
                      <CardFooter className="p-6 pt-0 border-t border-primary-700 mt-4">
                        <div className="flex items-center justify-between w-full">
                          <div>
                            {item.price &&
                        <>
                                <span className="text-xs text-foreground/70">Price from</span>
                                <p className="font-display text-xl font-semibold text-accent">${item.price}</p>
                              </>
                        }
                            {!item.price &&
                        <span className="text-sm text-foreground/70">Price on request</span>
                        }
                          </div>
                          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                            Details
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="submersible">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredEquipment.
              filter((item) => item.category === "submersible").
              map((item) =>
              <motion.div key={item.id} variants={itemVariants}>
                    <Card className="bg-primary-800 border-primary-700 overflow-hidden h-full flex flex-col">
                      <div className="relative">
                        <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover" />

                        <div className="absolute top-0 right-0 p-2">
                          <Badge className="bg-secondary/20 text-secondary">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex-grow">
                        <h3 className="font-display text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-sm text-foreground/80 mb-4">{item.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <Shield className="h-4 w-4 mr-2 text-accent" />
                            <span>Level: {item.level}</span>
                          </div>
                          {item.maxDepth &&
                      <div className="flex items-center text-sm">
                              <Droplet className="h-4 w-4 mr-2 text-accent" />
                              <span>Max Depth: {item.maxDepth}</span>
                            </div>
                      }
                          {item.manufacturer &&
                      <div className="flex items-center text-sm">
                              <Wrench className="h-4 w-4 mr-2 text-accent" />
                              <span>Manufacturer: {item.manufacturer}</span>
                            </div>
                      }
                        </div>
                      </CardContent>
                      
                      <CardFooter className="p-6 pt-0 border-t border-primary-700 mt-4">
                        <div className="flex items-center justify-between w-full">
                          <div>
                            {item.price &&
                        <>
                                <span className="text-xs text-foreground/70">Price from</span>
                                <p className="font-display text-xl font-semibold text-accent">${item.price}</p>
                              </>
                        }
                            {!item.price &&
                        <span className="text-sm text-foreground/70">Price on request</span>
                        }
                          </div>
                          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                            Details
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Featured Equipment */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-primary-800 rounded-lg p-8 md:p-12">
          <h2 className="heading-lg mb-8 text-center">Featured Technology</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-secondary/30 shadow-xl shadow-primary-900/50">
                <img
                  src="/images/submersible.jpg"
                  alt="Deep-sea submersible"
                  className="w-full h-auto object-cover" />

              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium">
                  Advanced Technology
                </span>
              </div>
              <h3 className="heading-md">Mariana Explorer MK-IV Submersible</h3>
              <p className="text-body">
                Our flagship deep-sea exploration vehicle, capable of reaching depths of up to 11,000 meters. 
                Equipped with 4K cameras, robotic arms, and advanced sonar systems, the MK-IV allows us to 
                explore the most remote underwater locations on Earth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-primary-700 p-4 rounded-lg">
                  <h4 className="font-display font-semibold mb-2">Technical Specifications</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="bg-secondary/20 p-1 rounded-full mr-2">
                        <ChevronRight className="h-3 w-3 text-secondary" />
                      </div>
                      Max Depth: 11,000m
                    </li>
                    <li className="flex items-center">
                      <div className="bg-secondary/20 p-1 rounded-full mr-2">
                        <ChevronRight className="h-3 w-3 text-secondary" />
                      </div>
                      Crew Capacity: 3 persons
                    </li>
                    <li className="flex items-center">
                      <div className="bg-secondary/20 p-1 rounded-full mr-2">
                        <ChevronRight className="h-3 w-3 text-secondary" />
                      </div>
                      Operation Time: 12 hours
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary-700 p-4 rounded-lg">
                  <h4 className="font-display font-semibold mb-2">Research Capabilities</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="bg-secondary/20 p-1 rounded-full mr-2">
                        <ChevronRight className="h-3 w-3 text-secondary" />
                      </div>
                      4K Video Recording
                    </li>
                    <li className="flex items-center">
                      <div className="bg-secondary/20 p-1 rounded-full mr-2">
                        <ChevronRight className="h-3 w-3 text-secondary" />
                      </div>
                      Multi-beam Sonar
                    </li>
                    <li className="flex items-center">
                      <div className="bg-secondary/20 p-1 rounded-full mr-2">
                        <ChevronRight className="h-3 w-3 text-secondary" />
                      </div>
                      Sample Collection
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Learn More About Our Technology
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Rental Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="heading-lg mb-4">Equipment Rental & Services</h2>
            <p className="text-foreground/90 max-w-2xl mx-auto">
              We offer professional-grade equipment rental for qualified researchers, filmmakers, and expedition teams. 
              Our team can also provide training and operational support for specialized equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary-700 border-primary-600 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-accent/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Wrench className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Equipment Rental</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Rent professional-grade underwater exploration equipment for your research or filming projects.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    Daily, weekly, monthly rates
                  </li>
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    Delivery and setup available
                  </li>
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    Insurance options
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary-700 border-primary-600 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-secondary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Training & Certification</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Get certified to operate specialized underwater exploration equipment with our expert trainers.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="bg-secondary/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-secondary" />
                    </div>
                    ROV operation training
                  </li>
                  <li className="flex items-center">
                    <div className="bg-secondary/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-secondary" />
                    </div>
                    Sonar mapping certification
                  </li>
                  <li className="flex items-center">
                    <div className="bg-secondary/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-secondary" />
                    </div>
                    Technical diving courses
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary-700 border-primary-600 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-accent/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Brush className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Maintenance & Repair</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Professional maintenance and repair services for all types of underwater exploration equipment.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    Certified technicians
                  </li>
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    Fast turnaround times
                  </li>
                  <li className="flex items-center">
                    <div className="bg-accent/20 p-1 rounded-full mr-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                    </div>
                    On-site service available
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
              Contact Us for Rental Inquiries
            </Button>
          </div>
        </div>
      </div>
    </div>);

};

export default EquipmentPage;