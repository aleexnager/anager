import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const NavLink = ({ id, href, title, setNavbarOpen, isExternalPage }) => {
  console.log("isExternalPage", isExternalPage, id, href, title);

  if (isExternalPage) {
    return (
      <Link
        href={href}
        onClick={() => setNavbarOpen(false)}
        className="flex py-2 mx-2 text-[#ADB7BE] sm:text-xl md:pl-0 hover:text-primary-500 hover:border-b-4 hover:border-primary-500"
      >
        {title}
      </Link>
    );
  } else {
    return (
      <ScrollLink
        activeClass="active"
        to={id}
        spy={true}
        smooth={true}
        duration={500}
        offset={-150}
        onClick={() => setNavbarOpen(false)}
        className="flex py-2 mx-2 text-[#ADB7BE] sm:text-xl md:pl-0 hover:text-primary-500 hover:border-b-4 hover:border-primary-500"
      >
        {title}
      </ScrollLink>
    );
  }
};

export default NavLink;
