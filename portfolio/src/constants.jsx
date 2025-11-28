import { Code, Server, Database, Globe, Cpu, MessageSquare, BarChart3, Map } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

export const SKILLS = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Flutter", "TensorFlow", "Keras", "OpenCV", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "ClickHouse", "Vite", "Figma", "KaggleHub", "DuckDB", "VS Code", "Google Cloud", "Streamlit" , "SQL", "MongoDB"]

  },
  {
    title: "Domains of Work",
    skills: ["Machine Learning", "Deep Learning", "Web Development", "Frontend Development", "AI Model Development", "Data Analysis", "Community Management"]
  }
];

export const PROJECTS = [
  {
    title: "GeoSence",
    description: "GeoSence is a geopolitics-focused analytical platform designed to process, store, and interpret large-scale global event data using modern data engineering and AI methodologies. The system uses the GDELT 1.0 dataset, which contains millions of geopolitical events, and converts it into an optimized analytical workflow",
    tech: ["Python", "DuckDB", "Parquet", "Streamlit-based UI" , "Docker", "google gemini api", "clickhouse cloud service" ,"Retrieval-Augmented Generation"],
    features: ["Automated database extracting & merging", "Large-file processing (240GB)", "User Query → Vector Search → Relevant Events → LLM → Final Geopolitical Analysis" , "local_machine supported"],
    github: "https://github.com/S-m-a-r-t/Geosence",
    icon: BarChart3
  },
  {
    title: "WanderLust",
    description: "WanderLust is a modern travel discovery and planning platform that helps users explore new destinations, create personalized itineraries, and discover experiences based on their interests. The platform focuses on simplicity, visual appeal, and seamless navigation, allowing users to search destinations, view detailed travel guides, and plan trips efficiently. WanderLust aims to make travel planning intuitive and inspiring for students, solo travelers, and adventure enthusiasts.",
    tech: ["node", "Express", "3-party APIs for maps","error handeling","full-functioning backend","MongoDB"],
    features: ["post and reviews for users", "functioning user authentication", "Modern UI","photo uploading"],
    github: "https://github.com/S-m-a-r-t/wanderlust",
    icon: Map
  },
  {
    title: "HungerX",
    description: "HungerX is a web-based food ordering platform designed specifically for college campuses, enabling students to order meals easily from hostel rooms, classrooms, or anywhere on campus. It brings all campus canteens and food outlets into a single system where users can browse menus, place orders, and track their order status in real time. For vendors, HungerX provides a streamlined dashboard to receive, manage, and update order progress. The platform focuses on convenience, speed, and improving the overall food experience for students.",
    tech: ["HTML", "CSS", "JS","3D"],
    features: ["Instant order tracking", "Outlet-level management"],
    github: "https://github.com/S-m-a-r-t/hungerx",
    icon: Globe
  },
  {
    title: "Sign Language Interpreter",
    description: "AI system using MobileNetV2 that identifies hand signs and converts them into readable representation of the sign.",
    tech: ["Python", "TensorFlow", "MobileNetV2", "OpenCV"],
    features: ["Real-time translation", "accuracy around 90%", "High accuracy B/W dataset" , "finetuned model"],
    github: "https://github.com/S-m-a-r-t/handsign_decation_AI",
    icon: MessageSquare
  },
  {
    title: "Diabetes Prediction Model",
    description: "A machine learning project that analyzes medical attributes to predict the likelihood of diabetes using multiple classification algorithms.",
    tech: ["KaggleHub", "Pandas", "Matplotlib", "Seaborn", "KNN", "Decision Tree", "MLP Classifier"],
    features: [
      "Dataset: akshaydattatraykhare/diabetes-dataset",
      "KNN Model – 72% accuracy",
      "Decision Tree Model – 75% accuracy",
      "MLP Classifier – 68% accuracy",
      "Exploratory Data Analysis (EDA) with visual insights",
      "Multiple model comparison for performance evaluation"
    ],
    github: "https://github.com/S-m-a-r-t/diabetes-prediction", 
    icon: BarChart3
  }
];

export const EXPERIENCE = [
  {
    role: "Co-Lead",
    organization: "Google Developer Group On Campus Bennett University (GDG)",
    period: "2025 - 2026",
    details: [
      "Overseeing chapter strategy, event architecture, and community growth.",
      "Leading planning of 3–4 high-impact events with 1000+ attendees.",
      "Mentoring student leaders and collaborating with industry speakers.",
      "Driving impact projects around cloud, AI/ML, and open-source culture.",
      "lead a team of around 70-80 students and members."
    ]
  },
  {
    role: "Management Lead",
    organization: "Google Developer Group On Campus Bennett University (GDG)",
    period: "2024 - 2025",
    details: [
      "Managed event operations, speaker coordination, and PR campaigns.",
      "Organized multiple developer-centric events with strong campus reach.",
      "Built the communication framework and onboarding pipeline for new members."
    ]
  },
  { 
    role: "Management Lead",
    organization: "Bennett Cloud Computing Club (BC3)",
    period: "2024 - 2025",
    details: [
      "Organized a 3-hour cloud computing workshop for freshers.",
      "Created PR strategies and cold mailing campaigns reaching 1000–4000 students.",
      "Helped design and deliver various sessions for newcomers."
    ]
  }
];
