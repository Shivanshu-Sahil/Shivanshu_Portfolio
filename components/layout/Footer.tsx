'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { FOOTER_LINKS } from '@/constants/routes'
import { Sparkle } from '@/components/ui/Sparkle'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:grid md:grid-cols-3 items-center gap-6"
        >
          {/* Left Section - Brand + Social + Made with */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gradient mb-2">
                Shivanshu Sahil
              </h3>
            </div>

            {/* Made with sparkles */}
            <div className="flex items-center gap-2 text-md text-muted-foreground">
              <span>Created with</span>
              <Sparkle intensity="light">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="h-5 w-5 text-primary fill-primary/20" />
                </motion.div>
              </Sparkle>
            </div>
          </div>


          {/* Center Section - Copyright */}
          <div className="text-md text-muted-foreground text-center">
            <p>© {currentYear} Shivanshu Sahil. All rights reserved.</p>
          </div>

          {/* Right Section - Social Icons */}
          <div className="hidden md:flex justify-end items-center space-x-3">
            {FOOTER_LINKS.SOCIAL.map((link, index) => {
              const iconMap = {
                GitHub: Github,
                LinkedIn: Linkedin,
                Mail: Mail,
              }
              const Icon = iconMap[link.name as keyof typeof iconMap] || Mail

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}