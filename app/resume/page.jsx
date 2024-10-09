"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const resume = [{}];

const about = [
  {
    title: "About me",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis elescu masio flasta",
    info: [
      { fieldName: "Name", fieldValue: "Ahmad Fiqri " },
      { fieldName: "Nationality", fieldValue: "Indonesia" },
      { fieldName: "Phone", fieldValue: "0821-6094-5033 " },
      { fieldName: "Email", fieldValue: "foemry@gmail.com" },
      {
        fieldName: "LinkedIn",
        fieldValue: "www.linkedin.com/in/ahmadfiqrioemry/",
      },
      { fieldName: "Freelance", fieldValue: "Available " },
      { fieldName: "Languages", fieldValue: "Bahasa, English " },
    ],
  },
];

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "resume page Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat possimus",
  items: [
    {
      company: "Purwadhika Digital School",
      position: "Apprentice DTI Program",
      duration: "March 2024 - October 2024",
    },
    {
      company: "PT. Radiant Utama Interinsco Tbk",
      position: "Quality Inspector",
      duration: "October 2022 - January 2024",
    },

    {
      company: "Moehringer Palmwood Indonesia",
      position: "Site Controller",
      duration: "November 2021 - September 2023",
    },
    {
      company: "PT. Sucofindo Persero",
      position: "Technical Inspector",
      duration: "February 2019 - October 2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    " resume page Lorem ipsum dolor sit amet consectetur adipisicing elit. Ame placeat possimus ex",
  items: [
    {
      institution: "Purwadhika Digital School",
      degree: "Data Science and Machine Learning",
      duration: "March 2024 - October 2024",
    },
    {
      institution: "MySkills",
      degree: "Data Science",
      duration: "April 2024",
    },
    {
      institution: "Revou Academy",
      degree: "Data Analysist",
      duration: "March 2024",
    },
    {
      institution: "Harisenin.com",
      degree: "Full stack Web Developer Bootcamp",
      duration: "December 2022 - May 2023",
    },
    {
      institution: "North Sumatera University",
      degree: "Bachelor of Mechanical Engineering",
      duration: "2011 - 2016",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "resume page Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat possimus ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
  ],
};
const Resume = () => {
  return (
    <div>
      resume page Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
      placeat possimus ex?
    </div>
  );
};

export default Resume;
