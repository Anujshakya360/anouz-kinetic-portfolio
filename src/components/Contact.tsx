import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anouz.dev@email.com",
      href: "mailto:anouz.dev@email.com",
      color: "text-primary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Globally",
      href: "#",
      color: "text-secondary"
    },
    {
      icon: Phone,
      label: "Available For",
      value: "Freelance & Full-time",
      href: "#",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-primary",
      username: "@anouz-dev"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-secondary",
      username: "anouz-developer"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-accent",
      username: "@anouz_codes"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-space text-5xl md:text-7xl font-bold mb-8">
            Let's Create{' '}
            <span className="text-transparent bg-gradient-accent bg-clip-text">Something Extraordinary</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your vision into a digital reality. Whether it's a groundbreaking web application or an innovative user experience, let's build it together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="font-space text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className={`font-medium ${info.color} group-hover:text-primary transition-colors duration-300`}>
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-space text-lg font-semibold text-foreground mb-4">
                Follow My Journey
              </h4>
              
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`flex items-center gap-4 p-3 rounded-lg bg-card/20 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 group ${social.color}`}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="relative p-10 bg-card/30 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-glow overflow-hidden group">
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="font-space text-3xl font-bold text-foreground mb-4">
                    Start Your Project
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Every great project begins with a conversation
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label 
                        htmlFor="name" 
                        className="text-foreground font-medium text-sm tracking-wide uppercase"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-input/30 backdrop-blur-sm border-primary/20 focus:border-primary focus:shadow-glow transition-all duration-500 h-12 text-lg"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label 
                        htmlFor="email" 
                        className="text-foreground font-medium text-sm tracking-wide uppercase"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-input/30 backdrop-blur-sm border-primary/20 focus:border-primary focus:shadow-glow transition-all duration-500 h-12 text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label 
                      htmlFor="subject" 
                      className="text-foreground font-medium text-sm tracking-wide uppercase"
                    >
                      Project Type
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Web App, Landing Page, E-commerce..."
                      required
                      className="bg-input/30 backdrop-blur-sm border-primary/20 focus:border-primary focus:shadow-glow transition-all duration-500 h-12 text-lg"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label 
                      htmlFor="message" 
                      className="text-foreground font-medium text-sm tracking-wide uppercase"
                    >
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your vision, goals, timeline, and any specific requirements..."
                      required
                      rows={6}
                      className="bg-input/30 backdrop-blur-sm border-primary/20 focus:border-primary focus:shadow-glow transition-all duration-500 resize-none text-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-gradient-accent hover:shadow-accent-glow transition-all duration-500 hover:scale-[1.02] group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <Send className="w-6 h-6 mr-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <span className="text-lg font-semibold">Launch Project</span>
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border border-primary/20">
          <h3 className="font-space text-2xl font-bold text-foreground mb-4">
            Ready to start your project?
          </h3>
          <p className="font-inter text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether it's a complete web application, a landing page, or bringing an innovative idea to life, 
            I'm here to help transform your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Start a Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary/10 hover:shadow-glow transition-all duration-300"
            >
              View My Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-accent rounded-full blur-3xl opacity-10" />
    </section>
  );
};