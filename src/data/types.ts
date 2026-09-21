export interface Profile {
  name: string
  displayName: string
  title: string
  tagline: string
  location: string
  email: string
  bio: string
  links: {
    github: string
    linkedin: string
    scholar: string
    resume: string
  }
}

export interface ExperienceItem {
  company: string
  role: string
  location: string
  start: string
  end: string
  bullets: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  location: string
  year: string
  details?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  link?: string
  repo?: string
}

export interface Publication {
  authors: string
  title: string
  venue: string
  year: string
  url?: string
}
