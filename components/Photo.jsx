"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* image animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="mx-auto"
        >
          <div className="w-[200px]  h-[200px] md:h-[260px] md:w-[260px] xl:h-[400px] xl:w-[400px] mx-auto absolute">
            <Image
              src="/assets/photo.png"
              priority
              quality={100}
              fill
              alt="profile_picture"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* circle animation */}
        <motion.svg
          className="w-[210px] h-[210px]  md:w-[250px] md:h-[250px] xl:w-[410px]  xl:h-[410px] mx-auto"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="250"
            cy="250"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
