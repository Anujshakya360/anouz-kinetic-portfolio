import { ExternalLink, Github, Database, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectMockup from '@/assets/project-mockup.jpg';

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with user authentication, payment integration, and admin dashboard. Features responsive design and real-time inventory management.",
      image: projectMockup,
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      category: "Full Stack",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: projectMockup,
      tags: ["React", "Firebase", "Tailwind", "Context API"],
      category: "Frontend",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration.",
      image: projectMockup,
      tags: ["React", "Chart.js", "REST API", "Redux"],
      category: "Frontend",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts using external APIs.",
      image: projectMockup,
      tags: ["JavaScript", "OpenWeather API", "CSS3", "HTML5"],
      category: "Frontend",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack":
        return Database;
      case "Frontend":
        return Globe;
      case "Mobile":
        return Smartphone;
      default:
        return Globe;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full Stack":
        return "bg-gradient-primary";
      case "Frontend":
        return "bg-gradient-secondary";
      case "Mobile":
        return "bg-gradient-accent";
      default:
        return "bg-gradient-primary";
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="text-transparent bg-gradient-accent bg-clip-text">Projects</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, demonstrating expertise in modern web technologies and creative problem-solving
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card 
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 overflow-hidden transition-all duration-500 hover:shadow-glow"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with category */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <div className={`${getCategoryColor(project.category)} px-3 py-1 rounded-full flex items-center gap-2`}>
                    {(() => {
                      const Icon = getCategoryIcon(project.category);
                      return <Icon className="w-4 h-4 text-white" />;
                    })()}
                    <span className="text-sm font-medium text-white">{project.category}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-background/80 backdrop-blur-sm">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="w-10 h-10 p-0 bg-primary">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-space text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-6">
          <h3 className="font-space text-2xl font-bold text-center text-foreground mb-8">
            More Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <Card 
                key={project.title}
                className="group bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 p-6 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${getCategoryColor(project.category)} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    {(() => {
                      const Icon = getCategoryIcon(project.category);
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0 text-muted-foreground hover:text-primary">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0 text-muted-foreground hover:text-primary">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <h4 className="font-space text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground font-inter text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="border-primary/20 text-primary text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="outline" className="border-muted text-muted-foreground text-xs">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 px-8"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-10" />
    </section>
  );
};
