// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to make the
//  site yours — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Farnaz',
  fullName: 'Farnaz Alizade',
  // The letter in the logo (kept the same in every language).
  monogram: 'F',
  role: 'Frontend Developer',
  greeting: "I'm Farnaz Alizade",
  headline: { before: 'Frontend', mid: '', accent: 'Developer', after: '' },
  intro: '3+ years of frontend experience, mostly with Vue, Nuxt and TypeScript',
  // Put your photo in /public (e.g. /public/me.jpg) and set: photo: '/me.jpg'
  photo: '/me.jpg',
  cv: '', // e.g. '/cv.pdf' (put the file in /public)
  email: 'Farnaaz.alizade@gmail.com',
  location: 'Remote',
}

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farnaz-alizade-769325231/', icon: 'linkedin' },
]

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
]

export const about = {
  title: 'How I work',
  // Tip: a sentence or two only you could write (how you got into this,
  // what you enjoy, where you're based) does more than any big claim.
  text:
    "I'm a frontend developer and I mostly work with Vue and Nuxt. My favourite part of the job is taking a design and turning it into something people can actually click through.",
}

export const services = [
  {
    icon: 'layout',
    title: 'Websites & online stores',
    text: 'From a simple page to a full store, built so your team can update the content themselves.',
  },
  {
    icon: 'code',
    title: 'Responsive layouts',
    text: "I'll build your site so it looks right on phones, tablets and laptops.",
  },
  {
    icon: 'gauge',
    title: 'Fixing slow sites',
    text: "If your site feels slow or clunky, I'll find out why and fix it.",
  },
]

export const stack = [
  'Vue', 'Nuxt', 'TypeScript', 'JavaScript', 'HTML5', 'CSS / Sass',
  'Tailwind', 'Pinia', 'Vite', 'Vitest', 'Storybook', 'Git',
]

export type Shot = {
  src: string
  alt: string
  caption?: string
  // Phone-sized screenshot (shown in a narrow phone frame).
  mobile?: boolean
}

export type CaseStudySection = {
  title: string
  body: string[]
  points?: string[]
  shots?: Shot[]
}

export type CaseStudy = {
  // Short facts shown under the title.
  facts: { label: string; value: string }[]
  // Shown in place of screenshots for private projects.
  privateNote?: string
  overview: string[]
  sections: CaseStudySection[]
}

export type Project = {
  // Used for the case-study URL: /projects/<slug>
  slug: string
  title: string
  subtitle: string
  tags: string[]
  // Leave out for private/internal projects; the card then has no live-site link.
  href?: string
  // One or two short sentences, written for visitors (not developers).
  summary: string
  // 3–4 short highlights, shown with a star before each.
  highlights: string[]
  // Optional screenshot in /public; if empty a styled mockup is drawn.
  image?: string
  mock: 'dashboard' | 'mobile' | 'landing' | 'storefront'
  caseStudy: CaseStudy
}

// Screenshots live in /public/projects/<slug>/. To add your own for the
// private projects, drop the files there and list them in `shots`.
export const projects: Project[] = [
  {
    slug: 'smart-home-app',
    title: 'Farahoush Smart Home App',
    subtitle: 'Installable Smart-Home Control App (PWA)',
    tags: ['Vue 3', 'TypeScript', 'MQTT', 'PWA', 'Pinia', 'i18n'],
    image: '/projects/smart-home-app/home.jpg',
    mock: 'mobile',
    summary:
      'The app people use to run their Farahoush smart home from their phone. Lights, curtains, thermostats, door locks, valves and TV remotes all respond in real time, and it installs like a native app.',
    highlights: [
      'Controls 40+ kinds of devices, from smart switches and thermostats to garage doors and elevators',
      'Devices react instantly, with live status sent back from the home',
      'Add a new device by scanning the QR code on its box',
      'Scenes, schedules, PIN-locked actions and six languages',
    ],
    caseStudy: {
      facts: [
        { label: 'Role', value: 'Frontend developer' },
        { label: 'Type', value: 'Installable web app (PWA)' },
        { label: 'Platforms', value: 'iPhone, Android and desktop' },
        { label: 'Languages', value: 'English, Persian, Arabic, Russian, Turkish, Uzbek' },
      ],
      privateNote: 'This app is only available to Farahoush customers, so there is no public link.',
      overview: [
        'Farahoush makes smart-home hardware: touch switches, thermostats, curtain motors, door locks, valves, relays and more. This app is the remote control for all of it. Homeowners sign in, see every room in their house and control each device from their phone, wherever they are.',
        'It is a web app that installs to the home screen like a native one, so a single codebase serves iPhone, Android and desktop users.',
      ],
      sections: [
        {
          title: 'One control screen for every kind of device',
          body: [
            'Each device type gets its own control screen designed around what it does, rather than a generic on/off button. A thermostat has a round temperature dial, a curtain has open, close and position controls, and lights can have their colour picked.',
          ],
          points: [
            'Touch switches, smart sockets and multi-channel relays',
            'Thermostats, evaporative coolers and air-conditioner remotes',
            'Curtains, door locks, garage doors and elevators',
            'Water and gas valves, smart bathroom controls and IR remotes',
          ],
          shots: [
            { src: '/projects/smart-home-app/devices.jpg', alt: 'Device list with a four-channel light switch open beside it', caption: 'Four-channel light switch' },
            { src: '/projects/smart-home-app/mobile-switch.jpg', alt: 'Light switch controls on a phone', caption: 'The same switch on a phone', mobile: true },
          ],
        },
        {
          title: 'Real-time control',
          body: [
            'The app talks to the home over MQTT, a lightweight messaging protocol made for connected devices. When you tap a switch the command reaches the device right away, and the device reports its new state back, so the screen always shows what is really happening in the house, even if someone changed it from the wall switch.',
          ],
          shots: [
            { src: '/projects/smart-home-app/home.jpg', alt: 'Home screen with local weather, room filters and device cards, with an evaporative cooler open beside it', caption: 'Home screen with an evaporative cooler open' },
          ],
        },
        {
          title: 'Rooms, scenarios and schedules',
          body: [
            'Devices are grouped by room, and the home screen shows the local weather alongside them. Scenarios let people trigger several devices at once ("Good night" turns off the lights and closes the curtains), and schedules run them automatically at set times.',
            'Sensitive actions, such as unlocking a door, can be protected with a PIN.',
          ],
          shots: [
            { src: '/projects/smart-home-app/rooms.jpg', alt: 'Room list with photos, and the editor for the bathroom room', caption: 'Rooms, each with its own photo' },
            { src: '/projects/smart-home-app/scenarios.jpg', alt: 'Scenario list with the "Leaving home" scenario open for editing', caption: 'Editing the "Leaving home" scenario' },
            { src: '/projects/smart-home-app/mobile-room.jpg', alt: 'Bathroom room with its devices on a phone', caption: 'A room on a phone', mobile: true },
          ],
        },
        {
          title: 'Easy setup, in six languages',
          body: [
            'Adding a new device is as simple as scanning the QR code on its box. People can sign up with their mobile number (with a one-time code) or with email.',
            'The interface is translated into six languages, and time zones are detected automatically, so schedules run at the right local time.',
          ],
        },
        {
          title: 'Light and dark, on every screen size',
          body: [
            'The frosted-glass interface comes in light and dark themes. On a desktop the menu sits at the side and devices open in a panel next to the list; on a phone the menu moves to a bottom tab bar and each device opens full screen.',
          ],
          shots: [
            { src: '/projects/smart-home-app/home-dark.jpg', alt: 'Home screen in dark mode', caption: 'Dark mode' },
            { src: '/projects/smart-home-app/mobile-home.jpg', alt: 'Home screen on a phone in light mode', caption: 'Home on a phone', mobile: true },
            { src: '/projects/smart-home-app/mobile-home-dark.jpg', alt: 'Home screen on a phone in dark mode', caption: 'Home in dark mode', mobile: true },
          ],
        },
      ],
    },
  },
  {
    slug: 'farahoush',
    title: 'Farahoush',
    subtitle: 'Smart-Home Brand Website',
    tags: ['Nuxt', 'SSR', 'Headless CMS', 'SEO'],
    href: 'https://farahoush.com',
    image: '/projects/farahoush/home.webp',
    mock: 'storefront',
    summary:
      'Website for a smart-home brand, with a product catalogue, blog and support centre. I built it with Nuxt, and their team edits all of the content themselves.',
    highlights: [
      'Pages are prepared on the server, so they open quickly',
      'Every page and translation can be edited without a developer',
      'Set up so Google can find and understand each page',
    ],
    caseStudy: {
      facts: [
        { label: 'Role', value: 'Frontend developer' },
        { label: 'Type', value: 'Brand website & product catalogue' },
        { label: 'Built with', value: 'Nuxt, Tailwind' },
        { label: 'Content', value: 'Managed in the Farahoush Admin Panel' },
      ],
      overview: [
        'Farahoush needed a website that presents its whole smart-home range, from lighting and heating to security, audio and smart glass, and helps visitors find the right product or get in touch with sales.',
        'Every page on the site, including its layout, text, images and translations, comes from the Farahoush Admin Panel. The marketing team can launch a new product page or landing page without waiting for a developer.',
      ],
      sections: [
        {
          title: 'A home page that shows the whole range',
          body: [
            'The home page opens with a full-width hero and a row of solution categories, then walks visitors through each system with large lifestyle imagery and subtle scroll animations.',
          ],
          shots: [
            { src: '/projects/farahoush/home.webp', alt: 'Farahoush home page with hero image and navigation', caption: 'Home page' },
          ],
        },
        {
          title: 'Solution pages and product catalogue',
          body: [
            'Each solution, such as smart lighting, gets its own landing page that explains the system and links to the matching products. The shop lists every product with search and category filters.',
          ],
          shots: [
            { src: '/projects/farahoush/category.webp', alt: 'Smart Lighting Control System landing page', caption: 'Solution landing page' },
            { src: '/projects/farahoush/shop.webp', alt: 'Product catalogue with search and category filter', caption: 'Product catalogue with search' },
          ],
        },
        {
          title: 'Blog, support and company pages',
          body: [
            'The blog has categories, recent articles and an automatic table of contents for long guides. Support, downloads, careers, dealer applications, events and training each have their own pages, all editable from the admin panel.',
          ],
          shots: [
            { src: '/projects/farahoush/blog-post.webp', alt: 'Blog article with table of contents and recent articles', caption: 'Blog article' },
          ],
        },
        {
          title: 'Fast, mobile-friendly and easy to find',
          body: [
            'Pages are rendered on the server, so they load quickly and search engines see the full content. Every page has its own meta tags and structured data, and the sitemap and robots.txt are generated automatically.',
          ],
          shots: [
            { src: '/projects/farahoush/mobile-home.webp', alt: 'Farahoush home page on a phone', caption: 'On a phone', mobile: true },
          ],
        },
      ],
    },
  },
  {
    slug: 'farahoush-admin',
    title: 'Farahoush Admin Panel',
    subtitle: 'Custom CMS & Store Back Office',
    tags: ['Vue 3', 'Pinia', 'Tailwind', 'Vite', 'ApexCharts', 'RBAC'],
    mock: 'dashboard',
    summary:
      'The content management system behind the Farahoush website. The team uses it to build pages, run the store and blog, and publish in several languages, all without a developer.',
    highlights: [
      'Drag-and-drop page builder: define reusable components with nested sections, then fill and reorder them',
      'Products, categories, tags, attributes, blog posts, comments, forms and submissions in one place',
      'Roles and permissions control what each staff member can see and edit, with an activity log',
      'Built-in SEO tools (meta tags, structured data, robots.txt, llms.txt), analytics charts and light and dark themes',
    ],
    caseStudy: {
      facts: [
        { label: 'Role', value: 'Frontend developer' },
        { label: 'Type', value: 'Content management system' },
        { label: 'Built with', value: 'Vue 3, Pinia, Tailwind, Vite' },
        { label: 'Interface', value: 'Persian, light and dark' },
      ],
      privateNote: 'This is an internal tool for the Farahoush team, so there is no public link.',
      // Suggested screenshots: dashboard, page builder, product editor,
      // roles & permissions, SEO settings.
      overview: [
        'Instead of an off-the-shelf CMS, Farahoush has its own admin panel built around how their team works. It powers everything on farahoush.com: pages, products, blog, forms and translations.',
        'The goal was simple: once the website launched, the team should be able to run it day to day without a developer.',
      ],
      sections: [
        {
          title: 'A page builder made of reusable components',
          body: [
            'Developers define components once, such as a hero, a feature grid or a product slider, with nested sections and fields. The content team then builds pages by adding those components, filling them in and dragging them into order. Each page has separate screens for its content, its structure and its order.',
          ],
        },
        {
          title: 'Store, blog and forms in one place',
          body: ['Everything the website shows is managed from the same panel:'],
          points: [
            'Products with nested categories, attributes, tags and drag-and-drop ordering',
            'Blog posts with categories, tags and a rich text editor',
            'Comment moderation for products and articles',
            'Custom forms, their submissions and sales consultation requests',
            'Projects, product manuals, a file manager and per-language translations',
          ],
        },
        {
          title: 'Roles, permissions and activity logs',
          body: [
            'Admins create roles and decide exactly what each staff member can see and edit. Every change is recorded in an activity log, and there is a separate view for the website\'s registered users.',
          ],
        },
        {
          title: 'SEO and analytics built in',
          body: [
            'Each page has its own meta tags and structured data, and the team can edit robots.txt and llms.txt directly from the panel. A dashboard with charts shows how the site is doing.',
          ],
        },
      ],
    },
  },
  {
    slug: 'rooritm',
    title: 'Rooritm',
    subtitle: 'Music Streaming App & Admin Panel',
    tags: ['Vue 3', 'Vite', 'PWA', 'Audio Player', 'CMS'],
    href: 'https://rooritm.com',
    image: '/projects/rooritm/home.webp',
    mock: 'landing',
    summary:
      'A Persian music streaming platform for new releases, music videos and favourite artists, plus the admin panel the team uses to publish it all. It works in the browser and installs on a phone like a native app.',
    highlights: [
      'Player that keeps playing while you browse tracks, albums, artist pages and curated playlists',
      'Live radio and the Rooritm TV channel streamed right inside the app',
      'Personal library, adjustable stream quality, offline listening and light/dark mode',
      'Admin panel for publishing tracks, music videos and albums, and building the official playlists',
    ],
    caseStudy: {
      facts: [
        { label: 'Role', value: 'Frontend developer' },
        { label: 'Type', value: 'Music streaming web app & CMS' },
        { label: 'Built with', value: 'Vue 3, Vite' },
        { label: 'Interface', value: 'Persian, light and dark' },
      ],
      overview: [
        'Rooritm is a music streaming platform for Persian music. Listeners can play new releases, watch music videos, follow artists and tune in to live radio, in the browser or as an app installed on their phone.',
        'Behind it is an admin panel where the Rooritm team publishes music and decides what listeners see. I worked on both: the listening app and the panel.',
      ],
      sections: [
        {
          title: 'Built around a player that never stops',
          body: [
            'The player stays at the bottom of the screen while listeners move between pages, so the music keeps going as they browse. The home page brings everything together: the latest tracks, trending songs, the team\'s own playlists, music videos, albums and artists.',
          ],
          shots: [
            { src: '/projects/rooritm/home.webp', alt: 'Rooritm home page with latest tracks and sidebar navigation', caption: 'Home page' },
            { src: '/projects/rooritm/playlists-videos.webp', alt: 'Rooritm playlists and music videos sections', caption: 'Curated playlists and music videos' },
          ],
        },
        {
          title: 'Albums, playlists and artist pages',
          body: [
            'Every album and playlist has its own page with search inside the tracklist, shuffle, sharing and likes. Artist pages collect each artist\'s tracks, albums and videos, and listeners can follow the artists they love.',
          ],
          shots: [
            { src: '/projects/rooritm/album.webp', alt: 'Album page with tracklist', caption: 'Album page' },
            { src: '/projects/rooritm/artist.webp', alt: 'Artist page with tracks, albums and videos tabs', caption: 'Artist page' },
          ],
        },
        {
          title: 'Live radio and Rooritm TV',
          body: [
            'Rooritm Radio streams live with an animated waveform and a list of what is coming up, and the Rooritm TV channel shows the latest Iranian music videos online. Both are marked "LIVE" in the sidebar.',
          ],
          shots: [
            { src: '/projects/rooritm/radio.webp', alt: 'Rooritm radio player with upcoming tracks', caption: 'Live radio' },
            { src: '/projects/rooritm/videos.webp', alt: 'Music video archive', caption: 'Music video archive' },
          ],
        },
        {
          title: 'On the phone, in light or dark',
          body: [
            'On phones Rooritm switches to a bottom tab bar and can be installed to the home screen, with offline listening for downloaded tracks. Listeners choose their stream quality, switch between light and dark mode, manage their subscription and wallet, and can connect to a TV.',
          ],
          shots: [
            { src: '/projects/rooritm/home-dark.webp', alt: 'Rooritm home page in dark mode', caption: 'Dark mode' },
            { src: '/projects/rooritm/mobile-home.webp', alt: 'Rooritm home page on a phone', caption: 'Home on a phone', mobile: true },
            { src: '/projects/rooritm/mobile-settings.webp', alt: 'Rooritm settings on a phone', caption: 'Settings', mobile: true },
          ],
        },
        {
          title: 'Behind the scenes: the admin panel',
          body: [
            'Everything listeners see is published from Rooritm\'s admin panel. The team uploads tracks and music videos, puts together full albums and links each release to its artists. They also build the official Rooritm playlists, like "Megahit", "Road trip" and "Best of the month", and choose what appears in the featured and trending sections of the home page.',
            'The panel is private, but its work is visible all over the app: every playlist, album and artist page above was put together there.',
          ],
          points: [
            'Publish tracks, music videos and full albums',
            'Create and manage artist pages',
            'Build and curate the official playlists',
            'Choose the featured and trending content on the home page',
          ],
          shots: [
            { src: '/projects/rooritm/albums-artists.webp', alt: 'Albums and artists sections managed from the admin panel', caption: 'Albums and artists, all published from the panel' },
          ],
        },
      ],
    },
  },
  {
    slug: 'titan-art-shop',
    title: 'Titan Art Shop',
    subtitle: 'Printed T-Shirt Store & Dashboard',
    tags: ['Nuxt', 'SSR', 'Tailwind', 'Product Variants', 'Dashboard'],
    href: 'https://titanartshop.com',
    image: '/projects/titan-art-shop/product.jpg',
    mock: 'storefront',
    summary:
      'An online store for printed T-shirts, with hundreds of designs that each come in many colours, sizes and print positions. It also has a dashboard where the team adds and prices its products.',
    highlights: [
      'Every design comes in 10 colours, 5 sizes and several front and back print positions',
      'Each combination can have its own price, or one price can be applied to all of them at once',
      'The product photo updates to match the colour the shopper picks',
      'Hundreds of designs organised into nested categories, from off-road cars to Persian typography',
    ],
    caseStudy: {
      facts: [
        { label: 'Role', value: 'Frontend developer' },
        { label: 'Type', value: 'Online store & admin dashboard' },
        { label: 'Built with', value: 'Nuxt, Tailwind' },
        { label: 'Interface', value: 'Persian, light and dark' },
      ],
      overview: [
        'Titan Art Shop sells T-shirts printed with original artwork: mountains and campsites, motorbikes and classic cars, cinema, music and Persian calligraphy. Customers pick a design, then choose exactly how they want it made.',
        'The hardest part of the project was the products themselves. A single design is not one item but hundreds of possible T-shirts, and both the store and the dashboard had to handle that without getting confusing.',
      ],
      sections: [
        {
          title: 'One design, hundreds of versions',
          body: [
            'On the product page shoppers choose a shirt colour, where the print goes on the front (small in the centre, small on the right, medium or large), whether there is a print on the back and how big, and their size. The photo switches to the chosen colour, and the price updates to match the exact combination.',
          ],
          points: [
            '10 shirt colours',
            '4 front print options and 3 back print options, including no back print',
            '5 sizes, from M to 3XL, with a size guide',
          ],
          shots: [
            { src: '/projects/titan-art-shop/product.jpg', alt: 'Product page with colour swatches, front and back print position options and size buttons', caption: 'Choosing colour, print position and size' },
            { src: '/projects/titan-art-shop/mobile-product.jpg', alt: 'The same product options on a phone', caption: 'Product page on a phone', mobile: true },
          ],
        },
        {
          title: 'A dashboard built for variants',
          body: [
            'Adding products was the real challenge. I also built the dashboard where the team sets up each design with all of its colours, sizes and print positions. Every variation can have its own price, and to save time there is an option to apply one price to all of them at once and then change only the exceptions.',
          ],
        },
        {
          title: 'Browsing hundreds of designs',
          body: [
            'Designs are organised into nested categories such as Car → Off-road, Classic and Sport, or Fishing → Trout and Perch. The shop page shows them all as chips under the hero, with sorting and pagination below. Pages are rendered on the server, so they load quickly and search engines can read every product.',
          ],
          shots: [
            { src: '/projects/titan-art-shop/home.jpg', alt: 'Home page with a row of printed T-shirts in different colours', caption: 'Home page' },
            { src: '/projects/titan-art-shop/shop.jpg', alt: 'Shop page with category chips over a hero image and the product grid below', caption: 'Shop with category filters' },
          ],
        },
      ],
    },
  },
]

// Page title/description for search engines and the browser tab.
export const meta = {
  title: 'Farnaz — Frontend Developer',
  description: 'Frontend developer crafting fast, accessible and beautiful web experiences with Vue, Nuxt and TypeScript.',
}

// Short interface labels (buttons, section labels) used by the components.
export const ui = {
  home: 'Home',
  mainNav: 'Main',
  toggleMenu: 'Toggle menu',
  language: 'Language',
  viewWork: 'View My Work',
  downloadCv: 'Download CV',
  contactMe: 'Contact Me',
  aboutEyebrow: 'About me',
  servicesEyebrow: 'What I do',
  servicesTitle: 'How I can help',
  servicesIntro: 'The kinds of projects people usually bring to me.',
  toolsLabel: 'Tools & Skills',
  projectsEyebrow: 'Featured projects',
  projectsTitle: 'Selected Work',
  caseStudy: 'Case study',
  screenshot: (title: string) => `${title} screenshot`,
  caseStudyOf: (title: string) => `${title} case study`,
  footerTagline: 'Frontend developer working with Vue and Nuxt.',
  quickLinks: 'Quick Links',
  servicesHeading: 'Services',
  contact: 'Contact',
  backToTop: 'Back to top',
  allProjects: 'All projects',
  visit: (host: string) => `Visit ${host}`,
  stack: 'Stack',
  overview: 'Overview',
  nextProject: 'Next project',
  openFull: (what: string) => `Open “${what}” full size`,
}
