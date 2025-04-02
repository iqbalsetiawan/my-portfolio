import {
  JavaScriptIcon,
  ReactIcon,
  DartIcon,
  FlutterIcon,
  JavaIcon,
  SpringIcon,
  NodejsIcon,
  PythonIcon,
  GitIcon,
  OracleIcon,
  JiraIcon,
  TrelloIcon,
} from "../components/icons";

import { arjuna, arjuna2, arjuna3, arjuna4, arjuna5, yokke, yokke2, assist, assist2 } from "../assets/images/project";

export const experiences = [
  {
    title: "Frontend Developer",
    company: "CIMB Niaga",
    duration: "Aug 2024 - Present",
    icon: "💻",
    achievements: [
      "Developed a mobile application, Arjuna, an internal HRMS system, using Flutter to streamline HR processes at CIMB Niaga Bank, with a focus on the staff loan module (other loan, KPR, and KPM) for a seamless employee experience",
      "Collaborated with the product development team to brainstorm and design innovative, employee-centric features and applications tailored to the bank's HR needs",
      "Diagnosed and resolved bugs and issues in the frontend codebase of the staff loan module, enhancing functionality and optimizing the user experience for employees",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Yokke",
    duration: "Oct 2022 - Oct 2023 · 1 yr 1 mo",
    icon: "🌐",
    achievements: [
      "Conducted front end development on the web platform called Yokke Merchant Aggregator, a system designed to facilitate merchant registration, enabling them to leverage Yokke's EDC and QRIS features",
      "Collaborated with the team to develop and implement new features based on project requirements",
      "Identified and fixed bugs and issues in the front end codebase to ensure smooth functionality and user experience",
    ],
  },
  {
    title: "Product Lead",
    company: "Assist.id",
    duration: "Jul 2022 - Oct 2022 · 4 mos",
    icon: "👥",
    achievements: [
      "Oversaw and managed the day-to-day activities of the team, ensuring effective coordination and alignment with organizational goals",
      "Delegated tasks and assigned responsibilities to team members, leveraging their strengths and expertise, while setting clear deadlines to ensure timely completion of deliverables",
      "Provided training, guidance, and mentorship to new members of the product team, facilitating their integration and professional development within the organization",
      "Set clear and measurable goals, and effectively communicated them to team members, ensuring alignment and understanding of expectations, which ultimately drove the team towards success",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Assist.id",
    duration: "Jul 2019 - Jun 2022 · 3 yrs",
    icon: "💻",
    achievements: [
      "Developed and implemented new features to enhance user experience and interface, focusing on creating reusable and efficient code for better scalability",
      "Built robust validation systems for user inputs to ensure data integrity and security while maintaining seamless functionality",
      "Collaborated effectively with team members to deliver high-quality features on schedule, consistently meeting project deadlines and client expectations",
      "Identified and resolved frontend issues promptly through systematic debugging and testing, maintaining optimal website performance",
      "Demonstrated strong commitment to code quality by implementing maintainable solutions and following best practices in frontend development",
    ],
  },
  {
    title: "Quality Assurance",
    company: "Assist.id",
    duration: "Apr 2019 - Jun 2019 · 3 mos",
    icon: "🔍",
    achievements: [
      "Designed comprehensive test plans and scenarios using Microsoft Excel, ensuring thorough coverage of system functionality",
      "Executed test cases across varied environments and data inputs, validating system performance and reliability",
      "Documented and assessed test results, tracking defects and deviations meticulously, and delivering clear, concise reports to stakeholders",
      "Collaborated with cross-functional teams to promote quality assurance, sharing insights and driving improvements in product quality",
      "Analyzed technical characteristics of equipment systems, identifying risks and enhancement opportunities while ensuring compliance with industry standards",
      "Implemented automation testing with Selenium and Python, streamlining processes, boosting efficiency, and supporting regression testing",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Arjuna HRMS Mobile App",
    description:
      "A comprehensive HRMS mobile application for CIMB Niaga Bank, focusing on staff loan management including other loan, KPR, and KPM modules. Built with Flutter for cross-platform compatibility.",
    technologies: ["Dart Flutter", "Firebase", "GetX", "Dio", "Hive"],
    imageUrl: arjuna,
    images: [arjuna, arjuna2, arjuna3, arjuna4, arjuna5],
  },
  {
    id: 2,
    title: "Yokke Merchant Aggregator",
    description:
      "A web platform for merchant registration and management, enabling merchants to leverage Yokke's EDC and QRIS features. Focused on creating a seamless onboarding experience.",
    technologies: ["React JS", "Ant Design", "Java Spring", "Oracle"],
    imageUrl: yokke,
    images: [yokke, yokke2],
  },
  {
    id: 3,
    title: "Assist.id",
    description:
      "A comprehensive web application for Assist.id, focusing on feature development and code quality. Implemented new features while ensuring maintainability and scalability.",
    technologies: ["React JS", "Material UI", "Redux", "Recharts"],
    imageUrl: assist,
    images: [assist, assist2],
  },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/iqbal-setiawan/",
    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    href: "https://github.com/iqbalsetiawan/",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    href: "mailto:ibal.setiawan08@gmail.com",
    icon: "M12 13.5l-8.5-6.5h17l-8.5 6.5zm0 2.5l8.5-6.5v11h-17v-11l8.5 6.5z",
  },
];

export const fileUrls = {
  cv: "https://bit.ly/IqbalSetiawanResume",
  portfolio: "https://bit.ly/IqbalSetiawanPortfolio",
};

export const techStack = [
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "React.js", icon: ReactIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Python", icon: PythonIcon },
  { name: "Dart", icon: DartIcon },
  { name: "Flutter", icon: FlutterIcon },
  { name: "Java", icon: JavaIcon },
  { name: "Spring", icon: SpringIcon },
  { name: "Oracle", icon: OracleIcon },
  { name: "Git", icon: GitIcon },
  { name: "Jira", icon: JiraIcon },
  { name: "Trello", icon: TrelloIcon },
];
