import { Anchor, Calendar1 as Calendar, MapPin, Droplet } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shipwreck } from "@/types";

interface ShipwreckCardProps {
  shipwreck: Shipwreck;
}

const ShipwreckCard = ({ shipwreck }: ShipwreckCardProps) => {
  return (
    <Card className="bg-primary-800 border-primary-700 overflow-hidden h-full flex flex-col group transition-all duration-300 hover:border-secondary/50">
      <div className="relative overflow-hidden">
        <img
          src={shipwreck.image}
          alt={shipwreck.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <Badge className="bg-secondary/20 text-secondary">
            {shipwreck.type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 flex-grow">
        <h3 className="font-display text-xl font-semibold mb-3">{shipwreck.name}</h3>
        <p className="text-sm text-foreground/80 mb-4">{shipwreck.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-secondary" />
            <span>Sunk in {shipwreck.year}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-secondary" />
            <span>{shipwreck.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Droplet className="h-4 w-4 mr-2 text-secondary" />
            <span>Depth: {shipwreck.depth}</span>
          </div>
          <div className="flex items-center text-sm">
            <Anchor className="h-4 w-4 mr-2 text-secondary" />
            <span>Status: {shipwreck.status}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 border-t border-primary-700 mt-4">
        <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
          View Details
        </Button>
      </CardFooter>
    </Card>);

};

export default ShipwreckCard;