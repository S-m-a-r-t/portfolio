import { Globe, MessageSquare, BarChart3, Map, Heart } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
];

export const SKILLS = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "HTML", "SQL", "TypeScript", "CSS"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Flutter", "TensorFlow", "Keras", "OpenCV", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tailwind CSS", "Streamlit", "REST API Development"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "ClickHouse", "Vite", "Figma", "KaggleHub", "DuckDB", "VS Code", "Google Cloud", "Streamlit", "MongoDB", "neo4j-graph database", "Vercel", "Google Cloud Platform (GCP)",]

  },
  {
    title: "Domains of Work",
    skills: ["Machine Learning", "Deep Learning", "Web Development", "Frontend Development", "AI Model Development", "Data Analysis", "Backend Development & API Design", "Community & Technical Program Management"]
  }
];

export const PROJECTS = [
  {
    title: "GeoSence",
    description: "GeoSence is a geopolitics-focused analytical intelligence platform engineered to ingest, transform, and analyze large-scale global event data using advanced data engineering pipelines and AI-driven retrieval systems. The system processes the GDELT 1.0 dataset (~240GB) through optimized ETL workflows, converting raw event streams into columnar Parquet format for high-performance querying with DuckDB and ClickHouse Cloud. It integrates a Retrieval-Augmented Generation (RAG) architecture where user queries trigger vector-based semantic search over processed geopolitical events, which are then synthesized using the Google Gemini API to generate structured, context-aware geopolitical analysis. The platform is containerized using Docker for reproducibility and supports local-machine deployment with scalable analytical capabilities.",
    tech: ["Python", "DuckDB", "Parquet", "Streamlit-based UI", "Docker", "google gemini api", "clickhouse cloud service", "Retrieval-Augmented Generation"],
    features: ["Automated database extracting & merging", "Large-file processing (240GB)", "User Query → Vector Search → Relevant Events → LLM → Final Geopolitical Analysis", "local_machine supported"],
    github: "https://github.com/S-m-a-r-t/Geosence",
    icon: BarChart3
  },
  {
    title: "Promcom",
    description: "Promcom is a graph-driven college dating and networking platform architected to model and analyze user relationships using a Neo4j graph database. The system leverages node–relationship modeling and optimized Cypher queries to compute compatibility based on shared interests, mutual connections, and behavioral attributes. Built with a full-stack Next.js and Node.js architecture, the platform integrates JWT-based authentication with Microsoft OAuth for secure identity management and session handling. It supports real-time user interactions and is optimized to handle 20+ concurrent active users with efficient query execution and minimized latency. Deployed on Vercel, Promcom emphasizes scalability, data privacy, and high-performance graph traversal for intelligent matchmaking within closed campus ecosystems.",
    tech: ["Next.js", "React", "Node.js", "Neo4j Graph Database", "Cypher Query Language", "JWT Authentication", "OAuth (Microsoft Auth)", "Tailwind CSS", "Vercel Deployment"],
    features: ["Graph-based smart matchmaking", "Live concurrent users (20+)", "Secure user authentication & authorization via microsoft auth(JWT)", "Profile creation with interests & hobbies", "Connection request system", "Modern responsive UI", "Optimized graph queries for relationship mapping"],
    github: "https://github.com/manashkhandelwal/ifTheyDo",
    icon: Heart
  },
  {
    title: "WanderLust",
    description: "WanderLust is a modern travel discovery and planning platform that helps users explore new destinations, create personalized itineraries, and discover experiences based on their interests. The platform focuses on simplicity, visual appeal, and seamless navigation, allowing users to search destinations, view detailed travel guides, and plan trips efficiently. WanderLust aims to make travel planning intuitive and inspiring for students, solo travelers, and adventure enthusiasts.",
    tech: ["node", "Express", "3-party APIs for maps", "error handeling", "full-functioning backend", "MongoDB"],
    features: ["post and reviews for users", "functioning user authentication", "Modern UI", "photo uploading"],
    github: "https://github.com/S-m-a-r-t/wanderlust",
    icon: Map
  },
  {
    title: "HungerX",
    description: "HungerX is a web-based food ordering platform designed specifically for college campuses, enabling students to order meals easily from hostel rooms, classrooms, or anywhere on campus. It brings all campus canteens and food outlets into a single system where users can browse menus, place orders, and track their order status in real time. For vendors, HungerX provides a streamlined dashboard to receive, manage, and update order progress. The platform focuses on convenience, speed, and improving the overall food experience for students.",
    tech: ["HTML", "CSS", "JS", "3D"],
    features: ["Instant order tracking", "Outlet-level management"],
    github: "https://github.com/S-m-a-r-t/hungerx",
    icon: Globe
  },
  {
    title: "Sign Language Interpreter",
    description: "Sign Language Interpreter is a computer vision–based deep learning system designed to recognize static hand gestures and translate them into textual representations in real time. The model is built using a fine-tuned MobileNetV2 architecture with transfer learning to efficiently classify hand signs from a structured black-and-white image dataset (A–Z, 0–10). The pipeline integrates OpenCV for real-time frame capture and preprocessing, followed by TensorFlow-based inference for gesture classification. The system achieves ~90% accuracy through optimized preprocessing, dataset normalization, and hyperparameter tuning, enabling low-latency prediction suitable for live interpretation scenarios.",
    tech: ["Python", "TensorFlow", "MobileNetV2", "OpenCV"],
    features: ["Real-time translation", "accuracy around 90%", "High accuracy B/W dataset", "finetuned model"],
    github: "https://github.com/S-m-a-r-t/handsign_decation_AI",
    icon: MessageSquare
  },
  {
    title: "Diabetes Prediction Model",
    description: "Diabetes Prediction Model is an end-to-end supervised machine learning system developed to predict the probability of diabetes using structured clinical health parameters. The project implements a complete ML pipeline including data cleaning, feature scaling, exploratory data analysis (EDA), correlation analysis, and comparative model evaluation. Multiple classification algorithms—K-Nearest Neighbors (KNN), Decision Tree, and Multi-Layer Perceptron (MLP)—were trained and validated to benchmark performance across different learning paradigms. The workflow emphasizes statistical insight extraction, model performance comparison, and evaluation using accuracy metrics to determine the most effective predictive model.",
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
