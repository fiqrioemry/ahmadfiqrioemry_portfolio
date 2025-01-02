import Link from "next/link";
import React from "react";
import { FaGithub, FaMedium, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/fiqrioemry",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ahmadfiqrioemry/",
  },
  {
    icon: <FaMedium />,
    path: "https://medium.com/@foemry",
  },
  {
    icon: <FaInstagram />,
    path: "https://instagram.com/oemryfiqri",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center space-x-4 ">
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            className="text-xl hover:bg-accent px-2 py-2 border border-accent text-accent hover:text-primary dark:hover:text-primary-foreground dark:rounded-md rounded-full transition-all duration-300"
            key={index}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
