import { Shipwreck } from "@/types";

export const shipwrecks: Shipwreck[] = [
  {
    id: 1,
    name: "San José Galleon",
    description: "Spanish treasure galleon sunk in 1708 during a battle with British ships, carrying gold, silver, and emeralds from the New World.",
    image: "/images/shipwreck-1.jpg",
    year: 1708,
    location: "Caribbean Sea, near Colombia",
    depth: "600m",
    status: "Explored",
    type: "galleon",
    hasTreasure: true
  },
  {
    id: 2,
    name: "HMS Victory",
    description: "British first-rate warship that sank in a storm in 1744 with all hands and a large cargo of gold coins.",
    image: "/images/shipwreck-2.jpg",
    year: 1744,
    location: "English Channel",
    depth: "100m",
    status: "Partially Explored",
    type: "warship",
    hasTreasure: true
  },
  {
    id: 3,
    name: "Nuestra Señora de Atocha",
    description: "Spanish treasure galleon that sank in a hurricane off the Florida Keys in 1622, carrying copper, silver, gold, and gems.",
    image: "/images/shipwreck-3.jpg",
    year: 1622,
    location: "Florida Keys, USA",
    depth: "55m",
    status: "Explored",
    type: "galleon",
    hasTreasure: true
  },
  {
    id: 4,
    name: "RMS Titanic",
    description: "Famous British passenger liner that sank on its maiden voyage after colliding with an iceberg in 1912.",
    image: "/images/shipwreck-4.jpg",
    year: 1912,
    location: "North Atlantic Ocean",
    depth: "3800m",
    status: "Explored",
    type: "passenger",
    hasTreasure: false
  },
  {
    id: 5,
    name: "USS Monitor",
    description: "Innovative American Civil War ironclad warship that sank in a storm off Cape Hatteras in 1862.",
    image: "/images/shipwreck-5.jpg",
    year: 1862,
    location: "North Carolina, USA",
    depth: "70m",
    status: "Explored",
    type: "warship",
    hasTreasure: false
  },
  {
    id: 6,
    name: "Flor de la Mar",
    description: "Portuguese carrack that sank in a storm in 1511 while carrying plunder from the conquest of Malacca, including the sultan's treasure.",
    image: "/images/shipwreck-6.jpg",
    year: 1511,
    location: "Strait of Malacca",
    depth: "Unknown",
    status: "Unexplored",
    type: "galleon",
    hasTreasure: true
  },
  {
    id: 7,
    name: "SS Central America",
    description: "American sidewheel steamer that sank in a hurricane in 1857 while carrying gold from the California Gold Rush.",
    image: "/images/shipwreck-7.jpg",
    year: 1857,
    location: "Off the Carolina Coast, USA",
    depth: "2200m",
    status: "Explored",
    type: "merchant",
    hasTreasure: true
  },
  {
    id: 8,
    name: "Vasa",
    description: "Swedish warship that sank on its maiden voyage in 1628, remarkably preserved in the cold, brackish waters of the Baltic Sea.",
    image: "/images/shipwreck-8.jpg",
    year: 1628,
    location: "Stockholm Harbor, Sweden",
    depth: "32m",
    status: "Recovered",
    type: "warship",
    hasTreasure: false
  },
  {
    id: 9,
    name: "Merchant Royal",
    description: "English merchant ship that sank in bad weather in 1641, carrying gold, silver, and jewels worth billions in today's values.",
    image: "/images/shipwreck-9.jpg",
    year: 1641,
    location: "Cornish Coast, England",
    depth: "Unknown",
    status: "Unexplored",
    type: "merchant",
    hasTreasure: true
  }
];