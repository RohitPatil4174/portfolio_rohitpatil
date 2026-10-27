export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'internship' | 'full-time' | 'part-time' | 'contract';
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: 'mysoftway',
    role: 'Web Development Intern',
    company: 'MySoftWay Technology & IT Consultancy',
    location: 'Ichalkaranji, India',
    period: 'June 2024 – July 2024',
    type: 'internship',
    description: [
      'Completed a web development internship focused on building practical web applications.',
      'Developed a Smart Quiz Game using HTML, CSS, JavaScript, and PHP.',
      'Worked on frontend design, backend development, and database integration.',
      'Gained hands-on experience in full-cycle web application development.',
    ],
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  status: 'ongoing' | 'completed';
}

export const education: Education[] = [
  {
    id: 'btech',
    degree: 'B.Tech — Computer Science and Business Systems',
    institution: "Kolhapur Institute of Technology's College of Engineering (Autonomous), Kolhapur",
    period: 'August 2024 – Present',
    score: '8.1',
    scoreLabel: 'CGPA',
    status: 'ongoing',
  },
  {
    id: 'diploma',
    degree: 'Diploma — Computer Science',
    institution: 'Sharad Institute of Technology, Polytechnic, Yadrav',
    period: 'June 2021 – May 2024',
    score: '84.86%',
    scoreLabel: 'Percentage',
    status: 'completed',
  },
  {
    id: 'secondary',
    degree: 'Class 10 — Maharashtra State Board',
    institution: 'SMT. A. N. Neje High School',
    period: 'June 2020 – March 2021',
    score: '74.40%',
    scoreLabel: 'Percentage',
    status: 'completed',
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer?: string;
}

export const certifications: Certification[] = [
  {
    id: 'css-js',
    title: 'CSS and JavaScript Programming Language',
  },
  {
    id: 'python',
    title: 'Python Programming Language Complete Course',
  },
  {
    id: 'zscaler',
    title: 'Zscaler Cybersecurity Fundamentals Associate Exam',
    issuer: 'Zscaler',
  },
  {
    id: 'nptel-cyber',
    title: 'Cyber Security and Privacy',
    issuer: 'NPTEL · IIT Madras',
  },
];
