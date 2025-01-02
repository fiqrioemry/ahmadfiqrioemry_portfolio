"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    name: "Exclusive E-commerce",
    type: "web_development",
    image: "/assets/web_development_1.png",
    tech: ["React", "HTML", "Javascript"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "Memory Match Games",
    type: "web_development",
    image: "/assets/web_development_2.png",
    tech: ["Javascript", "CSS", "HTML"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "Interior Company Website",
    type: "web_development",
    image: "/assets/web_development_3.png",
    tech: ["TailwindCSS", "HTML"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "Luxespace",
    type: "web_development",
    image: "/assets/web_development_4.png",
    tech: ["React", "TailwindCSS"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "Live stock Calc",
    type: "web_development",
    image: "/assets/web_development_5.png",
    tech: ["NextJS", "NodeJs", "HTML"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "HealtyDOC",
    type: "web_development",
    image: "/assets/web_development_6.png",
    tech: ["NextJS", "NodeJs", "Prisma"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "RFM Analysist",
    type: "data_analysist",
    image: "/assets/data_analysis1.png",
    tech: ["Python", "Jupyter Notebook"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "AirBnB Bangkok",
    type: "data_analysist",
    image: "/assets/data_analysis2.png",
    tech: ["Python", "Tableau"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "Market Analysist",
    type: "data_analysist",
    image: "/assets/data_analysis3.png",
    tech: ["Jupyter Nootbook"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "Customer Churn Predict",
    type: "machine_learning",
    image: "/assets/machine_learning_1.png",
    tech: ["Jupyter Nootbook"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "Recommendation System",
    type: "machine_learning",
    image: "/assets/machine_learning_2.png",
    tech: ["Jupyter Nootbook"],
    description: "",
    link: "",
    github: "",
  },

  {
    name: "KFC Revamp",
    type: "ui_ux",
    image: "/assets/ui_ux_1.png",
    tech: ["Figma", "Adobe"],
    description: "",
    link: "",
    github: "",
  },
  {
    name: "Company Landingpage",
    type: "ui_ux",
    image: "/assets/ui_ux_2.png",
    tech: ["Figma"],
    description: "",
    link: "",
    github: "",
  },
];

const Project = () => {
  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto ">
        <Tabs className="h-full py-8" defaultValue="all_project">
          <div className="text-center">
            <h1 className="text-4xl tracking-[1px]">
              My <span className="text-accent">Latest</span> Project
            </h1>
          </div>
          <TabsList className="flex flex-wrap flex-row py-8">
            <div className="w-full md:w-[40%] flex">
              <div className="w-[50%] px-1">
                <TabsTrigger value="all_project">All Project</TabsTrigger>
              </div>
              <div className="w-[50%] px-1">
                <TabsTrigger value="web_development">
                  Web Development
                </TabsTrigger>
              </div>
            </div>
            <div className="w-full md:w-[60%] flex">
              <div className="w-[33.3%] px-1">
                <TabsTrigger value="data_analysist">Data Analysist</TabsTrigger>
              </div>
              <div className="w-[33.3%] px-1">
                <TabsTrigger value="machine_learning">
                  Machine Learning
                </TabsTrigger>
              </div>
              <div className="w-[33.3%] px-1">
                <TabsTrigger value="ui_ux">UI / UX Design</TabsTrigger>
              </div>
            </div>
          </TabsList>

          {/* project */}
          <div>
            {/* 1. all project */}
            <TabsContent value="all_project" className="w-full ">
              <div className="flex flex-wrap w-full ">
                {projects.map((item, index) => {
                  return (
                    <div className="w-1/2 sm:w-1/3 md:w-1/4 " key={index}>
                      <div className="px-2 py-2">
                        <div className="w-full bg-secondary dark:bg-lightSecondary dark:shadow-md rounded-md h-[300px]">
                          {/* image area */}
                          <div className="w-full h-[200px] overflow-hidden px-2 py-2">
                            <Image
                              className="rounded-t-md"
                              src={item.image}
                              alt={item.name}
                              width={300} // atur sesuai kebutuhan
                              height={200} // atur sesuai kebutuhan
                            />
                          </div>
                          {/* text area */}
                          <div className="px-2">
                            <div>{item.name}</div>
                            <div className="flex-row space-x-2">
                              <span className=" px-2 py-1 bg-white text-black text-[12px] rounded-lg">
                                {item.tech[0]}
                              </span>
                              {item.tech[1] && (
                                <span className=" px-2 py-1 bg-green-500 text-[12px] rounded-lg">
                                  {item.tech[1]}
                                </span>
                              )}

                              {item.tech[2] && (
                                <span className=" px-2 py-1 bg-red-500 text-[12px] rounded-lg">
                                  {item.tech[2]}
                                </span>
                              )}
                            </div>
                            <div className="flex justify-end">
                              <div className="flex flex-row gap-x-4 text-lg">
                                <Link href={item.link}>
                                  <FaLink />
                                </Link>
                                <Link href={item.github}>
                                  <FaGithub />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* 2. web development */}
            <TabsContent value="web_development" className="w-full ">
              <div className="flex flex-wrap w-full ">
                {projects
                  .filter((item) => item.type === "web_development")
                  .map((item, index) => {
                    return (
                      <div className="w-1/2 sm:w-1/3 md:w-1/4 " key={index}>
                        <div className="px-2 py-2">
                          <div className="w-full bg-foreground rounded-md h-[300px]">
                            {/* image area */}
                            <div className="w-full h-[200px] overflow-hidden px-2 py-2">
                              <Image
                                className="rounded-t-md"
                                src={item.image}
                                alt={item.name}
                                width={300} // atur sesuai kebutuhan
                                height={200} // atur sesuai kebutuhan
                              />
                            </div>
                            {/* text area */}
                            <div className="px-2">
                              <div>{item.name}</div>
                              <div className="flex-row space-x-2">
                                <span className=" px-2 py-1  bg-red-500 text-white text-[12px] rounded-lg">
                                  {item.tech[0]}
                                </span>
                                {item.tech[1] && (
                                  <span className=" px-2 py-1 bg-green-500 text-[12px] rounded-lg">
                                    {item.tech[1]}
                                  </span>
                                )}

                                {item.tech[2] && (
                                  <span className=" px-2 py-1 bg-white  text-primary text-[12px] rounded-lg">
                                    {item.tech[2]}
                                  </span>
                                )}
                              </div>
                              <div className="flex justify-end">
                                <div className="flex flex-row gap-x-4 text-lg">
                                  <Link href={item.link}>
                                    <FaLink />
                                  </Link>
                                  <Link href={item.github}>
                                    <FaGithub />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </TabsContent>

            {/* 3. Data Analysist */}
            <TabsContent value="data_analysist" className="w-full ">
              <div className="flex flex-wrap w-full ">
                {projects
                  .filter((item) => item.type === "data_analysist")
                  .map((item, index) => {
                    return (
                      <div className="w-1/2 sm:w-1/3 md:w-1/4 " key={index}>
                        <div className="px-2 py-2">
                          <div className="w-full bg-foreground rounded-md h-[300px]">
                            {/* image area */}
                            <div className="w-full h-[200px] overflow-hidden px-2 py-2">
                              <Image
                                className="rounded-t-md"
                                src={item.image}
                                alt={item.name}
                                width={300} // atur sesuai kebutuhan
                                height={200} // atur sesuai kebutuhan
                              />
                            </div>
                            {/* text area */}
                            <div className="px-2">
                              <div>{item.name}</div>
                              <div className="flex-row space-x-2">
                                <span className=" px-2 py-1 bg-white text-black text-[12px] rounded-lg">
                                  {item.tech[0]}
                                </span>
                                {item.tech[1] && (
                                  <span className=" px-2 py-1 bg-green-500 text-[12px] rounded-lg">
                                    {item.tech[1]}
                                  </span>
                                )}

                                {item.tech[2] && (
                                  <span className=" px-2 py-1 bg-red-500 text-[12px] rounded-lg">
                                    {item.tech[2]}
                                  </span>
                                )}
                              </div>
                              <div className="flex justify-end">
                                <div className="flex flex-row gap-x-4 text-lg">
                                  <Link href={item.link}>
                                    <FaLink />
                                  </Link>
                                  <Link href={item.github}>
                                    <FaGithub />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </TabsContent>

            {/* 4. machine learning */}
            <TabsContent value="machine_learning" className="w-full ">
              <div className="flex flex-wrap w-full ">
                {projects
                  .filter((item) => item.type === "machine_learning")
                  .map((item, index) => {
                    return (
                      <div className="w-1/2 sm:w-1/3 md:w-1/4 " key={index}>
                        <div className="px-2 py-2">
                          <div className="w-full bg-foreground rounded-md h-[300px]">
                            {/* image area */}
                            <div className="w-full h-[200px] overflow-hidden px-2 py-2">
                              <Image
                                className="rounded-t-md"
                                src={item.image}
                                alt={item.name}
                                width={300}
                                height={200}
                              />
                            </div>
                            {/* text area */}
                            <div className="px-2">
                              <div>{item.name}</div>
                              <div className="flex-row space-x-2">
                                <span className=" px-2 py-1 bg-white text-black text-[12px] rounded-lg">
                                  Javascript
                                </span>
                                <span className=" px-2 py-1 bg-green-500 text-[12px] rounded-lg">
                                  Nodejs
                                </span>
                                <span className=" px-2 py-1 bg-primary text-[12px] rounded-lg">
                                  Nodejs
                                </span>
                              </div>
                              <div className="flex justify-end">
                                <div className="flex flex-row gap-x-4 text-lg">
                                  <Link href={item.link}>
                                    <FaLink />
                                  </Link>
                                  <Link href={item.github}>
                                    <FaGithub />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </TabsContent>

            {/* 5. ui and ux design */}
            <TabsContent value="ui_ux" className="w-full ">
              <div className="flex flex-wrap w-full ">
                {projects
                  .filter((item) => item.type === "ui_ux")
                  .map((item, index) => {
                    return (
                      <div className="w-1/2 sm:w-1/3 md:w-1/4 " key={index}>
                        <div className="px-2 py-2">
                          <div className="w-full bg-foreground rounded-md h-[300px]">
                            {/* image area */}
                            <div className="w-full h-[200px] overflow-hidden px-2 py-2">
                              <Image
                                className="rounded-t-md"
                                src={item.image}
                                alt={item.name}
                                width={300} // atur sesuai kebutuhan
                                height={200} // atur sesuai kebutuhan
                              />
                            </div>
                            {/* text area */}
                            <div className="px-2">
                              <div>{item.name}</div>
                              <div className="flex-row space-x-2">
                                <span className=" px-2 py-1 bg-white text-black text-[12px] rounded-lg">
                                  {item.tech[0]}
                                </span>
                                {item.tech[1] ? (
                                  <span className=" px-2 py-1 bg-green-500 text-[12px] rounded-lg">
                                    {item.tech[1]}
                                  </span>
                                ) : (
                                  ""
                                )}
                              </div>
                              <div className="flex justify-end">
                                <div className="flex flex-row gap-x-4 text-lg">
                                  <Link href={item.link}>
                                    <FaLink />
                                  </Link>
                                  <Link href={item.github}>
                                    <FaGithub />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Project;
