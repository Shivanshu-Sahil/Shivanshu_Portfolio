
"use client";
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/Reveal';
import { Sparkle } from '@/components/ui/Sparkle';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Collaborative Whiteboard',
      description: 'A real-time collaborative whiteboard application for brainstorming and design sessions.',
      image: 'https://i.postimg.cc/0y2ss7m3/Vite-React-Google-Chrome-28-12-2025-10-50-17-pm.png',
      technologies: ['React+Vite', 'Socket.io', 'Node.js', 'Canvas API'],
      githubUrl: 'https://github.com/Shivanshu-Sahil/WhiteBoard_Collab',
      liveUrl: 'app/not-found', // This will show your 404 page
      category: 'Collab App',
      date: '2025',
    },
    {
      id: 2,
      title: 'URL Shortener',
      description: 'A modern, full-stack URL shortening service with real-time analytics, user authentication, and beautiful responsive design.',
      image: 'https://i.postimg.cc/2jZjcdFq/for-Real-URL-Google-Chrome.png',
      technologies: ['React', , 'JavaScript', 'Tailwind CSS', 'Supabase'],
      githubUrl: 'https://github.com/Shivanshu-Sahil/forRealURL',
      liveUrl: 'https://realurl.vercel.app/',
      category: 'Full Stack',
      date: '2025',

    },
    {
      id: 3,
      title: 'Flood Risk Assessment',
      description: 'A web application for assessing flood risks using real-time data and predictive modeling.',
      image: 'https://i.postimg.cc/mZFWtBXQ/Flood-Detection-System-Google-Chrome-30-08-2025-1-30-44-pm.png',
      technologies: ['Next.js', 'TypeScript', 'FastAPI', 'Google Generative AI'],
      githubUrl: 'https://github.com/Shivanshu-Sahil/Flood_Assessment',
      liveUrl: 'https://flood-assessment.vercel.app/',
      category: 'Web App',
      date: '2025',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Orb */}
      <div className="floating-orb w-96 h-96 bg-primary/20 bottom-0 -right-48 animate-float-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <Sparkle><span className="gradient-text">Projects</span></Sparkle>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, featuring modern web applications
              built with cutting-edge technologies and best practices.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group h-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="gradient-border gradient-glow-after rounded-3xl p-[1px] h-full group-hover:scale-[1.02] transition-transform duration-500">
                <div className="bg-card/90 backdrop-blur-xl rounded-3xl overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden h-48 shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
                        <Tag size={12} className="mr-1" />
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/90 text-accent-foreground backdrop-blur-sm">
                        <Calendar size={12} className="mr-1" />
                        {project.date}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.5}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more?
              <br />Check out my GitHub for additional projects and contributions.
            </p>
            <Sparkle>
              <motion.a
                href="https://github.com/Shivanshu-Sahil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-border rounded-full text-foreground font-medium hover:glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                View All Projects
              </motion.a>
            </Sparkle>
          </div>
        </Reveal>
      </div>
    </section>
  );
};