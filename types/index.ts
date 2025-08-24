import { LucideIcon } from 'lucide-react'

// Project types
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  category: ProjectCategory
  date: string
  featured?: boolean
  status: 'completed' | 'in-progress' | 'planned'
}

export type ProjectCategory = 
  | 'web-app' 
  | 'mobile-app' 
  | 'desktop-app' 
  | 'library' 
  | 'tool' 
  | 'other'



// Experience types
export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
  companyUrl?: string
  logo?: string
}

// Contact types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactInfo {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

// Navigation types
export interface NavItem {
  name: string
  href: string
  icon?: LucideIcon
  external?: boolean
}


// API response types
export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

// Animation types
export interface AnimationVariants {
  hidden: object
  visible: object
}

// Metadata types for SEO
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}