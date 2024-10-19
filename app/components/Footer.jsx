"use client";
import React from "react";
import { motion } from "framer-motion";
import { version } from "../lib/constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-x-transparent border-b-transparent text-white">
      <div className="p-12 flex flex-row justify-between lg:grid lg:grid-cols-3 items-center w-full">
        <div className="grid grid-row-2 gap-1 text-left">
          <span className="text-white">A.NÁGER</span>
          <p className="text-slate-600">
            Copyright © | All personal information reserved.
          </p>
          <p className="text-slate-600 lg:hidden">{version}</p>
        </div>

        <p className="hidden lg:block lg:text-center text-slate-600">
          {version}
        </p>

        <div className="relative flex justify-end">
          <motion.button
            onClick={scrollToTop}
            whileTap={{ scale: 0.7 }}
            transition={{ scale: { duration: 0.2 } }}
            className="relative py-3 px-3 flex items-center justify-center bg-primary-500 text-white font-semibold rounded-xl group"
          >
            <div className="absolute inset-0 bg-primary-500 rounded-xl blur opacity-75 transition duration-300 ease-in-out group-hover:blur-none z-10"></div>
            <svg
              className="w-7 h-7 z-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v13m0-13 4 4m-4-4-4 4"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
