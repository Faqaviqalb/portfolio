// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to make the
//  site yours — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Farnaz',
  fullName: 'Farnaz Alizade',
  role: 'Frontend Developer',
  greeting: "Hello, I'm Farnaz",
  headline: { before: 'Frontend Developer', mid: 'Building', accent: 'Delightful', after: 'Web Experiences' },
  intro:
    'I turn designs and ideas into fast, accessible and pixel-perfect interfaces — with Vue, Nuxt and TypeScript at the heart of my toolkit.',
  // Put your photo in /public (e.g. /public/me.jpg) and set: photo: '/me.jpg'
  photo: '',
  cv: '', // e.g. '/cv.pdf' — put the file in /public
  email: 'hello@example.com',
  location: 'Your City, Country',
  available: true,
  badgeWords: 'CLEAN CODE • ACCESSIBLE • PERFORMANT • ',
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
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  quote: 'Great interfaces aren’t just seen — they’re felt.',
  text:
    "I'm a frontend developer with 5+ years of experience building user-centred web apps for startups and product teams. I care about the details: smooth interactions, semantic markup, design systems that scale and Lighthouse scores in the green.",
  stats: [
    { icon: 'calendar', value: '5+', label: 'Years Experience' },
    { icon: 'briefcase', value: '40+', label: 'Projects Shipped' },
    { icon: 'users', value: '20+', label: 'Happy Clients' },
    { icon: 'gauge', value: '95+', label: 'Avg. Lighthouse Score' },
  ],
}

export const services = [
  {
    icon: 'layout',
    title: 'Web Applications',
    text: 'Scalable SPAs and SSR apps with Vue & Nuxt — clean architecture, typed end to end.',
  },
  {
    icon: 'pen',
    title: 'Design to Code',
    text: 'Pixel-perfect, responsive implementation of Figma designs with delightful motion.',
  },
  {
    icon: 'layers',
    title: 'Design Systems',
    text: 'Reusable, documented component libraries that keep teams fast and consistent.',
  },
  {
    icon: 'gauge',
    title: 'Performance & a11y',
    text: 'Core Web Vitals tuning and WCAG-compliant, inclusive interfaces for everyone.',
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
  repo?: string
  // Optional screenshot in /public; if empty a styled mockup is drawn.
  image?: string
  mock: 'dashboard' | 'mobile' | 'landing'
}

export const projects: Project[] = [
  {
    title: 'Ledgerly',
    subtitle: 'Finance Dashboard',
    tags: ['Nuxt', 'TypeScript', 'Charts'],
    href: '#',
    repo: '#',
    mock: 'dashboard',
  },
  {
    title: 'Greenleaf',
    subtitle: 'Mobile Banking PWA',
    tags: ['Vue', 'PWA', 'Pinia'],
    href: '#',
    repo: '#',
    mock: 'mobile',
  },
  {
    title: 'Havenly',
    subtitle: 'Interior Studio Website',
    tags: ['Nuxt', 'GSAP', 'SEO'],
    href: '#',
    repo: '#',
    mock: 'landing',
  },
]

export const testimonials = [
  {
    quote:
      'Farnaz turned our complex dashboard designs into a fast, polished product. Her attention to detail and communication were outstanding.',
    name: 'James Carter',
    role: 'CTO, Ledgerly',
  },
  {
    quote:
      'Our Lighthouse scores went from orange to green across the board. She is a rare developer who cares about design and performance equally.',
    name: 'Sophia Bennett',
    role: 'Product Manager, Greenleaf',
  },
  {
    quote:
      'The component library she built is still the backbone of our product. Clean, documented and a joy to work with.',
    name: 'Liam Chen',
    role: 'Design Lead, Havenly',
  },
]
