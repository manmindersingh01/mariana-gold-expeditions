import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="bg-primary-800 border-primary-700 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? "text-accent fill-accent" : "text-gray-400"
              }`}
            />
          ))}
        </div>
        
        <p className="text-foreground/90 italic mb-6 flex-grow">"{testimonial.comment}"</p>
        
        <div className="flex items-center mt-auto">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-display font-semibold">{testimonial.name}</h4>
            <p className="text-xs text-foreground/70">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;