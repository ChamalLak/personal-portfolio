/**
 * Portfolio Data for Chamal Lakshan
 * Centralized data store for personal information, skills, projects, and education.
 * Placeholders are explicitly labeled for easy personalization.
 */

export const personalData = {
  name: "Chamal Lakshan",
  initials: "CL",
  headline: "Software Developer & QA Engineer",
  institutionInfo: "Industrial IT Undergraduate at Uva Wellassa University of Sri Lanka",
  degree: "BSc (Hons) in Industrial Information Technology",
  shortBio:
    "Passionate about building reliable web applications and ensuring software quality through disciplined testing methodologies.",
  location: "Sri Lanka",
  university: "Uva Wellassa University of Sri Lanka",
  status: "Open to Software Development & QA Internships",
  statusActive: true,
  
  // Profile photo: set to "/profile.png" when placed in public/, or click "+ Add Your Photo" in the browser!
  avatarImage: "/profile.png",

  // Resume status: set to "/cv.pdf" or "/resume.pdf"
  resumeUrl: "/cv.pdf",
  resumeAvailable: true,
  
  // Contact & Social Placeholders (replace with real links when available)
  email: "chamal.lakshan@email.placeholder", // Placeholder
  emailDisplay: "chamal.lakshan [at] email.com (Placeholder)",
  githubUrl: "https://github.com/ChamalLak", // Repository owner username
  linkedinUrl: "https://linkedin.com/in/chamal-lakshan-placeholder", // Placeholder
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const aboutData = {
  title: "ABOUT ME",
  headline: "Software Developer & QA Engineer",
  institution: "Uva Wellassa University of Sri Lanka",
  degree: "BSc (Hons) in Industrial Information Technology",
  avatarImage: "/profile.png",
  paragraphs: [
    "Hello, I'm Chamal Lakshan, a software developer and QA engineer from Sri Lanka with a strong passion for modern web applications, test automation, and robust system architecture.",
    "I focus on building dependable digital solutions—from crafting responsive React interfaces and clean RESTful APIs to executing structured QA test suites with automated assertions and defect tracking.",
    "My academic foundation in Industrial Information Technology brings an engineering discipline to software development, ensuring scalability, performance, and process awareness across every project."
  ],
  highlights: [
    {
      id: "fullstack",
      title: "Full-Stack Development",
      description: "React, Node.js, Express, Tailwind CSS",
      icon: "code"
    },
    {
      id: "qa-testing",
      title: "QA & Automated Testing",
      description: "Selenium, Postman API, STLC & Bug Triage",
      icon: "shieldCheck"
    },
    {
      id: "databases",
      title: "Database Architecture",
      description: "PostgreSQL, MySQL, Schema Normalization",
      icon: "database"
    },
    {
      id: "industrial-systems",
      title: "Industrial IT Mindset",
      description: "Systems Analysis, Process Optimization & Reliability",
      icon: "layers"
    }
  ],
  techStrip: [
    "React",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Postman",
    "Selenium",
    "Tailwind CSS",
    "Git",
    "Python",
    "Java"
  ]
};

export const experienceData = [
  {
    id: "smart-plate-lead",
    role: "Full-Stack Developer & Project Lead",
    organization: "Smart Plate Platform (UWU)",
    period: "2024 — Present",
    badge: "Active Project",
    responsibilities: [
      "Architected full-stack web ordering system using React, Node.js, and PostgreSQL",
      "Engineered real-time order queue pipeline with dynamic status updates",
      "Implemented responsive checkout interface with client-side form validation"
    ],
    skillsGained: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "RESTful APIs",
      "System Design"
    ]
  },
  {
    id: "qa-engineering",
    role: "QA & Automated Testing Practitioner",
    organization: "Academic Quality Engineering",
    period: "2024 — Present",
    badge: "Ongoing Practice",
    responsibilities: [
      "Designed and executed end-to-end test cases, defect matrices, and test plans",
      "Formulated automated API verification collections in Postman with schema assertions",
      "Conducted regression testing, edge case inspection, and bug lifecycle triage"
    ],
    skillsGained: [
      "Postman API Testing",
      "Test Case Design",
      "Bug Life Cycle (STLC)",
      "Selenium Basics",
      "API Assertions"
    ]
  },
  {
    id: "uwu-undergraduate",
    role: "Industrial IT Undergraduate",
    organization: "Uva Wellassa University of Sri Lanka",
    period: "2023 — Present",
    badge: "Academic",
    responsibilities: [
      "Pursuing specialized curriculum integrating software engineering and industrial systems",
      "Collaborated in team technical projects on system analysis, modeling, and prototyping",
      "Applied process awareness and database normalization to real-world software scenarios"
    ],
    skillsGained: [
      "Industrial Systems Mindset",
      "Database Normalization",
      "System Analysis & Design",
      "Team Leadership"
    ]
  }
];

export const coreSkillsData = [
  {
    id: "qa-testing",
    title: "QA & Quality Engineering",
    icon: "shieldCheck",
    points: [
      "Manual & exploratory testing workflows",
      "Test case design, traceability & execution (STLC)",
      "REST API verification & assertion scripts with Postman",
      "Defect logging, bug reproduction & severity triage"
    ]
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Web Development",
    icon: "code",
    points: [
      "Responsive UI engineering with React & Modern CSS",
      "Component-based architecture & state management",
      "RESTful API design with Node.js & Express",
      "Client-server data validation & error handling"
    ]
  },
  {
    id: "databases-industrial",
    title: "Databases & Industrial Systems",
    icon: "database",
    points: [
      "Relational schema design (PostgreSQL & MySQL)",
      "Database normalization & query optimization",
      "Industrial systems analysis & process awareness",
      "Telemetry metrics monitoring & dashboarding"
    ]
  }
];

export const programmingLanguages = [
  { name: "Java", focus: "OOP Principles, Core Algorithms, Spring Boot Basics" },
  { name: "JavaScript (ES6+)", focus: "Modern React, DOM, Async/Await & Logic" },
  { name: "Python", focus: "Scripting, Automation, Data Basics" },
  { name: "SQL", focus: "PostgreSQL, MySQL, Complex Queries & Schema Design" },
  { name: "C", focus: "System Programming Foundations & Memory Concepts" }
];

export const techStackLogos = [
  { name: "React", tag: "Frontend" },
  { name: "JavaScript", tag: "Language" },
  { name: "Node.js", tag: "Backend" },
  { name: "PostgreSQL", tag: "Database" },
  { name: "MySQL", tag: "Database" },
  { name: "Postman", tag: "QA / API" },
  { name: "Selenium", tag: "QA Automation" },
  { name: "Tailwind CSS", tag: "Styling" },
  { name: "Git", tag: "VCS" },
  { name: "GitHub", tag: "Platform" },
  { name: "Java", tag: "Language" },
  { name: "Python", tag: "Language" },
  { name: "HTML5", tag: "Markup" },
  { name: "CSS3", tag: "Styling" }
];

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Foundational and object-oriented programming languages used in academic and personal projects.",
    skills: [
      { name: "Java", level: "Intermediate", tag: "OOP / Core" },
      { name: "JavaScript (ES6+)", level: "Proficient", tag: "Web & Logic" },
      { name: "Python", level: "Familiar", tag: "Scripting & Data" },
      { name: "C", level: "Academic", tag: "System Foundations" },
      { name: "SQL", level: "Proficient", tag: "Querying & DDL" }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern client-side and full-stack web technologies for building interactive applications.",
    skills: [
      { name: "React", level: "Proficient", tag: "Components & Hooks" },
      { name: "HTML5 & Semantic Markup", level: "Advanced", tag: "Structure & A11y" },
      { name: "CSS3 / Modern Styling", level: "Advanced", tag: "Flexbox, Grid, Variables" },
      { name: "RESTful APIs", level: "Proficient", tag: "Integration & Fetch" },
      { name: "Vite & Tooling", level: "Proficient", tag: "Bundling & HMR" },
      { name: "Node.js Basics", level: "Familiar", tag: "Runtime Environment" }
    ]
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance & Testing",
    description: "Testing methodologies, API verification, and defect lifecycle management.",
    skills: [
      { name: "Manual & Exploratory Testing", level: "Proficient", tag: "Functional Validation" },
      { name: "Test Case Design & Execution", level: "Proficient", tag: "STLC" },
      { name: "API Testing (Postman)", level: "Proficient", tag: "Endpoint & Assertion" },
      { name: "Defect Life Cycle & Tracking", level: "Proficient", tag: "Bug Reporting" },
      { name: "Smoke & Regression Testing", level: "Proficient", tag: "Release Health" },
      { name: "QA Documentation", level: "Proficient", tag: "Test Plans & Matrices" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    description: "Relational database design, schema normalization, and data persistence.",
    skills: [
      { name: "MySQL", level: "Proficient", tag: "Relational RDBMS" },
      { name: "PostgreSQL", level: "Familiar", tag: "Relational RDBMS" },
      { name: "MongoDB", level: "Familiar", tag: "NoSQL / Documents" },
      { name: "Database Normalization", level: "Proficient", tag: "Schema Design" }
    ]
  },
  {
    id: "tools",
    title: "Development Tools & Workflow",
    description: "Essential productivity, version control, and collaboration software.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", tag: "Version Control" },
      { name: "VS Code", level: "Advanced", tag: "Code Editor" },
      { name: "Postman", level: "Proficient", tag: "API Client" },
      { name: "Jira / Trello Basics", level: "Familiar", tag: "Agile Task Tracking" },
      { name: "Browser DevTools", level: "Proficient", tag: "Debugging & Audit" }
    ]
  }
];

export const projectsData = [
  {
    id: "smart-plate",
    title: "Smart Plate - Food Ordering Platform",
    category: "Full-Stack Web Application",
    filterGroup: "Full-Stack Web Applications",
    status: "Completed",
    isPrivate: true,
    thumbnail: "/projects/smart-plate.jpg",
    shortDescription:
      "A digital canteen ordering and queue management system designed to eliminate cafeteria wait times, featuring real-time kitchen order tracking and seamless mobile checkout.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/ChamalLak",
    demoUrl: null,
    featured: true
  }
];

export const educationData = [
  {
    id: "university",
    degree: "BSc (Hons) in Industrial Information Technology",
    institution: "Uva Wellassa University of Sri Lanka",
    period: "Undergraduate (Present)",
    badge: "Current Degree",
    description:
      "Specialized program integrating industrial engineering, information technology, and software development disciplines. Fosters systematic problem-solving and IT leadership for industrial and enterprise domains.",
    modules: [
      "Software Engineering",
      "Database Management Systems (RDBMS)",
      "Object-Oriented Programming (Java)",
      "System Analysis & Design",
      "Industrial Systems & Quality Management",
      "Data Structures & Algorithms",
      "Web Applications Development",
      "Computer Networks"
    ]
  },
  {
    id: "secondary",
    degree: "G.C.E. Advanced Level",
    institution: "Secondary College [Placeholder: Add School Name]",
    period: "Completed",
    badge: "Secondary Education",
    description:
      "Completed secondary education with focused studies in Technology / Physical Science stream, providing solid mathematical and analytical foundations.",
    modules: [
      "Information & Communication Technology",
      "Science for Technology / Physics",
      "Engineering Technology / Mathematics"
    ]
  }
];

export const contactInfo = {
  headline: "Let's connect and build something dependable.",
  subtext:
    "I am eager to contribute as an intern or junior talent in Software Development or QA roles. Feel free to reach out for inquiries, discussions, or opportunities.",
  email: "chamal.lakshan@email.placeholder", // Placeholder
  emailDisplay: "chamal.lakshan [at] email.com (Placeholder)",
  github: "https://github.com/ChamalLak",
  linkedin: "https://linkedin.com/in/chamal-lakshan-placeholder",
  location: "Badulla / Sri Lanka",
  university: "Uva Wellassa University of Sri Lanka"
};
