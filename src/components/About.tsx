import { Code, Globe, Rocket, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import developerAvatar from '@/assets/developer-avatar.jpg';

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Passionate about writing scalable, maintainable code"
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Aiming for international internships and opportunities"
    },
    {
      icon: Rocket,
      title: "Job Ready",
      description: "Career-focused with goals set for 2027"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with strong communication"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-gradient-secondary bg-clip-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and visual elements */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Glow effect behind avatar */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-glow-pulse" />
              
              {/* Avatar container with glassmorphism */}
              <div className="relative w-full h-full rounded-full border border-primary/30 bg-card/10 backdrop-blur-sm shadow-glass overflow-hidden">
                <img 
                  src={developerAvatar} 
                  alt="Anouz - Developer Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow animate-float">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center shadow-glow animate-float" style={{ animationDelay: '1s' }}>
                <Rocket className="w-6 h-6 text-secondary-foreground" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-space text-2xl md:text-3xl font-bold text-foreground">
                A passionate <span className="text-primary">20-year-old</span> BIT student
              </h3>
              
              <div className="space-y-4 text-muted-foreground font-inter text-lg leading-relaxed">
                <p>
                  Driven by a passion for <span className="text-secondary font-medium">clean code</span> and 
                  <span className="text-accent font-medium"> scalable systems</span>, I'm on a mission to transform ideas into immersive digital experiences.
                </p>
                
                <p>
                  My journey combines technical excellence with <span className="text-primary font-medium">visual storytelling</span>, 
                  creating web applications that don't just function—they inspire.
                </p>
                
                <p>
                  <span className="text-secondary font-medium">Career Vision:</span> Securing global internships, 
                  building a strong freelancing portfolio, and becoming job-ready by 2027 to make an impact on the international stage.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card 
                    key={highlight.title}
                    className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-space font-semibold text-foreground">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-5" />
    </section>
  );
};