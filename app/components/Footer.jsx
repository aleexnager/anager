import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="p-12 flex justify-between w-full">
        <span>A.NAGER</span>
        <p className="hidden lg:block text-slate-600">v1.5</p>
        <p className="text-slate-600">
          Copyright &copy; | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
