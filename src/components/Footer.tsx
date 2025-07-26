import { Code, Heart, Coffee } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-primary/20 bg-gradient-to-t from-background/95 to-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          {/* Main Quote */}
          <div className="space-y-2">
            <h3 className="font-space text-xl font-bold text-foreground">
              Code. Design. Evolve.
            </h3>
            <p className="font-mono text-sm text-muted-foreground">
              // Building the future, one line at a time
            </p>
          </div>

          {/* Crafted with love indicator */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-inter text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of</span>
            <Coffee className="w-4 h-4 text-accent" />
            <span>by Anouz</span>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono">
            <Code className="w-3 h-3" />
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind</span>
            <span>•</span>
            <span>Vite</span>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-primary/10">
            <p className="text-sm text-muted-foreground font-inter">
              © {currentYear} Anouz. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 font-mono mt-2">
              Version 2.0.1 • Built for impact
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-primary rounded-full opacity-30" />
    </footer>
  );
};