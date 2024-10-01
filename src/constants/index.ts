import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  
  TProject,
} from "../types";

import {
  mobile,
  backend,
  python,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  
  
  carrent,
  jobit,
  tripguide,
  threejs,
  e,
  A,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    url: "/Surya Resume..pdf",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python developer",
    icon: python,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developement-Internship",
    companyName: "Ether Services",
    icon: e,
    iconBg: "#383E56",
    date: "Augest 2023 - January 2024",
    points: [
      "During my internship at Ether Services, I led website development using HTML5, CSS3, and JavaScript, and optimized user interfaces with Python and SQL, along with the Django framework.",
      "I implemented SEO, social media, and PPC strategies, using tools like Google Analytics and SEMrush to enhance client visibility, engagement, and conversions.",
      " My efforts led to improved website performance, a broader online presence, and measurable business growth for clients, reinforcing Ether Services' reputation as an industry leader.",
    ],
  },
  {
    title: "Python/React Developer",
    companyName: "Appin Technology",
    icon: A,
    iconBg: "#E6DEDD",
    date: "Sep 2023",
    points: [
      "Completed Python Full Stack Development course at AppinTechnology, gaining comprehensive proficiency in frontend andbackend technologies",
      "Acquired expertise in Python programming, along with webdevelopment frameworks like REACTJS and databases.",
      "Developed skills in creating dynamic web applications, enhancingcapabilities in full stack development.",
    ],
  },
  
];



const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
