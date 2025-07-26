import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Inc.",
      content: "Anouz delivered exceptional work on our e-commerce platform. His attention to detail and modern approach to UI/UX exceeded our expectations. The clean code and scalable architecture made future updates seamless.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "Working with Anouz was a game-changer for our MVP. His full-stack expertise and creative problem-solving helped us launch 2 weeks ahead of schedule. Highly recommend for any serious web development project.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Tech Lead",
      company: "Digital Dynamics",
      content: "Anouz brings a rare combination of technical skill and creative vision. His React components are reusable masterpieces, and his backend solutions are robust and scalable. A true professional.",
      rating: 5,
      avatar: "ET"
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "NextGen Solutions",
      content: "Impressed by Anouz's ability to understand complex requirements and translate them into elegant solutions. His code quality and documentation standards are exceptional for someone at his career stage.",
      rating: 5,
      avatar: "DK"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-space text-5xl md:text-7xl font-bold mb-8">
            Client <span className="text-transparent bg-gradient-accent bg-clip-text">Stories</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Building trust through exceptional delivery and lasting partnerships
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <Card className="p-12 bg-card/40 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-glow relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-50" />
            
            {/* Quote icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center opacity-20">
              <Quote className="w-8 h-8 text-white" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-8 justify-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="font-inter text-xl md:text-2xl text-foreground leading-relaxed text-center mb-12 max-w-4xl mx-auto">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="font-space font-bold text-white text-lg">
                    {currentTestimonial.avatar}
                  </span>
                </div>
                <div className="text-center">
                  <div className="font-space text-xl font-bold text-foreground">
                    {currentTestimonial.name}
                  </div>
                  <div className="font-inter text-muted-foreground">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary shadow-glow' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="w-12 h-12 rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`p-6 bg-card/20 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-500 cursor-pointer group ${
                index === currentIndex ? 'border-primary/50 shadow-glow' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center">
                  <span className="font-space font-bold text-white text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-space font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="font-inter text-muted-foreground text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="font-inter text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {testimonial.content}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-10" />
    </section>
  );
};