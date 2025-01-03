"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ellipsis } from "lucide-react";
import { projects } from "../config/project";
import { Tooltips } from "@/components/Tooltips";
import { FaLink, FaGithub } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabSettings = [
  {
    title: "All Project",
    value: "all_project",
  },

  {
    title: "Web Development",
    value: "web_development",
  },
  {
    title: "Machine Learning",
    value: "machine_learning",
  },
  {
    title: "UI_UX",
    value: "ui_ux",
  },
  {
    title: "Data Analysis",
    value: "data_analysist",
  },
];
const Project = () => {
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
      <div className="container mx-auto ">
        <Tabs className="h-full space-y-4" defaultValue="all_project">
          <div className="text-center">
            <h1 className="text-4xl">
              My <span className="text-accent">Latest</span> Project
            </h1>
          </div>
          <TabsList className="grid grid-cols-4 md:grid-cols-5 gap-2">
            {tabSettings.map((item, index) => (
              <TabsTrigger
                className="md:col-span-1 col-span-4"
                value={item.value}
                key={index}
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* project */}
          <div>
            {tabSettings.map((tab) => (
              <TabsContent value={tab.value} key={tab.value}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {projects
                    .filter((item) =>
                      tab.value === "all_project"
                        ? true
                        : item.type === tab.value
                    )
                    .map((item, index) => {
                      return (
                        <div
                          className="w-full bg-secondary dark:border dark:border-accent rounded-md "
                          key={index}
                        >
                          <div className="p-1">
                            <Image
                              className="rounded-t-md"
                              src={item.image}
                              alt={item.name}
                              width={300}
                              height={200}
                            />
                          </div>
                          {/* text area */}
                          <div className="flex flex-col h-[75px] justify-between p-2">
                            <div>{item.name}</div>
                            <div className="flex justify-end">
                              <div className="flex gap-4">
                                <Tooltips text={"More details"}>
                                  <Ellipsis className="cursor-pointer" />
                                </Tooltips>
                                <Tooltips text={"Live demo"}>
                                  <Link href={item.link}>
                                    <FaLink />
                                  </Link>
                                </Tooltips>
                                <Tooltips text={"Source code"}>
                                  <Link href={item.github}>
                                    <FaGithub />
                                  </Link>
                                </Tooltips>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Project;
