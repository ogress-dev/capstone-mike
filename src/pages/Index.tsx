import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center animate-fade-in">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4">
          Michael Wamiti
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-12 font-light">
          Capstone Project Portfolio
        </p>
        <Link to="/capstone">
          <Button size="lg" className="group">
            View Capstone Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
      
      <div className="absolute bottom-8 text-muted-foreground text-sm">
        © 2024 Michael Wamiti
      </div>
    </div>
  );
};

export default Index;
