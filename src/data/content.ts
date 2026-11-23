// Everything the page says lives here. Edit this file to update the site.

export const site = {
  name: 'Jaime Sarrión',
  email: 'jaime.sarrion@gmail.com',
  github: 'https://github.com/JaimeSarrion',
  linkedin: 'https://www.linkedin.com/in/jaime-sarrion-sahuquillo/',
  title: 'Jaime Sarrión: frontend lead building full-stack AI products',
  description:
    'Lead Frontend Developer at Qida in Valencia. React and TypeScript, Node APIs, and LLM features with the Claude API. Open to full-stack roles with an AI focus.',
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
    stack: [], // TODO(Jaime): add the real stack
    live: 'https://yimi-game.jsarrion.es/',
  },
  {
    id: 'entrena',
    name: 'Entrena',
    status: 'building',
    year: '2026',
    short: 'Training tracker, mobile and web',
    body: 'A NestJS API on PostgreSQL, a React Native app with Expo and Google sign-in, all in Docker on my own OVH server. Next: a module where an LLM drafts and adjusts training plans.',
    facts: [['Platforms', 'Android and web'], ['Sign-in', 'Google'], ['Hosting', 'OVH VPS, Docker']],
    stack: ['React Native', 'Expo', 'NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'torsion',
    name: 'Torsion',
    status: 'building',
    year: '2026',
    short: 'App built on the Claude API',
    body: 'My current AI project, built on Anthropic’s Claude API: the prompts, the model calls and the interface around them.',
    facts: [['Model', 'Claude'], ['Access', 'Anthropic API'], ['Built by', 'Me, end to end']],
    stack: ['Claude API'], // TODO(Jaime): describe what Torsion does and its stack
  },
  {
    id: 'floor-plan',
    name: 'Floor plan in 3D',
    status: 'building',
    year: '2026',
    short: 'A flat plan turned into a 3D model',
    body: 'Upload a floor plan with its measurements and walk through the layout in 3D. The plan image becomes a model that a 3D library can render in the browser.',
    facts: [['Input', 'Plan image with measurements'], ['Output', '3D model in the browser'], ['Built with', 'Claude Code']],
    stack: [],
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
  role: string;
  company: string;
  dates: string;
  line: string;
}

export const jobs: Job[] = [
  {
    role: 'Lead Frontend Developer',
    company: 'Qida',
    dates: '2024 to now',
    line: 'Built and lead a five-person team, its component library and an AI testing workflow.',
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Bravo Capital',
    dates: '2023 to 2024',
    line: 'Set the architecture and coding standards, and cut load times on critical screens.',
  },
  {
    role: 'Senior UI Developer and Product Owner',
    company: 'Rated Power',
    dates: '2020 to 2023',
    line: 'B2B SaaS for renewable energy engineers. Owned several modules and hired the frontend team.',
  },
  {
    role: 'UI and Mobile Developer',
    company: 'Vipera Ibérica',
    dates: '2020',
    line: 'A web app for Banco Santander and a mobile app for Bizum.',
  },
  {
    role: 'Full-stack and mobile developer',
    company: 'Ribera Salud, TGM, Agensys',
    dates: '2017 to 2019',
    line: 'Healthcare software in React, Node and .NET, two Ionic apps and a React landing page.',
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
    ],
  },
  {
    group: 'Server and data',
    tools: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'PostgreSQL', icon: 'postgresql' },
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
