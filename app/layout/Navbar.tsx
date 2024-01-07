"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

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
              className={`${
                item.href === pathname ? "text-zinc-900" : "text-zinc-500"
              } hover:text-zinc-800 transition-colors`}
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
