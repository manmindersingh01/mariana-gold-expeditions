import { Calendar1 as Calendar, MapPin, Clock, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Expedition } from "@/types";

interface ExpeditionCardProps {
  expedition: Expedition;
}

const ExpeditionCard = ({ expedition }: ExpeditionCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-secondary/20 text-secondary";
      case "active":
        return "bg-green-500/20 text-green-500";
      case "completed":
        return "bg-accent/20 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="bg-primary-700 border-primary-600 overflow-hidden h-full flex flex-col transition-transform hover:scale-[1.02] duration-300">
      <div className="relative">
        <img
          src={expedition.image}
          alt={expedition.name}
          className="w-full h-48 object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <Badge className={getStatusColor(expedition.status)}>
            {expedition.status === "upcoming" ? "Upcoming" :
            expedition.status === "active" ? "Active" : "Completed"}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 flex-grow">
        <h3 className="font-display text-xl font-semibold mb-3">{expedition.name}</h3>
        <p className="text-sm text-foreground/80 mb-4">{expedition.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-accent" />
            <span>{expedition.date}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-accent" />
            <span>{expedition.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-accent" />
            <span>{expedition.duration}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-accent" />
            <span>{expedition.spots} spots available</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 border-t border-primary-600 mt-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <span className="text-xs text-foreground/70">Starting from</span>
            <p className="font-display text-xl font-semibold text-accent">${expedition.price}</p>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
            Details <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>);

};

export default ExpeditionCard;