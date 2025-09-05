import { Link } from "react-router-dom";
import { Compass, Circle as Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-primary-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>

          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20">
            <Compass className="h-8 w-8 text-accent" />
          </div>
          
          <h1 className="heading-xl mb-4">404</h1>
          <h2 className="heading-md mb-6">Lost at Sea</h2>
          
          <p className="text-foreground/80 mb-8">
            The page you're looking for seems to have drifted into uncharted waters. 
            Let's navigate back to familiar territory.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/80">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" /> Return Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/expeditions">
                <Compass className="mr-2 h-4 w-4" /> Explore Expeditions
              </Link>
            </Button>
          </div>
        </motion.div>
        
        <div className="mt-12 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent z-10"></div>
          <motion.div
            className="relative z-0"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}>

            <img
              src="/images/submarine-404.png"
              alt="Submarine"
              className="mx-auto h-40 opacity-60" />

          </motion.div>
        </div>
      </div>
    </div>);

};

export default NotFoundPage;