import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ListFilter as Filter, Ship, Calendar1 as Calendar, MapPin, Droplet, ChevronDown } from "lucide-react";
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
import ShipwreckCard from "@/components/ShipwreckCard";
import { shipwrecks } from "@/data/shipwrecks";

const ShipwrecksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedEra, setSelectedEra] = useState("all");
  const [selectedDepth, setSelectedDepth] = useState("all");

  // @ts-ignore
  const filteredShipwrecks = shipwrecks.filter((shipwreck) => {
    const matchesSearch = shipwreck.name.
    toLowerCase().
    includes(searchTerm.toLowerCase()) ||
    shipwreck.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === "all" || shipwreck.type === selectedType;

    const matchesEra = selectedEra === "all" ||
    selectedEra === "ancient" && shipwreck.year < 500 ||
    selectedEra === "medieval" && shipwreck.year >= 500 && shipwreck.year < 1500 ||
    selectedEra === "colonial" && shipwreck.year >= 1500 && shipwreck.year < 1800 ||
    selectedEra === "modern" && shipwreck.year >= 1800;

    const shipwreckDepth = parseInt(shipwreck.depth.replace(/\D/g, ''));
    const matchesDepth = selectedDepth === "all" ||
    selectedDepth === "shallow" && shipwreckDepth <= 30 ||
    selectedDepth === "medium" && shipwreckDepth > 30 && shipwreckDepth <= 100 ||
    selectedDepth === "deep" && shipwreckDepth > 100;

    return matchesSearch && matchesType && matchesEra && matchesDepth;
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
      <div className="relative bg-[url('/images/shipwreck-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-primary-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Shipwreck Database</h1>
            <p className="text-xl text-foreground/90 mb-8">
              Explore our comprehensive collection of documented shipwrecks from around the world, complete with historical context, 3D sonar maps, and recovered artifacts.
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
                placeholder="Search shipwrecks..."
                className="pl-10 bg-primary-700 border-primary-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />

            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-[180px] bg-primary-700 border-primary-600">
                  <SelectValue placeholder="Vessel Type" />
                </SelectTrigger>
                <SelectContent className="bg-primary-700 border-primary-600">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="galleon">Galleon</SelectItem>
                  <SelectItem value="warship">Warship</SelectItem>
                  <SelectItem value="merchant">Merchant</SelectItem>
                  <SelectItem value="passenger">Passenger</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedEra} onValueChange={setSelectedEra}>
                <SelectTrigger className="w-full sm:w-[180px] bg-primary-700 border-primary-600">
                  <SelectValue placeholder="Historical Era" />
                </SelectTrigger>
                <SelectContent className="bg-primary-700 border-primary-600">
                  <SelectItem value="all">All Eras</SelectItem>
                  <SelectItem value="ancient">Ancient (pre-500)</SelectItem>
                  <SelectItem value="medieval">Medieval (500-1500)</SelectItem>
                  <SelectItem value="colonial">Colonial (1500-1800)</SelectItem>
                  <SelectItem value="modern">Modern (post-1800)</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDepth} onValueChange={setSelectedDepth}>
                <SelectTrigger className="w-full sm:w-[180px] bg-primary-700 border-primary-600">
                  <SelectValue placeholder="Depth Range" />
                </SelectTrigger>
                <SelectContent className="bg-primary-700 border-primary-600">
                  <SelectItem value="all">Any Depth</SelectItem>
                  <SelectItem value="shallow">Shallow (≤ 30m)</SelectItem>
                  <SelectItem value="medium">Medium (31-100m)</SelectItem>
                  <SelectItem value="deep">Deep ({`>`} 100m)</SelectItem>
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
              <TabsTrigger value="all" className="font-display">All Shipwrecks</TabsTrigger>
              <TabsTrigger value="explored" className="font-display">Explored</TabsTrigger>
              <TabsTrigger value="unexplored" className="font-display">Unexplored</TabsTrigger>
              <TabsTrigger value="treasure" className="font-display">Treasure Ships</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            {filteredShipwrecks.length > 0 ?
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredShipwrecks.map((shipwreck) =>
              <motion.div key={shipwreck.id} variants={itemVariants}>
                    <ShipwreckCard shipwreck={shipwreck} />
                  </motion.div>
              )}
              </motion.div> :

            <div className="text-center py-12">
                <p className="text-xl text-foreground/70">No shipwrecks found matching your criteria.</p>
                <Button
                variant="outline"
                className="mt-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("all");
                  setSelectedEra("all");
                  setSelectedDepth("all");
                }}>

                  Clear Filters
                </Button>
              </div>
            }
          </TabsContent>

          <TabsContent value="explored">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredShipwrecks.
              filter((shipwreck) => shipwreck.status === "Explored").
              map((shipwreck) =>
              <motion.div key={shipwreck.id} variants={itemVariants}>
                    <ShipwreckCard shipwreck={shipwreck} />
                  </motion.div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="unexplored">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredShipwrecks.
              filter((shipwreck) => shipwreck.status === "Unexplored").
              map((shipwreck) =>
              <motion.div key={shipwreck.id} variants={itemVariants}>
                    <ShipwreckCard shipwreck={shipwreck} />
                  </motion.div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="treasure">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredShipwrecks.
              filter((shipwreck) => shipwreck.hasTreasure).
              map((shipwreck) =>
              <motion.div key={shipwreck.id} variants={itemVariants}>
                    <ShipwreckCard shipwreck={shipwreck} />
                  </motion.div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Interactive Map Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-primary-800 rounded-lg p-6 shadow-lg">
          <h2 className="heading-md mb-6">Global Shipwreck Map</h2>
          <div className="aspect-[16/9] bg-primary-700 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 map-grid"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg text-foreground/70">Interactive map loading...</p>
            </div>
            {/* Map would be implemented here with a mapping library */}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-foreground/70">
              This interactive map shows the locations of all documented shipwrecks in our database. 
              Click on a marker to view details about each shipwreck.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-lg mb-4">Interested in Exploring These Shipwrecks?</h2>
              <p className="text-foreground/90 mb-6">
                Join one of our expeditions to visit these fascinating underwater time capsules in person. 
                Our expert team will guide you through the history and significance of each site.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  View Expeditions
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-secondary/30 shadow-xl shadow-primary-900/50">
                <img
                  src="/images/diver-exploring-shipwreck.jpg"
                  alt="Diver exploring shipwreck"
                  className="w-full h-auto object-cover" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default ShipwrecksPage;