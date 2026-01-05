"use client";
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { Sparkle } from '@/components/ui/Sparkle';
import {
  Code2,
  Database,
  Server,
  Monitor,
  Cloud,
  GitBranch,
  Settings,
  Palette,
  Cpu,
  Zap,
  Globe,
  Smartphone,
  FileCode,
  Workflow,
  Terminal,
  Container,
  Layers3,
  Braces,
  Package,
  CloudCog,
  Sparkles
} from 'lucide-react';

export const Skills = () => {
  const skills = [
    { category: 'Programming Languages', icon: Code2, techs: ['C++', 'JavaScript', 'TypeScript', 'Python', 'SQL'] },
    { category: 'Frontend', icon: Palette, techs: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'] },
    { category: 'Backend', icon: Server, techs: ['Node.js', 'Express.js', 'FastAPI', 'Socket.IO', 'Supabase'] },
    { category: 'Tools & Databases', icon: Settings, techs: ['GitHub', 'Vercel', 'Render', 'MongoDB', 'MySQL'] },
  ];

  const techIcons = {
    // Programming Languages
    'C++': Braces,
    'JavaScript': FileCode,
    'TypeScript': FileCode,
    'Python': Code2,
    'SQL': Database,
    // Frontend
    'Next.js': Zap,
    'React.js': Code2,
    'Tailwind CSS': Palette,
    'Framer Motion': Sparkles,
    'HTML/CSS': Globe,
    // Backend
    'Node.js': Terminal,
    'Express.js': Server,
    'FastAPI': Zap,
    'Socket.IO': Workflow,
    'Supabase': Layers3,
    // Tools & Databases
    'GitHub': GitBranch,
    'Vercel': CloudCog,
    'Render': Globe,
    'MongoDB': Database,
    'MySQL': Container,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Orb */}
      <div className="floating-orb w-72 h-72 bg-accent/20 top-1/2 -left-36 animate-float-slower" />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <Sparkle><span className="gradient-text">Skills</span></Sparkle>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of the technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </Reveal>

        <div className="space-y-16">
          {skills.map((skillGroup, groupIndex) => {
            const CategoryIcon = skillGroup.icon;
            return (
              <Reveal key={skillGroup.category} delay={groupIndex * 0.1}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3 gradient-text">
                    <CategoryIcon size={28} className="text-primary" />
                    {skillGroup.category}
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skillGroup.techs.map((tech, techIndex) => {
                      const TechIcon = techIcons[tech as keyof typeof techIcons] || Code2;
                      return (
                        <motion.div
                          key={tech}
                          className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:glow"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: techIndex * 0.05,
                            type: "spring",
                            stiffness: 150
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <div className="flex flex-col items-center space-y-3">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <TechIcon size={24} className="text-primary" />
                            </div>
                            <span className="text-sm font-medium text-center">{tech}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Technical Highlights */}
        {/*
        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '5+', label: 'Years Experience' },
                { number: '20+', label: 'Technologies' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
        */}
      </div>
    </section>
  );
};