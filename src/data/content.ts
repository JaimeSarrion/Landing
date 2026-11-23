// Everything the page says lives here. Edit this file to update the site.

export const site = {
  name: 'Jaime Sarrión',
  email: 'jaime.sarrion@gmail.com',
  github: 'https://github.com/JaimeSarrion',
  linkedin: 'https://www.linkedin.com/in/jaime-sarrion-sahuquillo/',
  title: 'Jaime Sarrión: frontend lead building full-stack AI products',
  description:
    'Lead Frontend Developer at Qida, based in Spain. React and TypeScript, Node APIs, and LLM features with the Claude API. Open to full-stack roles with an AI focus.',
};

export type Status = 'live' | 'building' | 'archived';

export interface Project {
  id: string;
  name: string;
  status: Status;
  year: string;
  /** One line for the list. */
  short: string;
  /** Two sentences at most for the open item. */
  body: string;
  /** Three short label/value pairs. */
  facts: [string, string][];
  stack: string[];
  live?: string;
  code?: string;
  /** Real screenshots in src/assets/projects/<id>/, in file-name order, with their alt text. */
  shots?: string[];
}

export const statusLabel: Record<Status, string> = {
  live: 'Live',
  building: 'In development',
  archived: 'Archived',
};

export const projects: Project[] = [
  {
    id: 'beer-odyssey',
    name: 'Beer Odyssey',
    status: 'live',
    year: '2026',
    short: 'Party game played from your phones',
    body: 'The host opens a game and shares a QR code. Each player joins from their phone and adds one question and one dare, and only ever sees their own.',
    facts: [['Runs on', 'Any phone browser'], ['Players join', 'By QR code'], ['Built with', 'Claude Code']],
    stack: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Express', 'MySQL', 'Vite'],
    live: 'https://yimi-game.jsarrion.es/',
    shots: [
      'Beer Odyssey lobby: the QR code to join and the players who are ready',
      'Beer Odyssey entry form: a player writes the question they bring to the game',
      'Beer Odyssey in play: the scoreboard and a question card written by a player',
    ],
  },
  {
    id: 'torsion',
    name: 'Torsion',
    status: 'live',
    year: '2026',
    short: 'Strength training that plans itself',
    body: 'Each week is built from your profile, last week and how it felt. When nothing relevant changed, rules carry the plan forward with progressive loads; when something did, like an injury, new equipment or a request in plain words, Claude rewrites it.',
    facts: [['Platforms', 'Web PWA and Android'], ['AI', 'Claude, only when rules fall short'], ['Access', 'Invite list']],
    stack: ['Expo', 'React Native', 'NestJS', 'Prisma', 'PostgreSQL', 'Claude API', 'Docker', 'Playwright'],
    live: 'https://entrenamiento.jsarrion.es',
    shots: [
      'Torsion home: the current training block and this week’s progress',
      'Torsion set logging: weight, reps and effort for each set, with the rest timer',
      'Torsion share card after a session: total volume and the week at a glance',
    ],
  },
  {
    id: 'floor-plan',
    name: 'Casa 3D',
    status: 'building',
    year: '2026',
    short: 'Trace a floor plan, walk it in 3D',
    body: 'Load a plan as an image or PDF, set the scale from one known wall and trace over it: corners close and rooms appear on their own. Then walk through the home in first person, with collisions.',
    facts: [['Input', 'Plan image or PDF'], ['Views', '3D, plan and first-person walk'], ['Built with', 'Claude Code']],
    stack: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Vite'],
  },
  {
    id: 'argos',
    name: 'Argos',
    status: 'archived',
    year: '2018',
    short: 'Final degree project, LoRa sensors',
    body: 'Round-the-clock monitoring for people at risk, built for my degree at the University of Alicante: sensors on Arduino and Raspberry Pi send their readings over LoRa.',
    facts: [['Network', 'LoRa'], ['Hardware', 'Arduino, Raspberry Pi'], ['For', 'University of Alicante']],
    stack: ['LoRa', 'Arduino', 'Raspberry Pi'],
    code: 'https://github.com/JaimeSarrion/ArgosApp',
  },
];

export interface Job {
  company: string;
  role: string;
  dates: string;
  year: string;
  points: string[];
}

export const jobs: Job[] = [
  {
    company: 'First jobs',
    role: 'Mobile and full-stack at TGM, Ribera Salud and Agensys',
    dates: '2017 – 2019',
    year: '2017',
    points: [
      'Two cross-platform Ionic apps, from concept to the stores.',
      'Healthcare management software in React, Node and .NET.',
      'Brought Git to a team that had no version control.',
    ],
  },
  {
    company: 'Vipera',
    role: 'UI and mobile developer, product owner',
    dates: '2020',
    year: '2020',
    points: [
      'A web app for Banco Santander and a mobile app for Bizum.',
      'Product owner between the bank’s requirements and the build.',
    ],
  },
  {
    company: 'Rated Power',
    role: 'Senior UI developer and product owner',
    dates: '2020 – 2023',
    year: '2020',
    points: [
      'B2B SaaS used by renewable energy engineers around the world.',
      'Product owner for several modules, from roadmap to release.',
      'Hired the frontend team from zero and set up its onboarding.',
    ],
  },
  {
    company: 'Bravo Capital',
    role: 'Senior frontend developer',
    dates: '2023 – 2024',
    year: '2023',
    points: [
      'Redesigned the app’s architecture and cut technical debt.',
      'Coding standards that shortened code review cycles.',
      'Faster load times on the critical screens.',
    ],
  },
  {
    company: 'Qida',
    role: 'Lead frontend developer',
    dates: '2024 – now',
    year: '2024',
    points: [
      'Built and lead a five-person frontend team.',
      'A component library shared across the platform.',
      'An agent orchestrator that writes our Playwright tests.',
      'Spec-Driven Development with GitHub Spec Kit.',
    ],
  },
];

export const education = [
  'Computer Engineering, University of Alicante, 2018',
  'Performance degree in horn, Alicante Conservatory, 2016',
];

/** Icons come from simple-icons by slug; a tool without a mark is shown by name. */
export const stack: { group: string; tools: { name: string; icon?: string }[] }[] = [
  {
    group: 'Interface',
    tools: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Expo', icon: 'expo' },
      { name: 'Astro', icon: 'astro' },
      { name: 'Three.js', icon: 'threedotjs' },
    ],
  },
  {
    group: 'Server and data',
    tools: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'Docker', icon: 'docker' },
    ],
  },
  {
    group: 'AI and delivery',
    tools: [
      { name: 'Claude', icon: 'claude' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Playwright' },
      { name: 'Spec Kit' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
];
