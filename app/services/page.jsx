"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    descriptions:
      " Creating dynamic, responsive, and user-centered websites using modern frameworks like React and Next.js. I able to scalable solutions with clean code, ensuring optimal performance, and seamless user experiences across devices ",
    href: "",
  },
  {
    num: "02",
    title: "Data Analysist",
    descriptions:
      "Data Visualization and business analysist using jupyter notebook and tableau to gain insight and support desicion-making",
    href: "",
  },
  {
    num: "03",
    title: "Data Science",
    descriptions:
      "Leveraging machine learning and deep learning to extract insights and drive innovation. From predictive modeling to natural language processing (NLP), I able develop data-driven solutions to solve complex problems, utilizing tools like Python and Scikit-learn.",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX Design",
    descriptions:
      "Creating visually appealing and user-friendly interfaces that enhance user experience. Expertise in wireframing, prototyping, and user testing, using tools like Figma, Sketch, and Adobe XD to deliver intuitive designs that align with user needs and business goals.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full h-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.descriptions}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
