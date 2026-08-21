/**
 * SINGLE SOURCE OF CONTENT FOR THE WHOLE SITE.
 * Edit anything here — no need to touch component files.
 */
import cvUrl from "@/assets/Maryam_Zulqarnain_CV1.pdf";
import hirefastImage from "@/assets/hirefast.png";
import i2cImage from "@/assets/i2c.png";
import johnsonImage from "@/assets/Screenshot 2026-08-19 030426.png";
import imfImage from "@/assets/imf-cover.jpg";
import podcastImage from "@/assets/podcast.png";
import websiteImage from "@/assets/website.png";
import bcgMatrixImage from "@/assets/bcg-matrix-test.png";
export const profile = {
  name: "Maryam Zulqarnain",
  role: "Business & Information Technology Student",
  location: "Lahore, Pakistan",
  email: "maryamzulqarnain18@gmail.com",
  linkedin: "https://www.linkedin.com/in/maryam-zulqarnain-9880b8375",
  linkedinLabel: "linkedin.com/in/maryam-zulqarnain-9880b837",
  cvUrl,
  availability: "Open to Opportunities",
  tagline: "Business, Marketing & Strategy — with a creative edge.",
  heroIntro:
    "I'm a Business & Information Technology student at Punjab University, working at the intersection of marketing, strategy and technology , turning consumer insight and research into ideas that hold up in the real world.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "A little about me.",
  paragraphs: [
    "I study Business & Information Technology, which means I spend my time in two worlds at once: strategy frameworks and spreadsheets on one side, interfaces and code on the other. I like that combination — it lets me look at a business question analytically and then present the answer in a way people actually want to engage with.",
    "Most of my work so far has lived in market research, brand and portfolio analysis, entrepreneurship and design: mapping a company's products onto a BCG matrix, shaping a value proposition for a new service idea, wireframing an app, or standing up to present a case study. Alongside that, I stay active in the Talash Literary Society, where debate and storytelling keep the communication side sharp.",
    "I'm curious, detail-oriented, and always looking for the next thing to learn — especially where marketing meets technology.",
  ],
  highlights: [
    { value: "2nd Place", label: "Research Competition — FCCU" },
    { value: "90%", label: "Intermediate — Science" },
    { value: "96%", label: "Matriculation — Science" },
    { value: "2024–Present", label: "Business & IT, Punjab University" },
  ],
};

export type Experience = {
  role: string;
  org: string;
  date: string;
  description: string;
  skills: string[];
};

export const experiences: Experience[] = [
  {
  role: "Digital Marketing Intern",
  org: "Devmine",
  date: "Jul – Aug 2026",
  description:
    "Created and researched content for client social media accounts — from competitor analysis and copywriting to post design and growth strategy — using AI tools to speed up ideation and research.",
  skills: ["Content Strategy", "Copywriting", "Meta Ads", "AI Tools"],
},
  {
    role: "Virtual Tech Intern",
    org: "IEUK — UK Government Programme",
    date: "2025",
    description:
      "Completed a competitive virtual internship focused on technology and innovation, with exposure to real-world tech industry workflows and structured problem-solving.",
    skills: ["Technology & Innovation", "Problem Solving", "Industry Workflows"],
  },
  {
    role: "Job Simulations",
    org: "Lloyds Banking Group & Accenture",
    date: "2025",
    description:
      "Worked through industry job simulations covering banking operations and consulting frameworks, applying structured thinking to client-style business problems.",
    skills: ["Consulting Frameworks", "Banking Operations", "Business Analysis"],
  },
 
   {
    role: "Member",
    org: "Talash Literary Society",
    date: "Ongoing",
    description:
      "Active participant in literary events, debates and intellectual discourse — a steady space to practise public speaking, argument and storytelling.",
    skills: ["Public Speaking", "Debate", "Storytelling"],
  }
];

export type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  tools: string[];
  /** Visual style of the abstract placeholder. Replace `image` to use a real screenshot. */
  visual: "strategy" | "matrix" | "slides" | "wireframe" | "website" | "research";
  /** Add an imported image here later to replace the abstract placeholder. */
  image?: string;
  /** Control how the image sits inside the card. */
  imageFit?: "cover" | "contain";
  /** Add a real URL to show a "View Project" button. Leave undefined for no button. */
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "HireFast",
    category: "Entrepreneurship Project",
    year: "2025",
    description:
      "A local services marketplace concept built out end to end: business model, value proposition, target market segmentation and a go-to-market strategy for early adopters.",
    tools: ["Business Model", "Value Proposition", "Segmentation", "Go-to-Market"],
    visual: "strategy",
    image: hirefastImage,
    featured: true,
  },
  {
    name: "Engro Foods — BCG Matrix Analysis",
    category: "Market Research",
    year: "2026",
    description:
      "Strategic analysis of Engro Foods' product portfolio using the BCG Matrix framework, mapping products across growth and market share to draw investment implications.",
    tools: ["BCG Matrix", "MS Excel", "Brand Analysis"],
    visual: "matrix",
    image: bcgMatrixImage,
    imageFit: "contain",
    featured: true,
  },
  {
    name: "Johnson & Johnson Case Study",
    category: "Business Presentation",
    year: "2024",
    description:
      "Researched, built and presented a detailed business case study, translating company research into a clear narrative and a set of defensible takeaways.",
    tools: ["Case Analysis", "Research", "Presentation"],
    visual: "slides",
    image: johnsonImage,
    imageFit: "contain",
  },
  {
    name: "IMF & Global Economy Presentation",
    category: "Economics Research",
    year: "2025",
    description:
      "Analysed the IMF's role in the global economy and delivered a formal presentation on its influence, instruments and criticisms.",
    tools: ["Macroeconomics", "Research", "Public Speaking"],
    visual: "research",
    image: imfImage,
    imageFit: "contain",
  },
  {
    name: "Mobile App UI & Podcast App Wireframing",
    category: "Product Design",
    year: "2025",
    description:
      "Designed a complete mobile application interface in Moqups, plus detailed wireframes and user flow diagrams for a podcast app.",
    tools: ["Figma", "Moqups", "Canva", "Wireframing"],
    visual: "wireframe",
    image: podcastImage,
    imageFit: "contain",
    featured: true,
  },
  {
    name: "Personal Website",
    category: "Web Development",
    year: "2025",
    description:
      "Designed and developed a fully responsive personal website from scratch, handling layout, typography and responsive behaviour directly in HTML and CSS.",
    tools: ["HTML", "CSS", "Responsive Design"],
    visual: "website",
    image: websiteImage,
    imageFit: "contain",
  },
  {
    name: "I2C Business Report",
    category: "Business Analysis",
    year: "2025",
    description:
      "Prepared a comprehensive business analysis report using real firm data, structuring findings into a readable report for a non-technical audience.",
    tools: ["Business Analysis", "MS Excel", "Reporting"],
    visual: "research",
    image: i2cImage,
    imageFit: "contain",
  },
 
];

export const skillGroups = [
  {
    title: "Marketing & Strategy",
    skills: [
      "Consumer Insight",
      "Brand Analysis",
      "BCG Matrix",
      "Market Research",
      "Competitive Analysis",
      "Go-to-Market Strategy",
    ],
  },
  {
    title: "Tools & Technical",
    skills: ["Canva", "Figma", "MS Excel", "SQL", "Python", "Zapier", "Moqups", "C++", "HTML & CSS"],
  },
  {
    title: "Professional",
    skills: [
      "Public Speaking",
      "Cross-functional Collaboration",
      "Research & Analysis",
      "Storytelling",
      "Teamwork",
      "Attention to Detail",
    ],
  },
];

export const education = [
  {
    degree: "BS Business & Information Technology",
    school: "Punjab University",
    date: "2024 – Present",
    note: "Currently in sophomore year.",
    coursework: ["Marketing", "Macroeconomics", "Microeconomics", "Entrepreneurship", "Management"],
  },
  {
    degree: "Intermediate — Science",
    school: "Crescent College",
    date: "2022 – 2024",
    note: "Graduated with 90% marks.",
    coursework: [],
  },
  {
    degree: "Matriculation — Science",
    school: "Crescent Kids Campus",
    date: "2022",
    note: "Graduated with 96% marks.",
    coursework: [],
  },
];

export const awards = [
  { title: "Research Competition — 2nd Place", org: "FCCU", date: "Apr 2026" },
  { title: "Honhar Scholarship Recipient", org: "Merit-based national scholarship", date: "2024 – 2028" },
  { title: "HEC Laptop Awardee", org: "Higher Education Commission of Pakistan", date: "" },
  { title: "Merit Tuition Scholarship", org: "Crescent College — full merit support", date: "" },
];

export const certifications = [
  { title: "Successful Presentation", org: "Coursera" },
  { title: "AI For Everyone", org: "Coursera" },
  { title: "SQL for Data Science", org: "Coursera" },
  { title: "Machine Learning Introduction", org: "Coursera" },
  { title: "Starting to Code in Python", org: "Bright Network" },
];

export const contact = {
  heading: "Let's create something meaningful.",
  copy: "Interested in marketing, strategy, research, technology, or creative projects? I'm always open to learning, collaborating, and exploring new opportunities.",
};
