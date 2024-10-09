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
    {
      company: "PT. Sucofindo Persero",
      position: "Technical Inspector",
      duration: "February 2019 - October 2021",
    },
    {
      company: "PT. Sucofindo Persero",
      position: "Technical Inspector",
      duration: "February 2019 - October 2021",
    },
    {
      company: "PT. Sucofindo Persero",
      position: "Technical Inspector",
      duration: "February 2019 - October 2021",
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

// skills data
const skills = {
  title: "My Skills",
  description:
    "resume page Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat possimus ",
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
} from "@radix-ui/react-tooltip";
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
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl  min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl  min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
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
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
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
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
