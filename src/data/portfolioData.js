// ============================================================
// portfolioData.js — Centralized configuration for Kaviyan S's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Kaviyan S",
  firstName: "Kaviyan",
  brandName: "Kaviyan",
  title: "Aspiring Data Analyst",
  location: "Coimbatore, Tamil Nadu, India",
  phone: "+91 87543-21530",
  emails: {
    primary: "skaviyan004@gmail.com",
    secondary: "skaviyan004@gmail.com",
  },
  summary:
    "Aspiring Data Analyst with hands-on internship experience applying Python, SQL, Power BI, Excel, Pandas, and NumPy to real-world data. Skilled in data cleaning, data analysis, data visualization, and dashboard development, with a track record of translating raw datasets into clear business reporting and actionable insights. Smart India Hackathon (SIH) 2025 National Winner.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/kaviyan-004",
  linkedin: "https://www.linkedin.com/in/kaviyan-s/",
};

export const heroContent = {
  greeting: "Hi, I'm Kaviyan S",
  titleHighlight: "Aspiring Data Analyst",
  subtitle:
    "Transforming raw data into actionable insights using Python, SQL, Power BI, Excel, and Machine Learning to solve real-world business challenges.",
  ctaPrimary: { text: "View Projects", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:skaviyan004@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Kaviyan,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Kaviyan S</span>, an aspiring Data Analyst based in Coimbatore, India. I specialize in turning raw data into meaningful business insights and solving complex business problems using analytical thinking. With hands-on expertise in Python, SQL, Power BI, Excel, and Machine Learning, I am passionate about data cleaning, dashboard development, exploratory analysis, and building predictive models to drive data-driven decision making.`,
  techStack: ["Python", "SQL", "Power BI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn raw data into actionable insights",
  description:
    "I follow a structured, analytical approach to transform complex datasets into clear business intelligence and data-driven decisions.",
  cards: [
    {
      number: "01",
      title: "Collect",
      text: "I start by understanding business goals, gathering data from multiple sources, and defining key metrics and KPIs to measure success.",
    },
    {
      number: "02",
      title: "Clean",
      text: "Ensuring data quality through systematic cleaning, handling missing values, removing duplicates, and standardizing formats for reliable analysis.",
    },
    {
      number: "03",
      title: "Analyze",
      text: "Performing exploratory data analysis, statistical modeling, and pattern recognition using Python, SQL, Pandas, and NumPy.",
    },
    {
      number: "04",
      title: "Visualize",
      text: "Building interactive dashboards and compelling visualizations with Power BI and Python to deliver clear, data-driven business insights.",
    },
  ],
  endText: "Insights delivered!",
};

// Technical Skills Data grouped by categories
export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 90 },
      ],
    },
    {
      title: "Analytics",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Excel", level: 92 },
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 85 },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow", level: 75 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 92 },
      ],
    },
    {
      title: "Data Visualization",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 80 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "SQL Server", level: 85 },
        { name: "SQLite", level: 80 },
      ],
    },
  ],
};

// Achievements Data (replaces Content Creation)
export const contentCreation = {
  badge: "Recognition",
  heading: "Achievements & Competitions",
  description:
    "Recognized for analytical thinking, teamwork, and delivering high-impact solutions under pressure.",
  categories: [
    {
      title: "SIH 2025 National Winner",
      description:
        "Won the Smart India Hackathon (SIH) 2025 — a national-level competition among teams across India, recognized for strong analytical thinking and innovative problem-solving under pressure.",
      stats: "National Level",
      icon: "🏆",
    },
    {
      title: "Tech Hackathon 2024 Runner-Up",
      description:
        "Secured Runner-Up position in the Intra-Department Tech Hackathon 2024, demonstrating technical proficiency and rapid prototyping skills.",
      stats: "Intra-Department",
      icon: "🥈",
    },
    {
      title: "Hack Nexus Organizer",
      description:
        "Led and organized Hack Nexus — an inter-college hackathon with 20+ participating teams, managing logistics, mentoring teams, and coordinating judge evaluations.",
      stats: "20+ Teams",
      icon: "🚀",
    },
    {
      title: "Paper Presentation — AICTE",
      description:
        "Presented a certified research paper at an AICTE-recognized event, demonstrating ability to communicate complex technical ideas effectively.",
      stats: "AICTE Certified",
      icon: "📝",
    },
  ],
};

// Leadership Data
export const leadershipList = [
  {
    title: "Smart India Hackathon (SIH) 2025",
    description:
      "Won the national-level Smart India Hackathon 2025, competing against teams from across India with an innovative data-driven solution.",
    role: "National Winner",
    badge: "Achievement",
  },
  {
    title: "Tech Hackathon 2024 — Intra-Department",
    description:
      "Secured Runner-Up position demonstrating technical proficiency, rapid prototyping, and strong analytical thinking.",
    role: "Runner-Up",
    badge: "Competition",
  },
  {
    title: "Hack Nexus Inter-College Hackathon",
    description:
      "Led and organized an inter-college hackathon with 20+ participating teams, managing end-to-end event logistics and mentoring participants.",
    role: "Lead Organizer",
    badge: "Leadership",
  },
  {
    title: "IT Internship — Divine Infotech",
    description:
      "Performed data cleaning, exploratory analysis, and visualization using Python and Excel. Built dashboards and summary reports supporting stakeholder decision-making.",
    role: "IT Intern — Technical Support",
    badge: "Experience",
  },
  {
    title: "Paper Presentation — AICTE",
    description:
      "Presented a certified research paper at an AICTE-recognized event, communicating complex data analytics concepts effectively.",
    role: "Presenter",
    badge: "Research",
  },
];

// Internships Data
export const internshipsList = [
  {
    organization: "Divine Infotech, Coimbatore",
    role: "IT Intern — Technical Support",
    duration: "Jun 2025 — Aug 2025",
    skills: [
      "Data Cleaning & Exploratory Analysis",
      "Dashboard & Report Building",
      "REST API & Firebase Integration",
      "Agile Team Collaboration",
    ],
    tech: ["Python", "Excel", "React.js", "Firebase", "Git & GitHub"],
    image: "/internship/divine-internship-letter.jpg",
    title: "Internship Letter",
  },
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Analytical Thinking",
    icon: "🧠",
    desc: "Breaking down complex datasets into meaningful patterns and actionable business insights.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "SIH 2025 National Winner — solving real-world challenges with data-driven approaches.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Effective teamwork in hackathons, internships, and cross-functional projects.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Presenting complex analytics findings clearly to both technical and business stakeholders.",
  },
  {
    name: "Leadership",
    icon: "👑",
    desc: "Organized Hack Nexus hackathon with 20+ teams, managing logistics and mentoring participants.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quickly learning new tools and frameworks — from Power BI to TensorFlow and cloud services.",
  },
  {
    name: "Attention to Detail",
    icon: "🔍",
    desc: "Meticulous data cleaning and validation ensuring accuracy in every analysis and report.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balancing academics, internship, hackathons, and project development effectively.",
  },
];

export const projects = [
  {
    id: "airline-punctuality",
    number: "01",
    badge: "📊 Data Analytics",
    title: "Airline Punctuality Analysis",
    problem: "Identifying key causes of flight delays and trends across major routes in large-scale airline datasets.",
    techTags: ["Python", "SQL", "Power BI", "Pandas", "NumPy"],
    achievement: "Developed interactive Power BI dashboards and Python visualizations to deliver data-driven business insights for operational improvements.",
    links: {
      github: "https://github.com/kaviyan-004",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "raseed-ai-receipts",
    number: "02",
    badge: "🤖 AI-Powered",
    title: "Raseed AI Receipts",
    problem: "Manually tracking and categorizing raw information from unstructured physical and digital expense receipts.",
    techTags: ["React.js", "Express.js", "MongoDB", "OpenAI API", "Vercel"],
    achievement: "Engineered an AI-powered tool using OpenAI API for structured text extraction, expense tracking, and spending-trend visualization.",
    links: {
      github: "https://github.com/kaviyan-004",
    },
    isFlagship: false,
  },
  {
    id: "leviathone-edna",
    number: "03",
    badge: "🧬 Bioinformatics",
    title: "Leviathone EDNA Analyzer",
    problem: "Processing and visually detecting genetic sequence patterns within massive bioinformatics datasets.",
    techTags: ["Next.js", "Python", "Flask API", "TensorFlow", "Firebase"],
    achievement: "Designed a web app utilizing machine learning models to analyze DNA sequences and present genetic findings through dynamic, interactive data visualizations.",
    links: {
      github: "https://github.com/kaviyan-004",
    },
    isFlagship: false,
  },
  {
    id: "data-privacy-platform",
    number: "04",
    badge: "🔒 Privacy & AI",
    title: "Data Privacy & Analysis Platform",
    problem: "Evaluating raw user datasets for security/privacy vulnerabilities and sharing reports securely.",
    techTags: ["React.js", "Node.js", "Python", "AI Model API", "Firebase"],
    achievement: "Built an AI-powered platform with risk-scoring algorithms, data anonymization, AI chat, and secure multi-format data export (CSV/JSON/XLS) protected by access codes.",
    links: {
      github: "https://github.com/kaviyan-004",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      id: "tcs-data-modeling",
      name: "Data Modeling and Visualization",
      issuer: "TCS iON",
      logos: ["/logos/tcsion.png"],
      category: "Certificate",
      issueDate: "2026",
      credentialId: null,
      verificationUrl: "https://www.linkedin.com/in/kaviyan-s/",
      image: "/certificates/data-modeling.png",
    },
    {
      id: "howard-project-management",
      name: "Project Management Essentials",
      issuer: "Howard University | Coursera",
      logos: ["/logos/howard.png", "/logos/coursera.png"],
      category: "Certificate",
      issueDate: "2025",
      credentialId: null,
      verificationUrl: "https://www.coursera.org/",
      image: "/certificates/project-management.png",
    },
    {
      id: "infosys-ai",
      name: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      logos: ["/logos/infosys.png"],
      category: "Certificate",
      issueDate: "2024",
      credentialId: null,
      verificationUrl: "https://www.linkedin.com/in/kaviyan-s/",
      image: "/certificates/ai.jpg",
    },
    {
      id: "microsoft-tsql",
      name: "Get Started with Transact-SQL Programming",
      issuer: "Microsoft Learn",
      logos: ["/logos/microsoft.png"],
      category: "Certificate",
      issueDate: "2025",
      credentialId: null,
      verificationUrl: "https://learn.microsoft.com/en-us/",
      image: "/certificates/sql-programming.jpg",
    },
    {
      id: "microsoft-data-analysis",
      name: "Discover Data Analysis",
      issuer: "Microsoft Learn",
      logos: ["/logos/microsoft.png"],
      category: "Certificate",
      issueDate: "2025",
      credentialId: null,
      verificationUrl: "https://learn.microsoft.com/en-us/",
      image: "/certificates/data-analysis.jpg",
    },
    {
      id: "infosys-python-ds",
      name: "Python for Data Science",
      issuer: "Infosys Springboard",
      logos: ["/logos/infosys.png"],
      category: "Certificate",
      issueDate: "2025",
      credentialId: null,
      verificationUrl: "https://www.linkedin.com/in/kaviyan-s/",
      image: "/certificates/python-data-science.png",
    },
    {
      id: "infosys-python-intro",
      name: "Introduction to Python",
      issuer: "Infosys Springboard",
      logos: ["/logos/infosys.png"],
      category: "Certificate",
      issueDate: "2025",
      credentialId: null,
      verificationUrl: "https://www.linkedin.com/in/kaviyan-s/",
      image: "/certificates/introduction-to-python.png",
    },
    {
      id: "microsoft-cloud-benefits",
      name: "Describe the Benefits of Using Cloud Services",
      issuer: "Microsoft Learn",
      logos: ["/logos/microsoft.png"],
      category: "Certificate",
      issueDate: "2025",
      credentialId: null,
      verificationUrl: "https://learn.microsoft.com/en-us/",
      image: "/certificates/cloud.jpg",
    },
    {
      id: "tata-cybersecurity",
      name: "Cybersecurity for Beginners",
      issuer: "Tata Strive",
      logos: ["/logos/tata.png"],
      category: "Certificate",
      issueDate: "2025",
      credentialId: null,
      verificationUrl: "https://www.linkedin.com/in/kaviyan-s/",
      image: "/certificates/cybersecurity.jpg",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/kaviyan-s/",
};

export const education = {
  degree: "B.Sc — Computer Science with Data Analytics",
  institution: "Sri Ramakrishna College of Arts & Science",
  cgpa: "8.00",
  graduation: "2027 (Expected)",
  twelfth: "12th Science — 80%",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Data Analytics & Visualization",
    "Python · SQL · Power BI · Excel",
    "Transforming Data into Insights",
  ],
  credential: "B.Sc CS (Data Analytics) · CGPA 8.00",
  copyright: `© ${new Date().getFullYear()} Kaviyan S | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
