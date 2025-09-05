export interface Expedition {
  id: number;
  name: string;
  description: string;
  image: string;
  date: string;
  location: string;
  duration: string;
  spots: number;
  price: number;
  status: "upcoming" | "active" | "completed";
  type: string;
}

export interface Shipwreck {
  id: number;
  name: string;
  description: string;
  image: string;
  year: number;
  location: string;
  depth: string;
  status: string;
  type: string;
  hasTreasure: boolean;
}

export interface Equipment {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  level: string;
  maxDepth?: string;
  manufacturer?: string;
  price?: number;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  department: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
}