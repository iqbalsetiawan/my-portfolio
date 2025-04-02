import { bg2 } from "../assets/images/project";

export const themeConfig = {
  light: {
    primary: "#2563EB",
    background: "#F8FAFC",
    card: "#FFFFFF",
    text: "#0F172A",
    subtext: "#64748B",
    accent: "#93C5FD",
  },
  dark: {
    primary: "#3B82F6",
    background: "#0F172A",
    card: "#1E293B",
    text: "#F1F5F9",
    subtext: "#CBD5E1",
    accent: "#60A5FA",
  },
};

export const navigationItems = [
  "Home",
  "Experience",
  "Tech-Stack",
  "Projects",
  "Contact",
];

export const personalInfo = {
  name: "Iqbal Setiawan",
  title: "Crafting Digital Experiences with Code",
  avatar: "https://picsum.photos/id/1012/150/150",
  backgroundImage: bg2,
};

export const sectionTitles = {
  experience: {
    title: "Professional Experience",
    subtitle: "A track record of delivering impactful solutions",
  },
  techStack: {
    title: "Technical Expertise",
    subtitle: "Technologies and tools I specialize in",
  },
  projects: {
    title: "Featured Projects",
    subtitle: "Enterprise-grade solutions showcasing technical expertise",
  },
  contact: {
    title: "Let's Talk",
    subtitle: "Got a project in mind? I'd love to hear from you!",
  },
};

export const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: "easeOut" },
    },
  },
  item: {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  },
  hover: {
    hover: {
      scale: 1.03,
      boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
    },
  },
  loader: {
    animate: {
      rotate: 360,
      transition: { repeat: Infinity, duration: 1, ease: "linear" },
    },
  },
};
