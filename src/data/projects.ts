export interface Project {
  id: string;
  slug: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  architecture: ArchitectureStep[];
  learnings: string[];
  repoUrl: string;
  demoUrl?: string;
  status: 'live' | 'development' | 'concept';
}

export interface ArchitectureStep {
  label: string;
  detail: string;
  optional?: boolean;
}

export const projects: Project[] = [
  {
    id: 'vechvaluator',
    slug: 'vechvaluator',
    category: 'Machine Learning · Full-Stack Web',
    title: 'VechValuator',
    tagline: 'Predict the value.\nUnderstand the market.',
    description:
      'An AI-powered used-car resale price prediction application that combines a React interface with a Python machine-learning backend.',
    problem:
      'Estimating a used vehicle\'s resale value is difficult because multiple vehicle attributes—brand, age, mileage, fuel type, and condition—simultaneously influence the price. Sellers and buyers lack a quick, data-driven reference point.',
    solution:
      'A web application that accepts vehicle details through a React frontend and sends them to a Flask REST API backed by a trained Random Forest Regression model. The model processes the inputs and returns a predicted market price.',
    features: [
      'React.js frontend with interactive input form',
      'Flask REST API for model serving',
      'Random Forest Regression model',
      'Data processing with Pandas and NumPy',
      'Model integration using Scikit-learn',
      'Vehicle attributes: brand, model, age, kilometres driven, fuel type, transmission, and seller type',
    ],
    techStack: ['React.js', 'Flask', 'Python', 'Scikit-learn', 'Pandas', 'NumPy', 'REST API'],
    architecture: [
      { label: 'React Frontend', detail: 'User inputs vehicle attributes through a form' },
      { label: 'HTTP Request', detail: 'JSON payload sent to Flask REST API endpoint' },
      { label: 'Flask API', detail: 'Validates and preprocesses incoming data' },
      { label: 'Data Pipeline', detail: 'Pandas/NumPy transform raw input to model-ready features' },
      { label: 'Random Forest Model', detail: 'Trained Scikit-learn estimator generates price prediction' },
      { label: 'API Response', detail: 'Predicted price returned as JSON' },
      { label: 'Frontend Display', detail: 'Result rendered in the React UI' },
    ],
    learnings: [
      'Integrating a Python ML model with a JavaScript frontend via REST',
      'Feature engineering for regression on tabular vehicle data',
      'Structuring a Flask application for API-first usage',
      'Understanding model evaluation trade-offs with regression metrics',
    ],
    repoUrl: 'https://github.com/Rohit4174/car_price_prediction',
    status: 'development',
  },
  {
    id: 'servicesync',
    slug: 'servicesync',
    category: 'Mobile Development · Full-Stack',
    title: 'ServiceSync',
    tagline: 'Vehicle history.\nOne scan away.',
    description:
      'A QR-based vehicle service management application designed to organise digital service records and make vehicle history easier to access and maintain.',
    problem:
      'Vehicle service history is typically stored on paper documents that are easy to lose and difficult to share. Mechanics and owners lack a quick way to access or update a vehicle\'s complete maintenance record.',
    solution:
      'A mobile application built with React Native and Expo where each vehicle is identified by a QR code. Scanning the code opens a structured digital record that stores service, repair, and parts replacement history. A Node.js + Express backend handles API requests and persists data in MongoDB.',
    features: [
      'React Native mobile application with Expo',
      'QR-based vehicle identification',
      'Digital service, repair, and parts replacement records',
      'Node.js + Express.js backend with REST API',
      'MongoDB for persistent data storage',
      'JWT-based authentication with role-aware access',
      'Structured service history timeline',
    ],
    techStack: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    architecture: [
      { label: 'React Native / Expo', detail: 'Cross-platform mobile application' },
      { label: 'QR Scanner', detail: 'Camera captures vehicle QR code and decodes vehicle ID' },
      { label: 'Express REST API', detail: 'Handles authentication and CRUD operations' },
      { label: 'JWT Auth', detail: 'Token-based authentication with role-aware permissions', optional: true },
      { label: 'MongoDB', detail: 'Stores vehicle profiles and service record documents' },
      { label: 'API Response', detail: 'Vehicle record returned to mobile app' },
      { label: 'Mobile UI', detail: 'Displays and allows updating of service history' },
    ],
    learnings: [
      'Building cross-platform mobile experiences with React Native and Expo',
      'Designing a REST API with Node.js and Express for mobile clients',
      'Working with MongoDB document schemas for structured records',
      'Implementing QR-based identification flows',
    ],
    repoUrl: 'https://github.com/RohitPatil4174',
    status: 'development',
  },
];
