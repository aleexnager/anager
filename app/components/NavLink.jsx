import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-4 pr-4 text-[#ADB7BE] sm:text-xl rounded md:pl-0 hover:text-primary-500"
    >
      {title}
    </Link>
  );
};

export default NavLink;
