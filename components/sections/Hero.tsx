'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, ExternalLink, EyeClosedIcon, Github, Linkedin, LucideEye, View } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sparkle } from '@/components/ui/Sparkle'
import { ROUTES } from '@/constants/routes'

export function Hero() {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-primary-glow/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left side - Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary font-medium text-lg tracking-wide">Hello, I'm</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <Sparkle intensity="strong">
                <span className="text-gradient">Shivanshu Sahil</span>
              </Sparkle>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-muted-foreground">
              Full Stack Developer
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-none mb-12 leading-relaxed">
              I craft exceptional digital experiences with modern technologies. 
              Passionate about creating scalable applications that make a difference.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16">
              <Sparkle>
                <Button size="lg" className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 animate-glow" asChild>
                  <a href={ROUTES.EXTERNAL.RESUME} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 group-hover:animate-bounce" size={20} />
                    View Resume
                  </a>
                </Button>
              </Sparkle>
              
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="p-6 backdrop-blur-glass border-primary/30 hover:border-primary/50" asChild>
                  <a href={ROUTES.EXTERNAL.GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Github size={24} />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="p-6 backdrop-blur-glass border-primary/30 hover:border-primary/50" asChild>
                  <a href={ROUTES.EXTERNAL.LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin size={24} />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:hidden">
              <motion.button
                onClick={scrollToSkills}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-label="Scroll to skills section"
              >
                <ChevronDown size={32} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110 animate-pulse-glow" />
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-2xl scale-105 animate-float" style={{ animationDelay: '1s' }} />
              
              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden backdrop-blur-glass border border-primary/20 animate-float">
                <Image
                  src="/me.png"
                  alt="Portfolio Profile"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - Desktop only */}
        <motion.div 
          className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={scrollToSkills}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-label="Scroll to skills section"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}