import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Palette, 
  Zap, 
  Users, 
  Brain,
  GitBranch,
  Server,
  Layout,
  Rocket
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Mastery",
      icon: Layout,
      gradient: "bg-gradient-primary",
      skills: [
        "React.js & Ecosystem",
        "TypeScript & JavaScript",
        "Next.js & SSR",
        "Tailwind CSS & Styled Components",
        "State Management (Redux, Zustand)",
        "Performance Optimization"
      ]
    },
    {
      title: "Backend Architecture",
      icon: Server,
      gradient: "bg-gradient-secondary",
      skills: [
        "Node.js & Express.js",
        "MongoDB & Mongoose",
        "RESTful API Design",
        "Authentication & Security",
        "Database Optimization",
        "Microservices Patterns"
      ]
    },
    {
      title: "Development Ecosystem",
      icon: GitBranch,
      gradient: "bg-gradient-accent",
      skills: [
        "Git & Version Control",
        "CI/CD Pipelines",
        "Docker & Containerization",
        "Cloud Deployment (Vercel, AWS)",
        "Testing (Jest, Cypress)",
        "Performance Monitoring"
      ]
    },
    {
      title: "Professional Skills",
      icon: Brain,
      gradient: "bg-gradient-dark",
      skills: [
        "Problem-Solving Mindset",
        "Agile Methodologies",
        "Code Review & Mentoring",
        "Technical Communication",
        "Product Thinking",
        "Continuous Learning"
      ]
    }
  ];

  const certifications = [
    {
      title: "Meta Frontend Developer",
      issuer: "Coursera",
      date: "2024",
      credential: "#",
      color: "text-primary"
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2024",
      credential: "#",
      color: "text-secondary"
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2023",
      credential: "#",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-space text-5xl md:text-7xl font-bold mb-8">
            Technical <span className="text-transparent bg-gradient-primary bg-clip-text">Arsenal</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Mastering the full spectrum of modern web development with precision and creative excellence
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="group relative p-8 bg-card/30 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-700 hover:shadow-glow overflow-hidden"
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <div className={`w-full h-full ${category.gradient}`} />
                </div>

                {/* Category Header */}
                <div className="relative flex items-center gap-6 mb-8">
                  <div className={`${category.gradient} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-space text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="relative space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-4 p-3 rounded-lg bg-muted/5 border border-primary/5 hover:border-primary/20 transition-all duration-300 group/skill"
                      style={{ animationDelay: `${(categoryIndex * 0.15) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-primary opacity-60 group-hover/skill:opacity-100 transition-opacity duration-300" />
                      <span className="font-inter font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="font-space text-3xl font-bold mb-6">
              <span className="text-transparent bg-gradient-secondary bg-clip-text">Certifications</span>
            </h3>
            <div className="w-16 h-1 bg-gradient-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="font-space font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                  {cert.title}
                </h4>
                
                <p className="text-muted-foreground font-inter text-sm mb-2">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className={`${cert.color} font-medium`}>{cert.date}</span>
                  <a 
                    href={cert.credential}
                    className="text-primary hover:text-primary-glow transition-colors duration-300 underline"
                  >
                    View Credential
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <h4 className="font-space text-xl font-semibold text-foreground">
              Want to see more?
            </h4>
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-accent text-accent-foreground font-medium rounded-xl hover:shadow-accent-glow transition-all duration-300 hover:scale-105">
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Download Resume
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-5" />
    </section>
  );
};