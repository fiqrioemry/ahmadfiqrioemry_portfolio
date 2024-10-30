"use client";

import { motion } from "framer-motion";

const Blog = () => {
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
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-[1px]">
            What I Recently <span className="text-accent">Wrote</span> ?
          </h1>
          <div className="h-[300px] flex items-center justify-center text-4xl">
            FEATURES COMING SOON ...
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
