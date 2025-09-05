import { Equipment } from "@/types";

export const equipment: Equipment[] = [
  {
    id: 1,
    name: "DeepSea Pro Diving Suit",
    description: "Professional-grade atmospheric diving suit capable of withstanding extreme depths and pressures.",
    image: "/images/equipment-1.jpg",
    category: "diving",
    level: "professional",
    maxDepth: "300m",
    manufacturer: "OceanTech Industries",
    price: 85000
  },
  {
    id: 2,
    name: "Mariana Explorer ROV",
    description: "Remote operated vehicle with 4K cameras, robotic arms, and advanced sonar capabilities for deep-sea exploration.",
    image: "/images/equipment-2.jpg",
    category: "research",
    level: "professional",
    maxDepth: "6000m",
    manufacturer: "Mariana's Gold Tech Division",
    price: 175000
  },
  {
    id: 3,
    name: "Triton 3300/3 Submersible",
    description: "Three-person submersible with acrylic pressure hull providing 360-degree visibility for underwater exploration.",
    image: "/images/equipment-3.jpg",
    category: "submersible",
    level: "professional",
    maxDepth: "1000m",
    manufacturer: "Triton Submarines",
    price: 3500000
  },
  {
    id: 4,
    name: "SonarTech Multi-beam System",
    description: "Advanced sonar mapping system for creating detailed 3D models of the seafloor and underwater structures.",
    image: "/images/equipment-4.jpg",
    category: "research",
    level: "advanced",
    manufacturer: "SonarTech Solutions"
  },
  {
    id: 5,
    name: "DeepWater Rebreather System",
    description: "Closed-circuit rebreather system for extended underwater operations with minimal bubbles and gas consumption.",
    image: "/images/equipment-5.jpg",
    category: "diving",
    level: "advanced",
    maxDepth: "120m",
    manufacturer: "AquaLung Professional",
    price: 12500
  },
  {
    id: 6,
    name: "Underwater Propulsion Vehicle",
    description: "Battery-powered diver propulsion vehicle for efficient underwater navigation and extended range.",
    image: "/images/equipment-6.jpg",
    category: "diving",
    level: "intermediate",
    maxDepth: "200m",
    manufacturer: "SeaGlide Technologies",
    price: 4800
  },
  {
    id: 7,
    name: "Marine Magnetometer",
    description: "Sensitive magnetic detection system for locating ferrous objects buried beneath the seafloor.",
    image: "/images/equipment-7.jpg",
    category: "research",
    level: "intermediate",
    manufacturer: "GeoSense Marine",
    price: 28000
  },
  {
    id: 8,
    name: "Underwater Excavation System",
    description: "Precision underwater excavation tools for archaeological sites, including airlift and water dredge systems.",
    image: "/images/equipment-8.jpg",
    category: "recovery",
    level: "advanced",
    manufacturer: "Marine Archaeology Tools",
    price: 35000
  },
  {
    id: 9,
    name: "Deep Ocean Lighting Array",
    description: "High-intensity LED lighting system for illuminating the depths during photography and filming operations.",
    image: "/images/equipment-9.jpg",
    category: "imaging",
    level: "intermediate",
    maxDepth: "3000m",
    manufacturer: "DeepSea Illumination",
    price: 8500
  }
];