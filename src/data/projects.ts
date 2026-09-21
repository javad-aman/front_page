import type { Project } from './types'

// Placeholder projects — replace description/tags/links with real details.
// `image` is optional: leave it unset and ProjectCard will render a
// gradient placeholder with the project's initial instead.
export const projects: Project[] = [
  {
    id: 'fitness-dashboard',
    title: 'Fitness Dashboard',
    description:
      'A personal analytics dashboard that ingests workout and health data to surface trends, streaks, and progress toward goals.',
    tags: ['React', 'Data Viz', 'Personal'],
    link: '#',
    repo: '#',
  },
  {
    id: 'roma-tribune',
    title: 'Roma Tribune',
    description:
      'A community newsletter platform — content pipeline, subscriber management, and a clean reading experience for a niche audience.',
    tags: ['Newsletter', 'Community', 'Full-Stack'],
    link: '#',
    repo: '#',
  },
  {
    id: 'hire-ready',
    title: 'Hire Ready',
    description:
      'A structured study and interview-prep program designed to help candidates get job-ready for data/ML roles, with tracked progress.',
    tags: ['Education', 'Career', 'Product'],
    link: '#',
    repo: '#',
  },
  {
    id: 'micro-saas-experiments',
    title: 'Micro-SaaS Experiments',
    description:
      'A collection of small, focused SaaS experiments used to test ideas quickly — from landing page to first paying user.',
    tags: ['SaaS', 'Experiments', 'Full-Stack'],
    link: '#',
    repo: '#',
  },
]
