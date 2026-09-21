import type { Project } from './types'

// `image` is optional: leave it unset and ProjectCard will render a themed
// illustration instead (see ProjectThumbnails.tsx). `repo`/`link` are
// optional too — omit either if it doesn't apply yet.
export const projects: Project[] = [
  {
    id: 'fitness-dashboard',
    title: 'Fitness Dashboard',
    description:
      'A personal analytics dashboard that ingests workout and health data to surface trends, streaks, and progress toward goals.',
    tags: ['Python', 'Data Viz', 'Personal'],
    repo: 'https://github.com/javad-aman/Fijjness',
  },
  {
    id: 'roma-tribune',
    title: 'Roma Tribune',
    description:
      'An English-language AS Roma newsletter on Substack, with an AI-assisted weekly pipeline that gathers, translates, and drafts Giallorossi news from Italian sources.',
    tags: ['Newsletter', 'AI Pipeline', 'Python'],
    repo: 'https://github.com/javad-aman/roma_tribune',
  },
  {
    id: 'hire-ready',
    title: 'Hire Ready',
    description:
      'A structured study and interview-prep program designed to help candidates get job-ready for data/ML roles, with tracked progress.',
    tags: ['Education', 'Career', 'Python'],
    repo: 'https://github.com/javad-aman/job_hunter',
  },
  {
    id: 'micro-saas-experiments',
    title: 'Micro-SaaS Experiments',
    description:
      'A collection of small, focused SaaS experiments used to test ideas quickly — from landing page to first paying user.',
    tags: ['SaaS', 'Experiments', 'Full-Stack'],
  },
]
