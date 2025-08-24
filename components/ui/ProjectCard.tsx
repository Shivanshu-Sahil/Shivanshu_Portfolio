'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react'
import { Project } from '@/types/index'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
  duration: 0.6,
  delay: index * 0.1
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group h-full overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <Badge 
              variant={project.status === 'completed' ? 'default' : 'secondary'}
              className="capitalize"
            >
              {project.status}
            </Badge>
          </div>

          {/* Category & Date */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Tag className="h-3 w-3" />
            <span className="capitalize">{project.category.replace('-', ' ')}</span>
            <span>•</span>
            <Calendar className="h-3 w-3" />
            <span>{new Date(project.date).getFullYear()}</span>
          </div>
        </div>

        <CardHeader>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </CardHeader>

        <CardContent>
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="text-xs bg-secondary/30"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="flex w-full gap-2">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                asChild
              >
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            
            {project.liveUrl && (
              <Button
                variant="default"
                size="sm"
                className="flex-1"
                asChild
              >
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live
                </a>
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              className="px-3"
              asChild
            >
              <Link href={ROUTES.PROJECT_DETAIL(project.id)}>
                Details →
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}