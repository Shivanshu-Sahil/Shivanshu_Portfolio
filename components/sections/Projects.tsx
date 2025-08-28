
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
      title: 'AI-Powered Dashboard',
      description: 'A comprehensive analytics dashboard with AI insights, real-time data visualization, and predictive analytics for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Python', 'TensorFlow', 'D3.js'],
      githubUrl: 'https://github.com/alexjohnson/ai-dashboard',
      liveUrl: 'https://ai-dashboard-demo.vercel.app',
      category: 'Full Stack',
      date: '2024',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced filtering, payment integration, inventory management, and admin panel.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'Tailwind'],
      githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      category: 'Web App',
      date: '2023',
    },
    {
      id: 3,
      title: 'Social Media Analytics',
      description: 'Track and analyze social media performance across multiple platforms with detailed reporting and insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
      githubUrl: 'https://github.com/alexjohnson/social-analytics',
      liveUrl: 'https://social-analytics-demo.vercel.app',
      category: 'Analytics',
      date: '2023',
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates, team collaboration, and project tracking features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux', 'PWA'],
      githubUrl: 'https://github.com/alexjohnson/task-manager',
      liveUrl: 'https://task-manager-demo.vercel.app',
      category: 'Productivity',
      date: '2023',
    },
    {
      id: 5,
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency price tracking with portfolio management, alerts, and market analysis tools.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
      technologies: ['React', 'CoinGecko API', 'Charts.js', 'LocalStorage'],
      githubUrl: 'https://github.com/alexjohnson/crypto-tracker',
      liveUrl: 'https://crypto-tracker-demo.vercel.app',
      category: 'Finance',
      date: '2022',
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with detailed forecasts, interactive maps, and location-based suggestions.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'OpenWeather API', 'AsyncStorage', 'Maps'],
      githubUrl: 'https://github.com/alexjohnson/weather-app',
      liveUrl: 'https://weather-app-demo.vercel.app',
      category: 'Mobile',
      date: '2022',
    },
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