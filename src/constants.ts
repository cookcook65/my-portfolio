import type { ExperienceItem, ProjectItem, SkillGroup } from './types';

export const NAVIGATION_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Motion Designer',
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
    image: '/assets/project1/sop.png', 
    video: '/assets//project1/cover.mp4',
    gallery: [
      { type: 'video', url: '/assets/project1/demo.mp4', caption: 'System Overview' },
      { type: 'video', url: '/assets/project1/cluster_demo.mp4', caption: 'Cluster Implementation Transition' },
      { type: 'video', url: '/assets/project1/quickcontrol.mp4', caption: 'Component Library' }
    ],
    tags: ['HMI System', 'Standardization', 'Production']
  },
  {
    id: 'p2',
    title: '3D HMI POC',
    category: 'Concept & Verification',
    description: 'Built a high-fidelity verification environment using Unreal Engine. Responsible for scene construction, camera blueprint logic, and driving mode transitions.',
    image: '/assets/project2/p2-cover.jpg',
    gallery: [
        { type: 'image', url: '/assets/p2-cover.jpg', caption: 'Unreal Engine Environment' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop', caption: 'Blueprint Logic Nodes' }
    ],
    tags: ['Unreal Engine', 'Blueprints', 'Technical Art']
  },
  {
    id: 'p3',
    title: 'Smart Cockpit Interaction',
    category: 'Advanced Interaction',
    description: 'Designed the flexible framework for the central control screen. Implemented card-based interaction logic and gesture controls for the dock bar.',
    image: '/assets/p3-cover.jpg',
    tags: ['Interaction Logic', 'Flexible UI', 'Prototyping']
  },
  {
    id: 'p4',
    title: 'Smart Hardware Ecosystem',
    category: 'Ecosystem',
    description: 'Conceptualized the "Human-Vehicle-Home" interconnection. Visualized data flow and control logic between smart wearables, home devices, and the vehicle.',
    image: '/assets/p4-cover.jpg',
    tags: ['IoT Visualization', 'Cross-Device', 'Strategy']
  },
  {
    id: 'p5',
    title: 'Brand Motion Identity',
    category: 'Branding',
    description: 'Established the digital motion identity for the automotive brand. Created dynamic logo reveals and system-wide startup animations.',
    image: '/assets/p5-cover.jpg',
    tags: ['Brand DNA', 'Cinema 4D', 'After Effects']
  },
  {
    id: 'p6',
    title: 'AR Cockpit Experience',
    category: 'AR Technology',
    description: 'Explored AR technology applications in the smart cockpit. Designed visualizers for navigation safety and real-time road data overlay.',
    image: '/assets/p6-cover.jpg',
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