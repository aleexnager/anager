import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, setNavbarOpen, isExternalPage }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="overflow-hidden bg-[#121212] text-white"
    >
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              id={link.id}
              href={link.path}
              title={link.title}
              setNavbarOpen={setNavbarOpen}
              isExternalPage={isExternalPage}
            />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuOverlay;
