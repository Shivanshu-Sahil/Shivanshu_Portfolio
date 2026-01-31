'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Menu, X, Sun, Moon, Home, Code, Briefcase, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ROUTES, NAV_ITEMS } from '@/constants/routes'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  // Use NAV_ITEMS from routes.ts for navigation
  const navItems = NAV_ITEMS.map(item => {
    let icon = Home;
    if (item.name === 'Skills') icon = Code;
    if (item.name === 'Projects') icon = Briefcase;
    if (item.name === 'Contact') icon = Mail;
    return { ...item, icon };
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Scroll to section if href is a hash, otherwise use Link navigation
  const scrollToSection = (href: string) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      const id = href.replace('/#', '#');
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-5 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'backdrop-blur-glass border-b border-primary/20'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link href={ROUTES.HOME} className="flex items-center space-x-3 group">
              {/* Premium Icon Container */}
              <div className="relative w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden gradient-border group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm group-hover:bg-primary/20 transition-colors" />
                <span className="font-heading font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent relative z-10 select-none">SS</span>
              </div>

              {/* Bold Identity */}
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-foreground group-hover:gradient-text transition-all duration-300">
                  BELIEVE
                </span>
                <span className="text-[13px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  BECOME
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isSection = item.href.startsWith('/#') || item.href.startsWith('#');
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {isSection ? (
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-xl transition-all duration-300 relative group"
                    >
                      <Icon size={18} className="transition-transform group-hover:scale-110" />
                      <span className="font-medium">{item.name}</span>
                      <motion.span
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full"
                        whileHover={{ width: "80%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </Button>
                  ) : (
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-xl transition-all duration-300 relative group"
                      >
                        <Icon size={18} className="transition-transform group-hover:scale-110" />
                        <span className="font-medium">{item.name}</span>
                        <motion.span
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full"
                          whileHover={{ width: "80%" }}
                          transition={{ duration: 0.2 }}
                        />
                      </Button>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Controls */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-11 h-11 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-105"
              aria-label="Toggle theme"
            >
              {mounted ? (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />) : <span className="w-5 h-5 inline-block" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-11 h-11 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-105"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden backdrop-blur-glass border-t border-primary/20"
        >
          <div className="py-6 px-4 space-y-3">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isSection = item.href.startsWith('/#') || item.href.startsWith('#');
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : -20
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {isSection ? (
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center space-x-3 w-full justify-start py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300"
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </Button>
                  ) : (
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="flex items-center space-x-3 w-full justify-start py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300"
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.name}</span>
                      </Button>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}