// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to make the
//  site yours — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Farnaz',
  fullName: 'Farnaz Alizade',
  role: 'Frontend Developer',
  greeting: "I'm Farnaz Alizade",
  headline: { before: 'Frontend', mid: '', accent: 'Developer', after: '' },
  intro: '4+ years of experience in Vue, Nuxt and TypeScript',
  // Put your photo in /public (e.g. /public/me.jpg) and set: photo: '/me.jpg'
  photo: '/me.jpg',
  cv: '', // e.g. '/cv.pdf' (put the file in /public)
  email: 'hello@example.com',
  location: 'Your City, Country',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
  { label: 'CodePen', href: 'https://codepen.io/', icon: 'code' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
]

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  title: 'How I work',
  // Tip: a sentence or two only you could write (how you got into this,
  // what you enjoy, where you're based) does more than any big claim.
  text:
    "I'm a frontend developer and I mostly work with Vue and Nuxt. My favourite part of the job is taking a design file and turning it into something people can actually click through, then sweating the small things: spacing, loading speed, and how it feels on a phone.",
}

export const services = [
  {
    icon: 'layout',
    title: 'Websites & online stores',
    text: 'From a single landing page to a full store, built so your team can update the content themselves.',
  },
  {
    icon: 'pen',
    title: 'Designs into code',
    text: "Send me your Figma file and I'll build it so it looks right on phones, tablets and laptops.",
  },
  {
    icon: 'gauge',
    title: 'Fixing slow sites',
    text: "If your site feels slow or clunky, I'll find out why and fix it.",
  },
]

export const stack = [
  'Vue', 'Nuxt', 'TypeScript', 'JavaScript', 'HTML5', 'CSS / Sass',
  'Tailwind', 'Pinia', 'Vite', 'Vitest', 'Storybook', 'Figma', 'Git',
]

export type Project = {
  title: string
  subtitle: string
  tags: string[]
  href: string
  // One or two short sentences, written for visitors (not developers).
  summary: string
  // 3–4 short highlights, shown with a star before each.
  highlights: string[]
  // Optional screenshot in /public; if empty a styled mockup is drawn.
  image?: string
  mock: 'dashboard' | 'mobile' | 'landing' | 'storefront'
}

export const projects: Project[] = [
  {
    title: 'Farahoush',
    subtitle: 'Smart-Home Brand Website & Store',
    tags: ['Nuxt', 'SSR', 'Headless CMS', 'SEO'],
    href: 'https://farahoush.com',
    mock: 'storefront',
    summary:
      'Website and online store for a smart-home brand. I built it with Nuxt, and their team edits all of the content themselves.',
    highlights: [
      'Pages are prepared on the server, so they open quickly',
      'Every page and translation can be edited without a developer',
      'Works well on phones as well as desktops',
      'Set up so Google can find and understand each page',
    ],
  },
]
