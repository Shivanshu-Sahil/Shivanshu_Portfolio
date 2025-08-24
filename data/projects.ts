import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
    longDescription: 'This comprehensive e-commerce platform includes features like product catalog, shopping cart, secure checkout with Stripe integration, user accounts, order tracking, and a complete admin dashboard for inventory management.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe', 'NextAuth.js'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce.vercel.app',
    category: 'web-app',
    date: '2024-01-15',
    featured: true,
    status: 'completed'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking.',
    longDescription: 'Built for teams to manage projects efficiently with features like drag-and-drop kanban boards, real-time collaboration, time tracking, file attachments, and detailed analytics.',
    image: '/projects/task-management.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
    githubUrl: 'https://github.com/yourusername/task-management',
    liveUrl: 'https://your-tasks.vercel.app',
    category: 'web-app',
    date: '2023-11-20',
    featured: true,
    status: 'completed'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.',
    image: '/projects/weather-dashboard.jpg',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather.netlify.app',
    category: 'web-app',
    date: '2023-09-10',
    status: 'completed'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'My personal portfolio website showcasing projects, skills, and experience with modern animations and responsive design.',
    image: '/projects/portfolio.jpg',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourname.dev',
    category: 'web-app',
    date: '2024-02-01',
    status: 'completed'
  }
]

export const featuredProjects = projects.filter(project => project.featured)

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.id === slug)
}

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category)
}