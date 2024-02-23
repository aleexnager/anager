"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About",
    path: "/#about",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/#projects",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/#contact",
  },
];

const Navbar = ({ isInternalPage }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "spring", stiffness: 150 }}
      className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-95 border-l-transparent border-r-transparent border-t-transparent"
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl text-white font-semibold"
        >
          ALEX NÁGER
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-primary-500 hover:border-primary-500"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-primary-500 hover:border-primary-500"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  id={link.id}
                  href={link.path}
                  title={link.title}
                  setNavbarOpen={setNavbarOpen}
                  isExternalPage={!isInternalPage}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          setNavbarOpen={setNavbarOpen}
          isExternalPage={!isInternalPage}
        />
      ) : null}
    </motion.header>
  );
};

export default Navbar;
