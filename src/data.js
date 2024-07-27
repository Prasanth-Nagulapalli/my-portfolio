import { DiReact } from "react-icons/di";
import { SiUpwork } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaWix, FaWordpress } from "react-icons/fa";
import {
  portfolioThumbnail,
  littleLemonThumbnail,
  admindashboardThumbnail,
  taxhoodThumbnail,
  igraceThumbnail,
  connectifyThumbnail,
} from "./images";

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
      demoLink: "https://prasanth-dev.netlify.app/",
      sourceLink: "https://github.com/Prasanth-Nagulapalli/my-portfolio",
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
    title: "Shop Dashboard - A Simple React Application",
    image: admindashboardThumbnail,
    category: "Front-End",
    data: {
      description: `A user-friendly dashboard built with React, React-Apex, and Framer Motion. This dashboard provides a clean and interactive interface for managing shop data, featuring real-time analytics, visual charts, and smooth animations. It’s designed to give users a comprehensive view of key metrics and insights, with responsive design and dynamic data updates. Ideal for small to medium-sized shops looking to streamline their data management and visualization.`,
      demoLink: "https://shops-admindashboard.netlify.app/",
      sourceLink: "https://github.com/Prasanth-Nagulapalli/admin-dashboard",
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
    id: 4,
    title: "TaxHood - Tax Refund Service Website",
    image: taxhoodThumbnail,
    category: "Front-End",
    data: {
      description: `A professional and user-friendly website developed for TaxHood, a company specializing in tax refunds for U.S. residents and individuals from India. Built using Wix, this site provides comprehensive information on tax refund services, including direct links to IRS resources like the "Where's My Refund?" tool. With clear navigation, detailed service descriptions, and client testimonials, the site ensures users have easy access to all necessary information and resources for efficiently obtaining their tax refunds.`,
      demoLink: "https://www.ustaxhood.com/",
      sourceLink: "",
    },
    stack: [
      {
        name: "WIX",
        icon: <FaWix />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 5,
    title: "Custom CSS Enhancements for iGRACE Professional Hair & Beauty",
    image: igraceThumbnail,
    category: "Front-End",
    data: {
      description: `Applied custom CSS to the iGRACE Professional Hair & Beauty WordPress website to enhance its visual appeal and align it with the brand's identity. The custom styles focus on refining the site's layout, improving typography, and optimizing the user interface to provide a more polished and engaging experience. These enhancements ensure that the website maintains a professional look while effectively showcasing the Beauty services and expertise`,
      demoLink: "https://www.igracebeauty.com/",
      sourceLink: "",
    },
    stack: [
      {
        name: "WordPress",
        icon: <FaWordpress />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 6,
    title: "Connectify - A MERN Stack Social Media App",
    image: connectifyThumbnail,
    category: "Full-stack",
    data: {
      description: `Connectify is a dynamic social media application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to add images, connect with others, and share posts. The app leverages Redux for state management and Material UI for a sleek and responsive user interface. Join Connectify to experience a seamless and interactive social networking platform.`,
      demoLink: "https://connectifying.netlify.app/",
      sourceLink: "https://github.com/Prasanth-Nagulapalli/Connectify",
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
