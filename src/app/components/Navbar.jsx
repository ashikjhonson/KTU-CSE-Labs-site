"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-25 px-5 sm:px-20 pt-10 sm:pt-8 dark:text-white dark:bg-black nav">
      <div>
        <Link href={"/"}>
          <h1 className="font-bold font-serif text-4xl sm:text-5xl text-center">
            CSE Labs.
          </h1>
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li className="cursor-pointer px-1 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl text-white hover:scale-105 duration-200 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] dark:hover:drop-shadow-[0_7px_8px_rgba(255,255,255,.25)]">
          <Link
            onClick={() => setNav((nav) => !nav)}
            href={"https://github.com/ashikjhonson/KTU-CSE-Labs-site"}
            target="_blank"
            className="flex gap-3 px-2 align-middle justify-between font-mono"
          >
            Star <FaGithub className="self-center text-lg dark:text-black" />
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
          <li className="cursor-pointer px- py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 border border-black rounded-full text-white ">
            <Link
              onClick={() => setNav((nav) => !nav)}
              href={"https://github.com/ashikjhonson/KTU-CSE-Labs-site"}
              target="_blank"
              className="flex gap-3 px-3 align-middle justify-between font-mono"
            >
              Star <FaGithub className="self-center text-lg dark:text-black" />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
