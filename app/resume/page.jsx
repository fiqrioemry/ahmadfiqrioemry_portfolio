"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiJupyter,
  SiTableau,
  SiMysql,
  SiPython,
  SiJavascript,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "A Mechanical Engineering graduate with a passion for data science and a robust background in inspection and quality management. I have transitioned into the data science field, through comprehensive coursework and hands-on projects. Enthusiastic about applying my knowledge to real-world challenges, I am committed to continuous learning and professional development in digital technologies. im good on teamwork and attention to detail.",
  info: [
    { fieldName: "Name", fieldValue: "Ahmad Fiqri " },
    { fieldName: "Nationality", fieldValue: "Indonesia" },
    { fieldName: "Phone", fieldValue: "0821-6094-5033 " },
    { fieldName: "Email", fieldValue: "foemry@gmail.com" },
    {
      fieldName: "Domicile",
      fieldValue: "Medan, North Sumatera",
    },
    { fieldName: "Freelance", fieldValue: "Available " },
    { fieldName: "Languages", fieldValue: "Bahasa, English " },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have 5 years working experience on engineering field, now im take break and switching my career to the field of information techonology related to data and website develop.",
  items: [
    {
      company: "Purwadhika Digital School",
      place: "Batam, Indonesia",
      position: "Apprentice Data Science Program",
      duration: "March 2024 - October 2024",
    },
    {
      company: "PT. Radiant Utama Interinsco Tbk",
      place: "Palembang, Indonesia",
      position: "Quality Inspector",
      duration: "October 2022 - January 2024",
    },

    {
      company: "Moehringer Palmwood Indonesia",
      place: "Medan, Indonesia",
      position: "Site Controller",
      duration: "November 2021 - September 2023",
    },
    {
      company: "PT. Sucofindo Persero",
      place: "Jakarta, Indonesia",
      position: "Technical Inspector",
      duration: "February 2019 - October 2021",
    },
  ],
};

const education = {
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
const course = {
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
const skills = {
  title: "My Skills",
  description:
    "Im understand many programing language related to web development and data analysist. here are some tools i usually used during my work and project. ",
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
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="course">Course & Training</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="w-full text-white/60 mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl  min-h-[40px] text-center lg:text-left">
                            {item.company}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.position}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="w-full text-justify text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl  text-center lg:text-left mb-5">
                            {item.institution}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60"> {item.degree}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">
                              {item.gpa_score
                                ? `GPA Score: ${item.gpa_score}`
                                : `Final Score: ${item.final_score}`}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* course and training */}
            <TabsContent value="course" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{course.title}</h3>
                <p className="w-full text-justify text-white/60 mx-auto xl:mx-0">
                  {course.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid gap-[30px]">
                    {course.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[165px] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl   text-center lg:text-left">
                            {item.institution}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60"> {item.degree}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="w-full text-justify text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="w-full  text-justify text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 w-full ">
                  {/* Add a check to ensure `about.info` is defined and not empty */}
                  {about.info && about.info.length > 0 ? (
                    about.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center  justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-white/60">No information available</li> // Optional fallback if info is empty
                  )}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
