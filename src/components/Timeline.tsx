import { Calendar, Trophy, Target, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Timeline = () => {
  const milestones = [
    {
      year: "2023",
      title: "Foundation Year",
      description: "Started BIT degree and discovered passion for full-stack development",
      icon: Calendar,
      status: "completed",
      achievements: ["First React project", "JavaScript fundamentals", "Git workflow mastery"]
    },
    {
      year: "2024",
      title: "Skill Development",
      description: "Built comprehensive MERN stack expertise and freelance portfolio",
      icon: Trophy,
      status: "current",
      achievements: ["10+ Complete projects", "MERN stack certification", "Freelance clients"]
    },
    {
      year: "2025",
      title: "Professional Growth",
      description: "Expand network, contribute to open source, and gain industry experience",
      icon: Target,
      status: "planned",
      achievements: ["Open source contributions", "Tech community involvement", "Advanced certifications"]
    },
    {
      year: "2026-2027",
      title: "Global Impact",
      description: "Secure international opportunities and establish industry presence",
      icon: Rocket,
      status: "vision",
      achievements: ["Global internships", "Industry recognition", "Full-time placement"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-gradient-primary";
      case "current":
        return "bg-gradient-secondary";
      case "planned":
        return "bg-gradient-accent";
      case "vision":
        return "bg-gradient-dark";
      default:
        return "bg-gradient-primary";
    }
  };

  const getStatusBorder = (status: string) => {
    switch (status) {
      case "completed":
        return "border-primary/30";
      case "current":
        return "border-secondary/30";
      case "planned":
        return "border-accent/30";
      case "vision":
        return "border-muted/30";
      default:
        return "border-primary/30";
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-space text-5xl md:text-7xl font-bold mb-8">
            Growth <span className="text-transparent bg-gradient-secondary bg-clip-text">Trajectory</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A strategic roadmap to becoming a globally recognized full-stack developer
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 opacity-30" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${isEven ? 'text-right' : 'text-left'}`}>
                    <Card className={`p-8 bg-card/40 backdrop-blur-xl border ${getStatusBorder(milestone.status)} hover:border-primary/40 transition-all duration-700 hover:shadow-glow group`}>
                      <div className={`flex items-center gap-4 mb-6 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`${getStatusColor(milestone.status)} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-space text-2xl font-bold text-foreground mb-1">
                            {milestone.title}
                          </h3>
                          <div className="font-mono text-lg text-primary font-semibold">
                            {milestone.year}
                          </div>
                        </div>
                      </div>
                      
                      <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      <div className="space-y-2">
                        {milestone.achievements.map((achievement) => (
                          <div 
                            key={achievement}
                            className={`flex items-center gap-3 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                            <span className="font-inter text-sm text-foreground">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary shadow-glow z-10">
                    <div className="absolute inset-1 rounded-full bg-gradient-primary animate-glow-pulse" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-accent rounded-full blur-3xl opacity-10" />
    </section>
  );
};