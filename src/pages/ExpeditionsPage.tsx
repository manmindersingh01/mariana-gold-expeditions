import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ListFilter as Filter, Calendar1 as Calendar, MapPin, Clock, Users, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExpeditionCard from "@/components/ExpeditionCard";
import { expeditions } from "@/data/expeditions";

const ExpeditionsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  // @ts-ignore
  const filteredExpeditions = expeditions.filter((expedition) => {
    const matchesSearch = expedition.name.
    toLowerCase().
    includes(searchTerm.toLowerCase()) ||
    expedition.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === "all" || expedition.type === selectedType;
    const matchesLocation = selectedLocation === "all" || expedition.location.includes(selectedLocation);
    const matchesDuration = selectedDuration === "all" ||
    selectedDuration === "short" && parseInt(expedition.duration) <= 7 ||
    selectedDuration === "medium" && parseInt(expedition.duration) > 7 && parseInt(expedition.duration) <= 14 ||
    selectedDuration === "long" && parseInt(expedition.duration) > 14;

    return matchesSearch && matchesType && matchesLocation && matchesDuration;
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
      <div className="relative bg-[url('/images/expedition-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-primary-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Our Expeditions</h1>
            <p className="text-xl text-foreground/90 mb-8">
              Join us on thrilling underwater adventures to explore shipwrecks, discover treasures, and uncover the secrets of the ocean depths.
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
                placeholder="Search expeditions..."
                className="pl-10 bg-primary-700 border-primary-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />

            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-[180px] bg-primary-700 border-primary-600">
                  <SelectValue placeholder="Expedition Type" />
                </SelectTrigger>
                <SelectContent className="bg-primary-700 border-primary-600">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="shipwreck">Shipwreck</SelectItem>
                  <SelectItem value="deep-sea">Deep Sea</SelectItem>
                  <SelectItem value="archaeological">Archaeological</SelectItem>
                  <SelectItem value="treasure">Treasure Hunt</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full sm:w-[180px] bg-primary-700 border-primary-600">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className="bg-primary-700 border-primary-600">
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Caribbean">Caribbean</SelectItem>
                  <SelectItem value="Mediterranean">Mediterranean</SelectItem>
                  <SelectItem value="Pacific">Pacific</SelectItem>
                  <SelectItem value="Atlantic">Atlantic</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="w-full sm:w-[180px] bg-primary-700 border-primary-600">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent className="bg-primary-700 border-primary-600">
                  <SelectItem value="all">Any Duration</SelectItem>
                  <SelectItem value="short">Short (≤ 7 days)</SelectItem>
                  <SelectItem value="medium">Medium (8-14 days)</SelectItem>
                  <SelectItem value="long">Long ({`>`} 14 days)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-primary-700">
              <TabsTrigger value="all" className="font-display">All Expeditions</TabsTrigger>
              <TabsTrigger value="upcoming" className="font-display">Upcoming</TabsTrigger>
              <TabsTrigger value="active" className="font-display">Active</TabsTrigger>
              <TabsTrigger value="completed" className="font-display">Completed</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            {filteredExpeditions.length > 0 ?
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredExpeditions.map((expedition) =>
              <motion.div key={expedition.id} variants={itemVariants}>
                    <ExpeditionCard expedition={expedition} />
                  </motion.div>
              )}
              </motion.div> :

            <div className="text-center py-12">
                <p className="text-xl text-foreground/70">No expeditions found matching your criteria.</p>
                <Button
                variant="outline"
                className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("all");
                  setSelectedLocation("all");
                  setSelectedDuration("all");
                }}>

                  Clear Filters
                </Button>
              </div>
            }
          </TabsContent>

          <TabsContent value="upcoming">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredExpeditions.
              filter((expedition) => expedition.status === "upcoming").
              map((expedition) =>
              <motion.div key={expedition.id} variants={itemVariants}>
                    <ExpeditionCard expedition={expedition} />
                  </motion.div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="active">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredExpeditions.
              filter((expedition) => expedition.status === "active").
              map((expedition) =>
              <motion.div key={expedition.id} variants={itemVariants}>
                    <ExpeditionCard expedition={expedition} />
                  </motion.div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="completed">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredExpeditions.
              filter((expedition) => expedition.status === "completed").
              map((expedition) =>
              <motion.div key={expedition.id} variants={itemVariants}>
                    <ExpeditionCard expedition={expedition} />
                  </motion.div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-primary-700">
              <AccordionTrigger className="text-lg font-display hover:text-accent">
                What experience do I need to join an expedition?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Experience requirements vary by expedition type. For observer roles, no diving experience is necessary. For diving expeditions, we typically require PADI Advanced Open Water certification or equivalent, with a minimum of 25 logged dives. Deep-sea expeditions may require technical diving certifications. Each expedition listing specifies the exact requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-primary-700">
              <AccordionTrigger className="text-lg font-display hover:text-accent">
                What's included in the expedition price?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Our expedition prices typically include accommodation aboard our research vessel, all meals, diving equipment rental (for diving expeditions), expert guidance from our marine archaeologists and historians, and transportation to and from the expedition sites. International flights, travel insurance, and personal expenses are not included.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-primary-700">
              <AccordionTrigger className="text-lg font-display hover:text-accent">
                Can I keep artifacts we discover?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                All artifacts discovered during our expeditions are subject to international maritime law and the laws of the country in whose waters we operate. Generally, artifacts remain the property of the host nation or are preserved for scientific study. However, some expeditions to certain locations may allow for artifact collection under specific legal arrangements. This will be clearly stated in the expedition details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-primary-700">
              <AccordionTrigger className="text-lg font-display hover:text-accent">
                How physically demanding are the expeditions?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                The physical demands vary by expedition type. Observer roles are suitable for most people with basic mobility. Diving expeditions require good physical fitness and comfort in the water. Deep-sea expeditions may involve long days at sea and adaptation to changing weather conditions. Each expedition is rated for physical demand from 1 (minimal) to 5 (very demanding).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-primary-700">
              <AccordionTrigger className="text-lg font-display hover:text-accent">
                What happens if an expedition is canceled?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                If we need to cancel an expedition due to weather, safety concerns, or other unforeseen circumstances, participants will be offered either a full refund or priority booking on a future expedition with a 15% discount. We strongly recommend purchasing travel insurance that covers trip cancellation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-primary-800 rounded-lg p-8 md:p-12 text-center">
          <h2 className="heading-lg mb-6">Ready for an Underwater Adventure?</h2>
          <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our expedition team to learn more about upcoming opportunities or to create a custom expedition experience.
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
    </div>);

};

export default ExpeditionsPage;