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
  about,
  experience,
  education,
  course_and_training,
  skills,
  services,
} from "../config/about";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.3,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh]"
    >
      <div className="container mx-auto">
        <Tabs
          className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-8"
          defaultValue="about"
        >
          <div className="col-span-4 md:col-span-2">
            <TabsList className=" grid grid-cols-2 md:grid-cols-1 gap-2">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>

              <TabsTrigger value="course_and_training">
                Course and Training
              </TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
          </div>

          <div className="col-span-4">
            {/* about */}
            <TabsContent value="about" className="w-full ">
              <div className="flex flex-col gap-[20px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="w-full mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
                <div>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-[10px] w-full py-6 md:py-0 ">
                    {about.info.map((item, index) => (
                      <li key={index} className="flex  gap-x-2">
                        <p className="text-start md:text-auto w-1/2 md:w-[35%]">
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
                <p className="w-full  mx-auto xl:mx-0 text-justify">
                  {education.description}
                </p>
                <ScrollArea className="dark:border-primary dark:border-b-2 dark:border-t-2">
                  <ul className="grid grid-cols gap-3.5 ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-background py-4 px-10 rounded-xl flex flex-col  lg:items-start dark:border border-primary dark:rounded-none "
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
                              <p className="text-sm ">{item.degree}</p>
                            </div>

                            <div className="flex items-center gap-x-4">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-sm">
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
              <div className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="w-full mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>

                <ScrollArea className="h-[280px] dark:border-primary dark:border-b-2 dark:border-t-2">
                  <ul className="grid grid-cols gap-4 ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-background py-4 px-10 rounded-xl dark:border border-primary dark:rounded-none flex flex-col  lg:items-start"
                        >
                          <div className="flex justify-between items-center w-full">
                            <div className="text-accent text-md">
                              {item.duration}
                            </div>
                            <div className="text-sm">{item.place}</div>
                          </div>

                          <div className="flex items-center mb-5 space-x-10">
                            <h3 className="text-lg">{item.company}</h3>

                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <span className="bg-accent rounded-sm px-2 py-1 text-xs">
                                    see detail
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent className="py-4 px-4 mb-2 w-[500px] text-justify space-y-2">
                                  {item.details.map((item, index) => {
                                    return <div key={index}>{item}</div>;
                                  })}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-x-4">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-sm">{item.position}</p>
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
                <p className="w-full mx-auto xl:mx-0 text-justify">
                  {course_and_training.description}
                </p>
                <ScrollArea className="h-[280px] dark:border-primary dark:border-b-2 dark:border-t-2">
                  <ul className="grid grid-cols gap-4 ">
                    {course_and_training.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-background py-4 px-10 rounded-xl flex flex-col  lg:items-start dark:border border-primary dark:rounded-none "
                        >
                          <span className="text-accent text-md">
                            {item.duration}
                          </span>
                          <h3 className="text-lg min-h-[40px]">
                            {item.institution}
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-x-4">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                              <p className="text-sm">{item.degree}</p>
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
                  <p className="w-full text-justify mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:gap-[15px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[125px] bg-secondary dark:border dark:border-primary dark:rounded-none rounded-xl flex justify-center items-center group">
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
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{services.title}</h3>
                  <p className="w-full text-justify mx-auto xl:mx-0">
                    {services.description}
                  </p>
                </div>
                <div className="flex flex-wrap w-full">
                  {services.skillList.map((skill, index) => {
                    return (
                      <div key={index} className="w-full md:w-1/2 pr-4 mb-4 ">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" py-2 px-4 w-full h-[125px]  dark:border bg-secondary dark:border-primary dark:rounded-none group-hover hover:text-accent rounded-lg group  transition-all duration-300">
                              {/* services name */}
                              <div className="flex flex-row items-center gap-x-4 mb-4">
                                <div className="text-4xl font-extrabold  ">
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
