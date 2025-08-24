/**
 * Centralized route management for type-safe navigation
 * This prevents hardcoding routes throughout the application
 */

export const ROUTES = {
  // Main pages
  HOME: '/',
  SKILLS: '/#skills',
  PROJECTS: '/projects',
  CONTACT: '/#contact',
  PROJECT_DETAIL: (slug: string) => `/projects/${slug}`,
  API: {
    CONTACT: '/api/contact',
    PROJECTS: '/api/projects',
  },
  EXTERNAL: {
    GITHUB: 'https://github.com/Shivanshu-Sahil',
    LINKEDIN: 'https://www.linkedin.com/in/shivanshu-sahil/',
    TWITTER: 'https://twitter.com/yourusername',
    RESUME: '/resume.pdf',
  }
} as const;

export const NAV_ITEMS = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'Skills', href: ROUTES.SKILLS },
  { name: 'Projects', href: ROUTES.PROJECTS },
  { name: 'Contact', href: ROUTES.CONTACT },
] as const;

export const FOOTER_LINKS = {
  SOCIAL: [
    { name: 'GitHub', href: ROUTES.EXTERNAL.GITHUB },
    { name: 'LinkedIn', href: ROUTES.EXTERNAL.LINKEDIN },
    { name: 'Twitter', href: ROUTES.EXTERNAL.TWITTER },
  ],
  LEGAL: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]
} as const;

export type RouteParams = {
  projectSlug: string;
};