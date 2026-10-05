
export const SITE_URL = "https://arzooahmed.com";

export const person = {
  name: "Arzoo Ahmed",
  firstName: "Arzoo",
  lastName: "Ahmed",
  initials: "AA",
  title: "MERN Stack Developer & Full-Stack Engineer",
  titleShort: "MERN Stack Developer",
  status: "Available for Full-Stack Developer Opportunities",
  location: "Dhaka, Bangladesh",
  locationShort: "Dhaka, BD",
  bio: `I build modern web experiences with JavaScript, React, Next.js and full-stack technologies. My focus is on learning deliberately, building thoughtfully, and understanding the systems I work with — from UI to server to database.`,
  bioExtended: `Currently pursuing my BSS Honours degree while deepening my expertise in MERN stack development. I approach engineering as both craft and curiosity — writing code that's clean, scalable, and worth maintaining. I'm actively looking for junior developer and internship opportunities where I can contribute, learn from experienced engineers, and grow.`,
  email: "arzooahmed0170609@gmail.com", // Replace with real email
  phone: "+8801706097788",    // WhatsApp
};

export const social = {
  github: "https://github.com/arzoo594",
  linkedin: "https://www.linkedin.com/in/arzoo-ahmed2003/",
  facebook: "https://www.facebook.com/arzoo.ahmed.7165/",
  whatsapp: "https://wa.me/8801706097788",
};

export const education = [
  {
    id: "edu-01",
    degree: "BSS Honours",
    field: "Political Science",
    institution: "Govt. Nazmul Smrity College | Nalitabari",
    location: "Bangladesh",
    period: "Current",
    status: "In Progress",
    description: "Currently pursuing BSS Honours with a parallel focus on full-stack web development and software engineering.",
  },
];

export const experience = [
  {
    id: "exp-01",
    role: "Web-Developer",
    company: "Garden-Sciece",
    location: "Sherpur",
    period: "7 June 2026 - Present",
    type: "Part-time",
    description: "As a Web Developer at Garden Science, I develop and maintain responsive, user-friendly web solutions using modern web development practices.",
   responsibilities: [
  "Develop and maintain responsive web interfaces",
  "Implement website features and improve user experience",
  "Maintain and update WordPress websites",
  "Collaborate on website improvements and content updates",
],
    technologies: ["JavaScript", "React","WordPress"],
  },
];

export const skills = {
  core: [
    { id: "html", label: "HTML", category: "foundation" },
    { id: "css", label: "CSS", category: "foundation" },
    { id: "javascript", label: "JavaScript", category: "language" },
    { id: "WordPress", label: "WordPress", category: "CMS" },
  ],
  frontend: [
    { id: "react", label: "React", category: "frontend" },
    { id: "nextjs", label: "Next.js", category: "frontend" },
    { id: "tailwind", label: "Tailwind CSS", category: "frontend" },
    { id: "WordPress", label: "WordPress", category: "CMS" },
  ],
  backend: [
    { id: "nodejs", label: "Node.js", category: "backend" },
    { id: "express", label: "Express.js", category: "backend" },
    { id: "mongodb", label: "MongoDB", category: "backend" },
    { id: "WordPress", label: "WordPress", category: "CMS" },
  ],
  tools: [
    { id: "git", label: "Git", category: "tools" },
    { id: "github", label: "GitHub", category: "tools" },
    { id: "vscode", label: "VS Code", category: "tools" },
    { id: "restapi", label: "REST APIs", category: "tools" },
  ],
};

export const projects = [
  {
    id: "project-01",
    number: "01",
    title: "Delivery Platform",
    category: "Full-Stack Web Application",
    description: "ZapShift is a fast and reliable platform for smart logistics, seamless deliveries, and efficient shifting solutions.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://zap-shift-byakio.web.app/",
    githubUrl: "https://github.com/arzoo594/zapShipt-client-final",
    caseStudyUrl: null,
    featured: true,
    image: "https://i.ibb.co.com/KxwXMrjV/Screenshot-2026-10-05-212819.webp", // Add path to project image e.g. "/images/project-01.jpg"
    accentColor: "#00D4FF",
  },
  {
    id: "project-02",
    number: "02",
    title: "GardenShop – Gardening E-commerce Platform",
    category: "Frontend Application",
    description: "A modern e-commerce platform where gardening enthusiasts can easily explore and purchase quality gardening tools, seeds, plants, and essential gardening supplies.",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://gardenshop.bd/",
    githubUrl: "https://github.com/arzoo594/your-repo",
    caseStudyUrl: null,
    featured: false,
    image: "https://i.ibb.co.com/SDjbtC6P/gardenshop.webp",
    accentColor: "#7C3AED",
  },
  {
    id: "project-03",
    number: "03",
    title: "ClubSphere – Club & Event Management Platform",
    category: "Backend / API",
    description: "ClubSphere is a modern and user-friendly platform to manage clubs, events, and managers effortlessly. Discover clubs, join events, or create your own community in one smart platform.",
    technologies: ["Node.js", "Express", "MongoDB"],
    liveUrl: "https://club-sphere-auth.web.app/",
    githubUrl: "https://github.com/arzoo594/-Club-Sphere-client-side",
    caseStudyUrl: null,
    featured: false,
    image: "https://i.ibb.co.com/V0bCQdbr/Screenshot-2026-10-05-222515.webp",
    accentColor: "#0EA5E9",
  },
];

export const seo = {
  title: "Arzoo Ahmed | MERN Stack Developer & Full-Stack Engineer",
  description:
    "Arzoo Ahmed is a MERN Stack Developer and Full-Stack Engineer based in Dhaka, Bangladesh. Building modern web applications with JavaScript, React, Next.js, Node.js and MongoDB.",
  keywords: [
    "Arzoo Ahmed",
    "MERN Stack Developer",
    "Full-Stack Engineer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Bangladesh",
    "Dhaka Developer",
    "Junior Developer",
  ],
  ogImage: `${SITE_URL}/opengraph-image`,
  twitterHandle: null,
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
