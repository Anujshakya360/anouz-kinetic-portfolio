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
      title: "Frontend Development",
      icon: Layout,
      gradient: "bg-gradient-primary",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "JavaScript/ES6+", level: 85, icon: "🟨" },
        { name: "TypeScript", level: 80, icon: "🔷" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "HTML5/CSS3", level: 90, icon: "🌐" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      gradient: "bg-gradient-secondary",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "⚡" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "REST APIs", level: 85, icon: "🔗" },
        { name: "Authentication", level: 80, icon: "🔐" }
      ]
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      gradient: "bg-gradient-accent",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "📚" },
        { name: "VS Code", level: 95, icon: "💙" },
        { name: "Firebase", level: 75, icon: "🔥" },
        { name: "Vercel", level: 85, icon: "▲" },
        { name: "Postman", level: 80, icon: "📮" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Brain,
      gradient: "bg-gradient-dark",
      skills: [
        { name: "Problem Solving", level: 90, icon: "🧩" },
        { name: "Team Collaboration", level: 85, icon: "🤝" },
        { name: "Fast Learning", level: 95, icon: "🚀" },
        { name: "Communication", level: 80, icon: "💬" },
        { name: "Project Management", level: 75, icon: "📋" }
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
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-6xl font-bold mb-6">
            Skills & <span className="text-transparent bg-gradient-primary bg-clip-text">Expertise</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow group"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`${category.gradient} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-space text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="space-y-2"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-inter font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted/30"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
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