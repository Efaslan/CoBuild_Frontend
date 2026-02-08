// Mock data for the project collaboration platform

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
  skills: string[];
}

export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'completed';
  assignee: string;
  dueDate: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  teamSize: number;
  progress: number;
  status: 'active' | 'recruiting' | 'completed';
  team: User[];
  tasks: Task[];
  goals: string[];
  roadmap: {
    phase: string;
    milestones: string[];
    status: 'completed' | 'in-progress' | 'upcoming';
  }[];
}

export const currentUser: User = {
  id: 'user-1',
  name: 'Alex Johnson',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  role: 'Full Stack Developer',
  skills: ['React', 'Node.js', 'TypeScript', 'Python']
};

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'AI-Powered Task Manager',
    description: 'A modern task management application with AI-driven prioritization and smart scheduling. Built for teams who want to optimize their workflow with intelligent automation.',
    category: 'Productivity',
    techStack: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
    teamSize: 5,
    progress: 65,
    status: 'active',
    team: [
      {
        id: 'u1',
        name: 'Sarah Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        role: 'Lead Developer',
        skills: ['React', 'Node.js']
      },
      {
        id: 'u2',
        name: 'Marcus Williams',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
        role: 'UI Designer',
        skills: ['Figma', 'Design Systems']
      },
      {
        id: 'u3',
        name: 'Emma Rodriguez',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
        role: 'ML Engineer',
        skills: ['Python', 'TensorFlow']
      },
      {
        id: 'u4',
        name: 'David Kim',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        role: 'Backend Developer',
        skills: ['Node.js', 'MongoDB']
      },
      {
        id: 'u5',
        name: 'Lisa Anderson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
        role: 'QA Engineer',
        skills: ['Testing', 'Automation']
      }
    ],
    tasks: [
      {
        id: 't1',
        title: 'Implement AI prioritization algorithm',
        status: 'in-progress',
        assignee: 'Emma Rodriguez',
        dueDate: '2026-02-15'
      },
      {
        id: 't2',
        title: 'Design task dashboard UI',
        status: 'completed',
        assignee: 'Marcus Williams',
        dueDate: '2026-02-05'
      },
      {
        id: 't3',
        title: 'Build REST API endpoints',
        status: 'in-progress',
        assignee: 'David Kim',
        dueDate: '2026-02-12'
      },
      {
        id: 't4',
        title: 'Setup authentication system',
        status: 'completed',
        assignee: 'Sarah Chen',
        dueDate: '2026-02-01'
      },
      {
        id: 't5',
        title: 'Write integration tests',
        status: 'todo',
        assignee: 'Lisa Anderson',
        dueDate: '2026-02-20'
      }
    ],
    goals: [
      'Create an intuitive interface for task management',
      'Implement ML-based priority suggestions',
      'Achieve 99.9% uptime',
      'Support teams of up to 50 members'
    ],
    roadmap: [
      {
        phase: 'Phase 1: Foundation',
        milestones: ['Project setup', 'Database design', 'Authentication'],
        status: 'completed'
      },
      {
        phase: 'Phase 2: Core Features',
        milestones: ['Task CRUD operations', 'Team management', 'UI implementation'],
        status: 'in-progress'
      },
      {
        phase: 'Phase 3: AI Integration',
        milestones: ['ML model training', 'Priority algorithm', 'Smart scheduling'],
        status: 'upcoming'
      }
    ]
  },
  {
    id: 'proj-2',
    title: 'E-Commerce Analytics Dashboard',
    description: 'Real-time analytics platform for e-commerce businesses to track sales, customer behavior, and inventory management.',
    category: 'Analytics',
    techStack: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    teamSize: 3,
    progress: 45,
    status: 'active',
    team: [
      {
        id: 'u6',
        name: 'John Smith',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        role: 'Lead Developer',
        skills: ['Vue.js', 'Python']
      },
      {
        id: 'u7',
        name: 'Rachel Green',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
        role: 'Data Analyst',
        skills: ['Python', 'SQL']
      },
      {
        id: 'u8',
        name: 'Tom Baker',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
        role: 'DevOps Engineer',
        skills: ['Docker', 'AWS']
      }
    ],
    tasks: [],
    goals: ['Real-time data visualization', 'Predictive analytics', 'Custom reporting'],
    roadmap: []
  },
  {
    id: 'proj-3',
    title: 'Social Learning Platform',
    description: 'A collaborative learning platform where students and professionals can share knowledge, create study groups, and track progress.',
    category: 'Education',
    techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    teamSize: 4,
    progress: 30,
    status: 'recruiting',
    team: [
      {
        id: 'u9',
        name: 'Nina Patel',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nina',
        role: 'Product Manager',
        skills: ['Product Strategy', 'UX']
      },
      {
        id: 'u10',
        name: 'Chris Evans',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chris',
        role: 'Frontend Developer',
        skills: ['React', 'TypeScript']
      }
    ],
    tasks: [],
    goals: ['Build community features', 'Interactive learning modules', 'Progress tracking'],
    roadmap: []
  },
  {
    id: 'proj-4',
    title: 'IoT Home Automation',
    description: 'Open-source home automation system with mobile app for controlling smart devices.',
    category: 'IoT',
    techStack: ['React Native', 'Python', 'MQTT', 'Raspberry Pi'],
    teamSize: 6,
    progress: 80,
    status: 'active',
    team: [],
    tasks: [],
    goals: ['Device integration', 'Mobile app', 'Voice control'],
    roadmap: []
  },
  {
    id: 'proj-5',
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting system built on blockchain technology for organizations and communities.',
    category: 'Blockchain',
    techStack: ['Solidity', 'React', 'Ethereum', 'Web3.js'],
    teamSize: 2,
    progress: 20,
    status: 'recruiting',
    team: [],
    tasks: [],
    goals: ['Smart contract development', 'Secure authentication', 'Transparent results'],
    roadmap: []
  },
  {
    id: 'proj-6',
    title: 'Health & Fitness Tracker',
    description: 'Comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.',
    category: 'Health',
    techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    teamSize: 3,
    progress: 55,
    status: 'recruiting',
    team: [],
    tasks: [],
    goals: ['Workout planning', 'Nutrition database', 'Progress visualization'],
    roadmap: []
  }
];

export const recommendedProjects = mockProjects.filter(p => 
  p.techStack.some(tech => currentUser.skills.includes(tech))
);

export const ongoingProjects = mockProjects.filter(p => p.status === 'active').slice(0, 2);
