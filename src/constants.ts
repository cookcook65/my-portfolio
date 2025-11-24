import type { ExperienceItem, ProjectItem, SkillGroup } from './types';

export const NAVIGATION_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Components', href: '#components' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior UX Designer',
    company: 'Dongfeng Motor R&D Institute | Zero One Design',
    period: '2023.03 - Present',
    description: 'Leading HMI motion system construction, Unreal implementation, and full vehicle experience strategy.',
    achievements: [
      'Led the upgrade of the 2.0 Platform Motion Design System, defining guidelines and tools.',
      'E-TRUCK Concept: First implementation of Unreal Engine for interactive prototyping and future HMI standards.',
      'Delivered full-process vehicle experience strategy for future mobility in 2 months.'
    ]
  },
  {
    id: '2',
    role: 'Senior Motion Designer',
    company: 'Versa (Multimedia Creative Tech)',
    period: '2019.03 - 2022.04',
    description: 'Mobile app product motion, vision videos, and IP animation.',
    achievements: [
      'Designed motion for multiple App features showcased at Honor product launches.',
      'Built unified brand animation styles for "Bugu Editing" and "Makaron" apps.',
      'Managed the motion team and promoted system modularization.'
    ]
  },
  {
    id: '3',
    role: 'Freelance Motion Designer',
    company: 'Self-Employed',
    period: '2017.11 - 2019.03',
    description: 'HUD motion design and commercial creative shorts.',
    achievements: [
      'Collaborated with Zebra Network (AliOS) on vehicle HUD interaction motion.',
      'Created award-winning independent animation "Harry" (Sound & Visuals).',
      'Visual promotion for brands like Adidas, Tmall, and NetEase.'
    ]
  },
  {
    id: '4',
    role: 'Motion Designer',
    company: 'FlashFrame',
    period: '2016.03 - 2019.03',
    description: 'Motion graphics for commercial shorts and documentaries.',
    achievements: [
      'Post-production for art programs "Hello Art" & "Guyu Explains Italy".',
      'Worked on "Wheels on America" documentary series.'
    ]
  },
  {
    id: '5',
    role: 'Interaction Designer Intern',
    company: 'PSA Peugeot Citroën',
    period: '2015.09 - 2016.03',
    description: 'Cockpit motion design and sound design.',
    achievements: [
      'Participated in IVI system, fragrance, ambient light, and face recognition interaction design.'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Motion Design for SOP',
    category: 'Mass Production',
    description: 'Led the platform-based motion system for 5 vehicle models. Defined the unified HMI motion language and technical specifications for development handoff.',
    image: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/sop.png',
    gallery: [
      { 
        type: 'video', 
        url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/demo.mp4', 
        caption: 'System Overview',
        title: 'Unified Motion Language',
        description: 'Established a comprehensive motion system that scales across 5 distinct vehicle models. This framework ensures brand consistency while allowing for model-specific personality traits.'
      },
      { 
        type: 'video', 
        url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/cluster_demo.mp4', 
        caption: 'Cluster Implementation Transition',
        title: 'Instrument Cluster Transitions',
        description: 'Designed seamless mode transitions for the digital instrument cluster. Focused on reducing cognitive load by creating fluid morphing animations between Sport, Eco, and Comfort modes.'
      },
      { 
        type: 'video', 
        url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/quickcontrol.mp4', 
        caption: 'Component Library',
        title: 'Interactive Component Library',
        description: 'A modular library of micro-interactions for quick controls. Includes haptic feedback visualizations and state changes for toggles, sliders, and buttons.'
      },
      { 
        type: 'video', 
        url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/SentryModeen.mp4', 
        caption: 'Sentry Mode Animation',
        title: 'Sentry Mode Visualization',
        description: 'Safety system visualization designed to instill trust. The animation uses a scanning motif to communicate active monitoring without causing alarm.'
      }
    ],
    tags: ['HMI System', 'Standardization', 'Production']
  },
  {
    id: 'p2',
    title: '3D HMI POC',
    category: 'Concept & Verification',
    description: 'Built a high-fidelity verification environment using Unreal Engine. Responsible for scene construction, camera blueprint logic, and driving mode transitions.',
    image: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/3DHMI.png',
    gallery: [
        { 
          type: 'video', 
          url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/360.mp4', 
          caption: 'Unreal Engine Scene Overview',
          title: 'Real-time Scene Rendering',
          description: 'A fully navigable 3D environment running in real-time on Unreal Engine, simulating high-end cockpit chip performance capabilities.'
        },
        { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/establishmeng.mp4', caption: 'Scene Building Process' },
        { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/normal2.mp4', caption: 'Driving mode' },
        { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/dynamicwheather.mp4', caption: 'Dynamic Whether System' },
        { type: 'image', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/blueprint.png', caption: 'Blueprint Logic Nodes' }
    ],
    tags: ['Unreal Engine', 'Blueprints', 'Technical Art']
  },
  {
    id: 'p3',
    title: 'Smart Cockpit Interaction',
    category: 'Advanced Interaction',
    description: 'Designed the flexible framework for the central control screen. Implemented card-based interaction logic and gesture controls for the dock bar.',
    image: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/3cover.png',
    gallery: [
        { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/SmartCockpit.mp4', caption: 'Smart Cockpit Overview' },
        { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/ai.mp4', caption: 'AI-driven Proactive Interaction Based on LLM' },
        { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/carphone.mp4', caption: 'Underlying Interconnection Between Mobile Phones And IVI' },
        { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/cardhighlight.mp4', caption: 'Dynamic Component Lighting' }
    ],
    tags: ['Interaction Logic', 'Flexible UI', 'Prototyping']
  },
  {
    id: 'p4',
    title: 'Smart Hardware Ecosystem',
    category: 'Ecosystem',
    description: 'Conceptualized the "Human-Vehicle-Home" interconnection. Visualized data flow and control logic between smart wearables, home devices, and the vehicle.',
    image: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/hardware.png',
    tags: ['IoT Visualization', 'Cross-Device', 'Strategy']
  },
  {
    id: 'p5',
    title: 'Brand Motion Identity',
    category: 'Branding',
    description: 'Established the digital motion identity for the automotive brand. Created dynamic logo reveals and system-wide startup animations.',
    image: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/5cover.png',
    gallery: [
      { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/Mherologo.mp4', caption: 'MHero Logo Animation' },
      { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/cover.mp4', caption: 'Branding Animation For eπ ' },
      { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/quickcontrol.mp4', caption: 'Component Library' },
      { type: 'video', url: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/SentryModeen.mp4', caption: 'Sentry Mode Animation' }
    ],
    tags: ['Brand DNA', 'Cinema 4D', 'After Effects']
  },
  {
    id: 'p6',
    title: 'AR Cockpit Experience',
    category: 'AR Technology',
    description: 'Explored AR technology applications in the smart cockpit. Designed visualizers for navigation safety and real-time road data overlay.',
    image: 'https://nestorsportfolio.oss-cn-shanghai.aliyuncs.com/portfolio/6cover.png',
    tags: ['Augmented Reality', 'HUD', 'Future Tech']
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Core Competencies',
    items: ['Design Systems', 'HMI Motion', 'User Research', 'High-Fidelity Prototyping', 'Cross-team Collaboration']
  },
  {
    category: 'Software & Tools',
    items: ['After Effects (6y+)', 'Unreal Engine', 'Blender', 'Cinema 4D', 'Figma', 'Sketch', 'Photoshop', 'Premiere']
  }
];

export const CONTACT_INFO = {
  email: 'cookcook65@gmail.com',
  wechat: 'mmmaoyeahyeah',
  location: 'Shanghai, China'
};