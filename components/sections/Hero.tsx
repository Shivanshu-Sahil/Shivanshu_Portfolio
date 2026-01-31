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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background - Floating Orbs */}
      <div className="floating-orb w-[500px] h-[500px] bg-gradient-to-br from-primary/25 to-accent/15 top-10 -left-60 animate-float-slow" />
      <div className="floating-orb w-[400px] h-[400px] bg-gradient-to-tr from-accent/20 to-primary/10 bottom-10 -right-52 animate-float-slower" />
      <div className="floating-orb w-72 h-72 bg-primary/15 top-1/3 left-1/4 animate-float-slower" />

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Left side - Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Available for work badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for work</span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-primary font-medium text-lg tracking-wide">Hello, I'm</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <Sparkle intensity="strong">
                <span className="gradient-text glow-text">Shivanshu Sahil</span>
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
                <motion.a
                  href={ROUTES.EXTERNAL.RESUME}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-8 py-3 rounded-full text-black font-bold text-lg shadow-glow hover:shadow-floating transition-all duration-300 hover:opacity-90"
                  style={{ backgroundImage: 'var(--gradient-primary)' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </motion.a>
              </Sparkle>

              <div className="flex gap-4">
                <motion.a
                  href={ROUTES.EXTERNAL.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 glass rounded-xl hover:glow transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href={ROUTES.EXTERNAL.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 glass rounded-xl hover:glow transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-2xl -z-10 animate-pulse-glow" />

              {/* Image container with gradient border */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden gradient-border p-1 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
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