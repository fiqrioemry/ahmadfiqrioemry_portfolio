import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiJupyter,
  SiTableau,
  SiMysql,
  SiPython,
  SiJavascript,
  SiR,
} from "react-icons/si";

// about
export const about = {
  title: "About me",
  description:
    "Im swithing career from engineering field to tech, recently completed the Digital Talent Incubator program at Purwadhika Digital School, specializing in data science and machine learning. Skilled with programming languages such as Python and R, I am eager to start a career as a data scientist or data analyst. Open to entry-level opportunities where I can apply my technical skills and expand my expertise ",
  info: [
    { fieldName: "Name", fieldValue: "Ahmad Fiqri " },
    { fieldName: "Nationality", fieldValue: "Indonesia" },
    { fieldName: "Phone", fieldValue: "0821-6094-5033 " },

    {
      fieldName: "Domicile",
      fieldValue: "Jakarta",
    },
    { fieldName: "Email", fieldValue: "foemry@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available " },
    { fieldName: "Languages", fieldValue: "Bahasa, English " },
  ],
};

// experience
export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "My previous working experience is 5 years on engineering field as inspector, surveyor & quality control, give me knowledge in various industries, strong analytical thinking, problem-solving abilities, and able to manage a good team-work",
  items: [
    {
      company: "PT. Radiant Utama Interinsco Tbk",
      place: "Palembang, Indonesia",
      position: "Quality Inspector",
      duration: "October 2022 - January 2024",
      details: [
        "Overhaul Project PT. Kilang Pertamina International RU 3 as Assistance Inspector :",
        "1. Perform Inspection and Quality Control Activities during the fabrication process based on procedure and standard.",
        "2. Review NDT result and coordinate with team on project.",
        "3. Make the related report to the project completion and drawing for NDT process.",
      ],
    },

    {
      company: "Moehringer Palmwood Indonesia",
      place: "Medan, Indonesia",
      position: "Site Controller",
      duration: "November 2021 - September 2023",
      details: [
        "Work as site controller to ensure the project completion ",
        "1. Creating a design using Autocad for project requirements.",
        "2. Developing a bill of quantities for operational project needs.",
        "3. Perform surveillance and control during the project",
        "4. Make the related report to the project progress and completion",
      ],
    },
    {
      company: "PT. Sucofindo Persero",
      place: "Jakarta, Indonesia",
      position: "Technical Inspector",
      duration: "February 2019 - October 2021",
      details: [
        "Work as inspector and surveyor on the Industrial Strategic Bussiness Unit :",
        "1. Perform review and verification for the import document.",
        "2. Perform Inspection and survey for the imported goods in accordance with documents and regulations.",
        "3. Conducting inspection, survey and audit for factory in accordance with documents and regulations.",
        "4. Consulting with client and make the related report based on inspection and survey result.",
      ],
    },
  ],
};

// education
export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Check out below are my education history as data science and mechanical engineering. ",
  items: [
    {
      institution: "Purwadhika Digital School",
      degree: "Data Science and Machine Learning",
      duration: "March 2024 - October 2024",
      final_score: "86.18",
    },

    {
      institution: "North Sumatera University",
      degree: "Bachelor of Mechanical Engineering",
      duration: "2011 - 2016",
      gpa_score: "3.09",
    },
  ],
};

// course and training
export const course_and_training = {
  icon: "/assets/resume/cap.svg",
  title: "Course and Training",
  description:
    "Through my journey in digital Technology, i have joining many course to boost my skills up.",
  items: [
    {
      institution: "Purwadhika Digital School",
      degree: "Data Science and Machine Learning",
      duration: "March 2024 - October 2024",
    },
    {
      institution: "MySkills.com",
      degree: "UI/UX Design",
      duration: "March 2024 - April 2024",
    },
    {
      institution: "Revou.com",
      degree: "Data Analysist",
      duration: "March 2024",
    },
    {
      institution: "Harisenin.com",
      degree: "Fullstack Web Development",
      duration: "December 2022 - May 2023",
    },
  ],
};

// skills data
export const skills = {
  title: "My Skills",
  description:
    "I have a capability on many programing language related to web development and data analysist. here are some tools i usually used during my work and project. ",
  skillList: [
    {
      num: 1,
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      num: 2,
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      num: 3,
      icon: <SiJavascript />,
      name: "Javascript",
    },
    {
      num: 4,
      icon: <FaReact />,
      name: "React.js",
    },

    {
      num: 5,
      icon: <SiPython />,
      name: "Python",
    },

    {
      num: 6,
      icon: <SiJupyter />,
      name: "Jupyter Notebook",
    },
    {
      num: 7,
      icon: <SiTableau />,
      name: "Tableau",
    },

    {
      num: 8,
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
  ],
};

// services
export const services = {
  title: "My Services",
  description:
    "With my expertise and skills i offer various services in tech field related to data and web development. ",
  skillList: [
    {
      num: "01",
      tools: [
        { icon: <FaHtml5 /> },
        { icon: <SiTailwindcss /> },
        { icon: <SiNextdotjs /> },
        { icon: <FaNodeJs /> },
        { icon: <SiMysql /> },
        { icon: <SiJavascript /> },
      ],
      name: "Web Development",
      description:
        "Creating dynamic, responsive, and user-centered websites using modern frameworks like React and Next.js. I able to scalable solutions with clean code, ensuring optimal performance, and seamless user experiences across devices",
    },
    {
      num: "02",
      tools: [
        { icon: <SiTableau /> },
        { icon: <SiJupyter /> },
        { icon: <FaPython /> },
        { icon: <SiR /> },
      ],
      name: "Data Analysist",
      description:
        "Data Visualization and business analysist using jupyter notebook and tableau to gain insight and support desicion-making",
    },
    {
      num: "03",
      tools: [{ icon: <SiJupyter /> }, { icon: <FaPython /> }],
      name: "Machine Learning",
      description:
        "Leveraging machine learning and deep learning to extract insights and drive innovation. From predictive modeling to natural language processing (NLP), I able develop data-driven solutions to solve complex problems, utilizing tools like Python and Scikit-learn",
    },
    {
      num: "04",
      tools: [{ icon: <FaFigma /> }],
      name: "UI / UX Design",
      description:
        "Creating visually appealing and user-friendly interfaces that enhance user experience. Expertise in wireframing, prototyping, and user testing with tools Figma",
    },
  ],
};
