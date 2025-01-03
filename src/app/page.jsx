"use client";

import { motion } from "framer-motion";
import Socials from "@/components/Socials";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import PhotoProfile from "@/components/PhotoProfile";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/ahmad_fiqri_oemry_cv.pdf";
    link.download = "ahmad_fiqri_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    >
      <div className="container mx-auto flex items-center h-full">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 order-2 md:order-none h-full mb-6 py-6 md:py-8 space-y-2">
            <div className="text-center md:text-start">
              <span className="text-lg">Data Scientist and Data Analyst</span>
              <h1 className="text-[35px] md:text-[55px] leading-[1.2]">
                Hello Im
                <br />
                <span className="text-[50px] md:text-[70px] text-accent font-semibold">
                  Ahmad Fiqri
                </span>
              </h1>
            </div>
            <p className="text-[14px] md:text-[16px] text-center md:text-start">
              passionate in data and analyst skilled in a wide range of
              programming languages and technologies. Committed to delivering
              impactful solutions through innovative code, leveraging sharp
              analytical skills and problem-solving expertise to drive optimal
              results
            </p>
            <div className="py-4 flex md:flex-row flex-col items-center space-x-0  md:space-y-0 space-y-4 md:space-x-8 ">
              <Button
                variant="primary"
                size="lg"
                className="flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <Socials />
            </div>
          </div>

          {/* photo area */}
          <div className="w-full md:w-1/2 py-0  ">
            <div className="flex items-center justify-center h-[200px] md:h-[450px] w-full relative">
              <PhotoProfile />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
