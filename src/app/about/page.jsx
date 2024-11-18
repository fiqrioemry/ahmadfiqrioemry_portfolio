"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
const about = {
  title: "About me",
  description:
    "I have 5 years of experience in inspection and quality management, now transitioning into tech.  recently completed the Digital Talent Incubator program at Purwadhika Digital School, specializing in data science and machine learning. Skilled with programming languages such as Python and R,  strong analytical thinking, problem-solving abilities, and experience working as a team, I am eager to start a career as a data scientist or data analyst. Open to entry-level opportunities where I can apply my technical skills and expand my expertise ",
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
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have 5 years working experience on engineering field, now im take break and switching my career to the field of information techonology related to data and website develop.",
  items: [
    {
      company: "Purwadhika Digital School",
      place: "Batam, Indonesia",
      position: "Apprentice Data Science and Machine Learning Program",
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

// education
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
const course_and_training = {
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
const services = {
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
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 0.3,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh]"
    >
      <div className="container mx-auto mb-10">
        <Tabs className="flex flex-wrap h-full pt-6" defaultValue="about">
          <TabsList className="flex flex-row md:flex-col gap-x-2 gap-y-2 md:w-[40%] mb-8 pr-0 md:pr-12 w-full">
            <div className="w-1/2 md:w-full space-y-2">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </div>
            <div className="w-1/2 md:w-full space-y-2">
              <TabsTrigger value="course_and_training">
                Course and Training
              </TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </div>
          </TabsList>

          <div className="md:w-[60%] w-full ">
            {/* about */}
            <TabsContent value="about" className="w-full ">
              <div className="flex flex-col gap-[20px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="w-full text-dark dark:text-light mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
                <div>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-[10px] w-full py-6 md:py-0 ">
                    {about.info.map((item, index) => (
                      <li key={index} className="flex  gap-x-2">
                        <p className="text-dark dark:text-light text-start md:text-auto w-1/2 md:w-[35%]">
                          {item.fieldName}
                        </p>
                        <p className="text-start w-1/2 md:w-[65%]">
                          : {item.fieldValue}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[20px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="w-full text-dark dark:text-light mx-auto xl:mx-0 text-justify">
                  {education.description}
                </p>
                <ScrollArea className="h-auto">
                  <ul className="grid grid-cols gap-[15px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-primary dark:bg-lightPrimary py-3 px-10 rounded-xl flex flex-col  lg:items-start"
                        >
                          <span className="text-accent text-md">
                            {item.duration}
                          </span>
                          <h3 className="text-lg min-h-[40px]">
                            {item.institution}
                          </h3>
                          <div className="space-y-1">
                            <div className="flex items-center gap-x-4">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-sm text-dark dark:text-light">
                                {item.degree}
                              </p>
                            </div>

                            <div className="flex items-center gap-x-4">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-sm text-dark dark:text-light">
                                {item.gpa_score
                                  ? `GPA Score: ${item.gpa_score}`
                                  : `Final Score: ${item.final_score}`}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[20px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="w-full text-dark dark:text-light mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>

                <ScrollArea className="h-[280px]">
                  <ul className="grid grid-cols gap-[15px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-primary dark:bg-lightPrimary py-4 px-10 rounded-xl flex flex-col  lg:items-start"
                        >
                          <div className="flex justify-between items-center ">
                            <div className="text-accent text-md">
                              {item.duration}
                            </div>
                            <div className="text-sm">{item.place}</div>
                          </div>

                          <h3 className="text-lg min-h-[40px]">
                            {item.company}
                          </h3>

                          <div className="space-y-2">
                            <div className="flex items-center gap-x-4">
                              {" "}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-sm text-dark dark:text-light">
                                {item.position}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* course and training */}
            <TabsContent value="course_and_training" className="w-full ">
              <div className="flex flex-col gap-[20px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">
                  {course_and_training.title}
                </h3>
                <p className="w-full text-dark dark:text-light mx-auto xl:mx-0 text-justify">
                  {course_and_training.description}
                </p>
                <ScrollArea className="h-[280px]">
                  <ul className="grid grid-cols gap-[15px] ">
                    {course_and_training.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-primary dark:bg-lightPrimary py-4 px-10 rounded-xl flex flex-col  lg:items-start"
                        >
                          <span className="text-accent text-md">
                            {item.duration}
                          </span>
                          <h3 className="text-lg min-h-[40px]">
                            {item.institution}
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-x-4">
                              {" "}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-sm text-dark dark:text-light">
                                {item.degree}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="">
              <div className="flex flex-col gap-[15px]">
                <div className="flex flex-col gap-[15px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="w-full text-justify text-dark dark:text-light mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:gap-[15px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[125px] bg-[#232329]  dark:bg-lightSecondary rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="capitalize">{skill.name}</div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* services*/}
            <TabsContent value="services">
              <div className="flex flex-col gap-[15px]">
                <div className="flex flex-col gap-[15px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{services.title}</h3>
                  <p className="w-full text-justify text-dark dark:text-light mx-auto xl:mx-0">
                    {services.description}
                  </p>
                </div>
                <div className="flex flex-wrap w-full">
                  {services.skillList.map((skill, index) => {
                    return (
                      <div key={index} className="w-full md:w-1/2 pr-4 mb-4 ">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" py-2 px-4 w-full h-[125px] bg-[#232329] dark:bg-lightSecondary group-hover  hover:bg-accent dark:hover:bg-accent rounded-lg group hover:text-primary transition-all duration-500">
                              {/* services name */}
                              <div className="flex flex-row items-center  gap-x-4 mb-4">
                                <div className="text-4xl font-extrabold   ">
                                  {skill.num}
                                </div>
                                <div className="text-2xl">{skill.name}</div>
                              </div>

                              {/* services tools */}
                              <div className="flex flex-row items-center gap-x-2">
                                {skill.tools.map((item, index) => {
                                  return (
                                    <div className="text-2xl" key={index}>
                                      {item.icon}
                                    </div>
                                  );
                                })}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="mb-2 w-[300px] text-justify">
                              {skill.description}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default About;
