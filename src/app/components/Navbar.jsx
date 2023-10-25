"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-25 px-5 sm:px-20 py-5 dark:text-white dark:bg-black nav">
      <div>
        <Link href={"/"}>
          <h1 className="font-bold text-2xl sm:text-4xl text-center">
            CSE Lab Programs.
          </h1>
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 link-underline">
          <Link
            href={"https://github.com/ashikjhonson/KTU-CSE-Labs-site"}
            target="_blank"
            className="flex gap-3 border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-400 hover:text-black hover:dark:text-white hover:border-black dark:hover:border-white px-3 py-1 rounded-full"
          >
            Star <FaGithub className="self-center" />
          </Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer  z-10 md:hidden"
      >
        {nav ? (
          <FaTimes className="text-2xl text-black dark:text-gray-300" />
        ) : (
          <FaBars className="text-2xl text-black dark:text-gray-300" />
        )}
      </div>

      {nav && (
        <ul className="absolute right-6 top-20">
          <li className="cursor-pointer px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl text-white ">
            <Link
              onClick={() => setNav((nav) => !nav)}
              href={"https://github.com/ashikjhonson/KTU-CSE-Labs-site"}
              target="_blank"
              className="flex gap-3 px-2 align-middle justify-between"
            >
              Star <FaGithub className="self-center" />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
