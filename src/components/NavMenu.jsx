"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Project",
    path: "/project",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <nav className="space-x-8 flex">
      {links.map((item, index) => {
        return (
          <Link
            href={item.path}
            className={`${
              item.path === pathname &&
              "text-accent  border-b-[3px] border-accent"
            } hover:text-accent text-lg py-2 `}
            key={index}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
