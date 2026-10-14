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
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const aboutData = {
  lead: "Bridging computational engineering with industrial quality standards.",
  paragraphs: [
    "I am an undergraduate reading for a BSc (Hons) in Industrial Information Technology at Uva Wellassa University of Sri Lanka. My degree blends core software engineering disciplines with industrial system analysis, giving me a strong perspective on how high-quality technology solutions power modern organizations.",
    "My primary career interests center on Software Development and Quality Assurance (QA). I am enthusiastic about crafting clean, maintainable front-end and back-end code, as well as designing structured test cases, validating APIs, and ensuring software releases are robust, stable, and bug-free.",
    "I am dedicated to continuous self-improvement, clean code practices, and collaboration. I am actively seeking internship opportunities where I can contribute to real-world engineering teams while refining my developer and QA capabilities."
  ],
  pillars: [
    {
      id: "software-dev",
      title: "Software Development",
      description: "Developing modern, component-driven web interfaces and backend services with emphasis on clean syntax, maintainability, and responsiveness.",
      icon: "code"
    },
    {
      id: "quality-assurance",
      title: "Quality Assurance (QA)",
      description: "Designing structured test cases, conducting manual and exploratory testing, validating API endpoints, and tracking defect lifecycles.",
      icon: "shieldCheck"
    },
    {
      id: "industrial-it",
      title: "Industrial IT Mindset",
      description: "Approaching technical challenges with systematic thinking, business process awareness, and strict adherence to software quality standards.",
      icon: "layers"
    },
    {
      id: "analytical-problem-solving",
      title: "Analytical Problem Solving",
      description: "Breaking down complex system requirements into manageable modules with disciplined debugging and verification routines.",
      icon: "terminal"
    }
  ]
};

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
    id: "industrial-inventory-system",
    title: "Industrial Inventory & Asset Tracking System",
    category: "Software Development",
    shortDescription:
      "A modular web-based inventory management portal engineered for industrial operations to track warehouse stocks, log replenishment orders, and maintain audit records.",
    keyPoints: [
      "Designed dynamic dashboard with real-time stock alert thresholds",
      "Structured relational schema with multi-tier category management",
      "Implemented responsive front-end components and client-side form validation"
    ],
    techStack: ["React", "JavaScript", "MySQL", "REST API", "Modern CSS"],
    githubUrl: "https://github.com/ChamalLak/inventory-tracking-system", // Placeholder link
    demoUrl: null, // Placeholder: Live demo not deployed yet
    isPlaceholder: true,
    featured: true
  },
  {
    id: "api-qa-test-suite",
    title: "REST API Verification & QA Automation Suite",
    category: "Quality Assurance",
    shortDescription:
      "A structured API test collection and defect verification suite developed to validate backend services, status code assertions, response latencies, and payload integrity.",
    keyPoints: [
      "Crafted automated test scripts with schema assertions and status verifications",
      "Documented edge cases, negative scenarios, and rate-limiting behaviors",
      "Produced comprehensive defect reports with severity ratings and reproduction steps"
    ],
    techStack: ["Postman", "JavaScript", "REST APIs", "Test Case Design", "Markdown"],
    githubUrl: "https://github.com/ChamalLak/api-qa-test-suite", // Placeholder link
    demoUrl: null,
    isPlaceholder: true,
    featured: true
  },
  {
    id: "campus-resource-portal",
    title: "Academic & Campus Resource Management Portal",
    category: "Software Development",
    shortDescription:
      "A student and faculty portal prototype designed to streamline access to university department timetables, lecture resources, and announcement notices.",
    keyPoints: [
      "Engineered responsive UI adhering to modern accessibility (a11y) standards",
      "Interactive course schedule filtering by semester and department",
      "Clean client-side state handling without heavy external library overhead"
    ],
    techStack: ["React", "JavaScript", "Vite", "CSS Custom Properties"],
    githubUrl: "https://github.com/ChamalLak/campus-resource-portal", // Placeholder link
    demoUrl: null,
    isPlaceholder: true,
    featured: false
  },
  {
    id: "defect-tracking-dashboard",
    title: "Defect Tracking & QA Workflow Dashboard",
    category: "Quality Assurance",
    shortDescription:
      "A streamlined issue logging and bug lifecycle management interface modeled after agile QA processes to organize defects across open, in-progress, and verified states.",
    keyPoints: [
      "Structured bug severity matrix (Critical, Major, Minor, Cosmetic)",
      "Interactive status progression pipeline matching industry STLC stages",
      "Comprehensive defect detail view including environment and reproduction logs"
    ],
    techStack: ["React", "JavaScript", "Data Modeling", "CSS Grid"],
    githubUrl: "https://github.com/ChamalLak/defect-tracking-dashboard", // Placeholder link
    demoUrl: null,
    isPlaceholder: true,
    featured: false
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
