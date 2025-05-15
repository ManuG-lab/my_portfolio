import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white dark:bg-black shadow-md px-6 py-4 fixed top-0 z-40">
      <ul className="flex justify-center gap-6 text-lg font-medium">
        {links.map(({ name, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 dark:text-purple-400 underline"
                  : "text-gray-800 dark:text-gray-200 hover:text-purple-600"
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
