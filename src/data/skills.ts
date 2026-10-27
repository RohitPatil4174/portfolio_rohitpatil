export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['Java', 'JavaScript', 'Python', 'C', 'C++'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    skills: ['React Native', 'Expo'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs'],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Random Forest Regression'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git', 'GitHub', 'Postman'],
  },
  {
    id: 'concepts',
    label: 'Core Concepts',
    skills: ['Object-Oriented Programming', 'DBMS', 'Authentication', 'Async Programming', 'API Integration'],
  },
];
