"use client";

import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh]"
    >
      <div className="container mx-auto">
        <div className="text-accent text-2xl">ADD SECTION BLOG</div>
      </div>
    </motion.section>
  );
};

export default Blog;
