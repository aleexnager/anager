import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="p-12 flex flex-row justify-between lg:grid lg:grid-cols-3 items-center w-full">
        <span className="text-left text-white">A.NÁGER</span>
        <p className="hidden lg:block lg:text-center text-slate-600">v3.0</p>
        <p className="text-right text-slate-600">
          Copyright &copy; | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
