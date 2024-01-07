"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const links = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Issues",
    href: "/issues",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex space-x-5 border-b px-5 items-center py-4">
      <AiFillBug />
      <ul className="flex space-x-5">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={classnames({
                "text-zinc-500": item.href !== pathname,
                "text-zinc-900": item.href == pathname,
                "hover:text-zinc-900 transition-colors": true,
              })}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
