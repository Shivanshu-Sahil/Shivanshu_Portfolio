
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
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience.',
      image: 'https://i.postimg.cc/fL07r65j/Shivanshu-Sahil-Portfolio-Google-Chrome-28-08-2025-2-25-52-pm.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/Shivanshu-Sahil/Shivanshu_Portfolio',
      liveUrl: 'https://shivanshuportfolio-ten.vercel.app/',
      category: 'Full Stack',
      date: '2025',
    },
    {
      id: 2,
      title: 'Collaborative Whiteboard',
      description: 'A real-time collaborative whiteboard application for brainstorming and design sessions.',
      image: 'https://i.postimg.cc/k4dtXrGX/Vite-React-Google-Chrome-28-08-2025-7-08-15-pm.png',
      technologies: ['React+Vite', 'Socket.io', 'Node.js', 'Canvas API'],
      githubUrl: 'https://github.com/Shivanshu-Sahil/WhiteBoard_Collab',
      liveUrl: 'app/not-found', // This will show your 404 page
      category: 'Collab App',
      date: '2025',
    },
    {
      id: 3,
      title: 'Flood Risk Assessment',
      description: 'A web application for assessing flood risks using real-time data and predictive modeling.',
      image: 'https://i.postimg.cc/mZFWtBXQ/Flood-Detection-System-Google-Chrome-30-08-2025-1-30-44-pm.png',
      technologies: ['Next.js','TypeScript','FastAPI','Google Generative AI'],
      githubUrl: 'https://github.com/Shivanshu-Sahil/Flood_Assessment',
      liveUrl: 'https://task-manager-demo.vercel.app',
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
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <Sparkle><span className="text-gradient">Projects</span></Sparkle>
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
              className="group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="backdrop-blur-glass rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
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

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 border-primary/30 hover:border-primary/50" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live
                      </a>
                    </Button>
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
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary/50" asChild>
                <a href="https://github.com/Shivanshu-Sahil" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  View All Projects
                </a>
              </Button>
            </Sparkle>
          </div>
        </Reveal>
      </div>
    </section>
  );
};