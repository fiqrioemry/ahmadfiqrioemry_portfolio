import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaInstagram } from "react-icons/fa";

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
    icon: <FaInstagram />,
    path: "https://www.instagram.com/oemryfiqri",
  },
  {
    icon: <FaMedium />,
    path: "https://medium.com/@foemry ",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
