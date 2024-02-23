import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, setNavbarOpen, isExternalPage }) => {
  return (
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
  );
};

export default MenuOverlay;
