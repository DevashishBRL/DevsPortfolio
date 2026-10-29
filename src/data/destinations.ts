/**
 * destinations.ts
 * 
 * Single source of truth for the six interactive miniature terrarium districts.
 * Contains editorial metadata, portfolio content routes, and camera pose configurations.
 */

import * as THREE from 'three';

export interface DestinationData {
  id: string;
  num: string;
  locationLabel: string;
  category: string;
  title: string;
  specialty: string;
  description: string;
  actionLabel: string;
  actionHref: string; // resolved with base
  themeColor: string;
  // Camera pose parameters
  targetPos: [number, number, number];
  camPos: [number, number, number];
  zoom: number;
  duration?: number;
}

export function getDestinations(base: string): DestinationData[] {
  return [
    {
      id: 'lab',
      num: '01 / LAB',
      locationLabel: 'Northwest Plateau · Mechatronics & Robotics High-Bay',
      category: 'Engineering & Robotics',
      title: 'The Lab',
      specialty: 'Autonomous Systems, Hardware & Biomechatronics',
      description:
        'Where mechanical hardware and firmware converge: modular articulated robotic arms, wearable medical device enclosures (TORUS), and accessible prosthetic research (EasyProsthetics).',
      actionLabel: 'Explore Engineering & Research',
      actionHref: `${base}work/`,
      themeColor: '#f59e0b',
      targetPos: [-11, 3.5, -11],
      camPos: [10, 26, 10],
      zoom: 1.55,
      duration: 1.3,
    },
    {
      id: 'foundry',
      num: '02 / FOUNDRY',
      locationLabel: 'East Tower · Interactive Systems Studio',
      category: 'Product Studio',
      title: 'The Foundry',
      specialty: 'KLA Interactives & Digital Thought Tools',
      description:
        'The software workshop building DraftGrid, AraLoom, TabZones, and JobPal — focused digital tools in development to organize thoughts and de-stress workflows.',
      actionLabel: 'View KLA Products',
      actionHref: `${base}studio/`,
      themeColor: '#38bdf8',
      targetPos: [13, 4.0, -11.5],
      camPos: [33, 27, 8],
      zoom: 1.48,
      duration: 1.3,
    },
    {
      id: 'observatory',
      num: '03 / OBSERVATORY',
      locationLabel: 'Southeast Terrace · Observation Rotunda',
      category: 'Design & Ideas',
      title: 'The Observatory',
      specialty: 'AnyBody Can Design & Visual Thinking',
      description:
        'An open atelier and writing observatory dedicated to usability observation, human factors, design principles, and essays on practical design thinking.',
      actionLabel: 'Read Design Writing',
      actionHref: `${base}writing/`,
      themeColor: '#fb923c',
      targetPos: [12, 3.2, 12],
      camPos: [32, 24, 32],
      zoom: 1.62,
      duration: 1.3,
    },
    {
      id: 'yard',
      num: '04 / YARD',
      locationLabel: 'Southwest Basin · Rapid Fabrication Depot',
      category: 'Experiments & Prototyping',
      title: 'The Yard',
      specialty: 'Rapid Fabrication, Rigs & 3D Exploration',
      description:
        'The experimental maker yard: CNC gantry mockups, 3D printing beds, digital agriculture IoT telemetry boards, and physical test fixtures.',
      actionLabel: 'Discover Yard Prototypes',
      actionHref: `${base}experiments/`,
      themeColor: '#34d399',
      targetPos: [-12, 2.8, 12],
      camPos: [8, 22, 32],
      zoom: 1.52,
      duration: 1.3,
    },
    {
      id: 'commons',
      num: '05 / COMMONS',
      locationLabel: 'Central Quad · Collaboration Agora',
      category: 'Leadership & Community',
      title: 'The Commons',
      specialty: 'Mentoring, Teaching & Collaborative Spaces',
      description:
        'The shared open quadrangle representing community contributions, hackathons, engineering mentorship, teaching, and cross-disciplinary collaborations.',
      actionLabel: 'Community & Mentorship',
      actionHref: `${base}people/`,
      themeColor: '#a78bfa',
      targetPos: [0, 2.2, 0],
      camPos: [26, 32, 26],
      zoom: 1.35,
      duration: 1.1,
    },
    {
      id: 'outlook',
      num: '06 / OUTLOOK',
      locationLabel: 'North Pinnacle · Horizon Lookout Beacon',
      category: 'Direction & Press',
      title: 'The Outlook',
      specialty: 'Background, Publications & Future Horizons',
      description:
        'The elevated vantage point overlooking external publications, verified press mentions, career history, and future technical research vectors.',
      actionLabel: 'View Mentions & Press',
      actionHref: `${base}in-the-wild/`,
      themeColor: '#f43f5e',
      targetPos: [0, 6.5, -15.5],
      camPos: [22, 29, 6],
      zoom: 1.45,
      duration: 1.4,
    },
  ];
}

