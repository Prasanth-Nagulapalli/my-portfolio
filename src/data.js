import { DiReact } from "react-icons/di";
import { SiUpwork } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { portfolioThumbnail, littleLemonThumbnail } from "./images";

export const menu = [
  { name: "Home" },
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio",
    image: portfolioThumbnail,
    category: "Front-End",
    data: {
      description: `Explore my portfolio, a showcase of my web development expertise. Built with React.js, it features dynamic animations powered by GSAP, seamless scrolling with Lenis, and interactive carousels using SwiperJS. Each project is detailed with live demos and technology insights, reflecting my ability to craft engaging, user-friendly web applications. The design emphasizes clarity and accessibility, providing an intuitive experience as you navigate through my work and achievements.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "React.js",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
    ],
  },

  {
    id: 2,
    title: "Little Lemon - Table Booking & Online Ordering Application",
    image: littleLemonThumbnail,
    category: "Front-End",
    data: {
      description: `Experience seamless dining with Little Lemon, our comprehensive table booking 
        and online ordering application. Designed to simplify restaurant management and enhance 
        customer convenience, this project integrates an intuitive UI with robust functionality. 
        Book tables, order meals, and enjoy a smooth user experience that brings your dining service 
        into the digital age.`,
      demoLink: "https://littlelemon-resto.netlify.app/",
      sourceLink: "https://github.com/Prasanth-Nagulapalli/capestone-project",
    },
    stack: [
      {
        name: "React.js",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 3,
    title: "Little Lemon - Table Booking & Online Ordering Application",
    image: littleLemonThumbnail,
    category: "Front-End",
    data: {
      description: `Experience seamless dining with Little Lemon, our comprehensive table booking 
        and online ordering application. Designed to simplify restaurant management and enhance 
        customer convenience, this project integrates an intuitive UI with robust functionality. 
        Book tables, order meals, and enjoy a smooth user experience that brings your dining service 
        into the digital age.`,
      demoLink: "https://littlelemon-resto.netlify.app/",
      sourceLink: "https://github.com/Prasanth-Nagulapalli/capestone-project",
    },
    stack: [
      {
        name: "React.js",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
    ],
  },
];

export const experience = [
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
      },
      {
        skill: "GSAP",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node.js",
        level: "Intermediate",
      },
      {
        skill: "Express.js",
        level: "Intermediate",
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        skill: "VS Code",
        level: "Experienced",
      },
      {
        skill: "Git/GitHub",
        level: "Intermediate",
      },
      {
        skill: "Postman",
        level: "Intermediate",
      },
      {
        skill: "Docker",
        level: "Intermediate",
      },
      {
        skill: "Figma",
        level: "Intermediate",
      },
      {
        skill: "Canva",
        level: "Intermediate",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "upwork",
    icon: <SiUpwork />,
    link: "https://www.upwork.com/freelancers/~0151b2bd22d1aae643",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/Prasanth-Nagulapalli",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/prasanth-n-612312252/",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/@TechstackTelugu",
  },
];
