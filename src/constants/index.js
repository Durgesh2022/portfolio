import {
  backend,
  c,
  carrent,
  creator,
  css,
  figma,
  html,
  java,
  javascript,
  jobit,
  mongodb,
  nodejs,
  python,
  reactjs,
  shopify,
  sql,
  starbucks,
  tailwind,
  tesla,
  tripguide,
  typescript,
  web
} from "../assets";
  
  export const navLinks = [
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
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
   
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "MY SQL",
      icon: sql,
    },
    
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "PYTHON",
      icon: python,
    },
    {
      name: "JAVA",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "PORTFOLIO",
      image: carrent,
      icon: starbucks,
      iconBg: "#383E56",
      date: "project 1",
      points: [
        "A 3D web application that provides a comprehensive overview of my projects, proficiency across various computer languages, and showcases my skills. Through immersive 3D visualization, users can explore my projects, while detailed descriptions offer insights into my expertise in different programming languages. Additionally, the application highlights my diverse skill set, offering a glimpse into my capabilities and achievements.",
      ],
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind.css",
          color: "pink-text-gradient",
        },
      ],
      source_link: "https://portfolio-durgesh-24.vercel.app/",
      source_code_link: "https://github.com/",
    },
    {
      title: "FIT RAHOO",
      image: jobit,
      icon: tesla,
      iconBg: "#000000",
      date: "project 2",
      points: [
        "A web application designed to tailor exercise routines based on the user's fitness level, whether they're a beginner or an advanced fitness enthusiast. By assessing the user's proficiency, the application recommends exercises that match their current fitness capabilities. Whether you're just starting your fitness journey or already a seasoned pro, this application provides customized workout plans to help you reach your fitness goals effectively and safely.",
      ],
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      source_link: "https://fit-rahooo-git-main-durgsh2022s-projects.vercel.app/",
      source_code_link: "https://github.com/",
    },
    {
      title: "COPY TUBE",
      image: tripguide,
      icon: shopify,
      iconBg: "#FFFFFF",
      date: "project 3",
      points: [
        "A web application offering users the ability to watch, like, dislike, and comment on videos, as well as upload their own content. Additionally, users receive notifications for newly uploaded videos, ensuring they stay updated with the latest content. Whether you're consuming or creating videos, this platform provides a seamless experience for engaging with and sharing multimedia content.",
      ],
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      source_link: "https://copytube2-git-main-durgsh2022s-projects.vercel.app/",
      source_code_link: "https://github.com/",
    },
  ];
  
  
  export { experiences, services, technologies };
