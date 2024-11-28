import { FC } from "react";
import { FaBurger } from "react-icons/fa6";
import NavLinkItemMobile from "./nav_link_item/NavLinkItem";

const navLinks = [
  { to: "/", label: "About Me" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];
const Header: FC = () => {
  return (
    <header className="navbar bg-base-100 shadow-md">
      <div className=" container mx-auto px-6 ">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="">
            <FaBurger size={"1.5rem"} />
          </label>
        </div>
        <div className="navbar-start ml-5 lg:m-0">
          <a className="text-xl poppins-bold">ReDhaBenKortbi</a>
        </div>
        <nav className="navbar-end hidden lg:flex space-x-10 menu menu-horizontal">
          {navLinks.map((link, index) => (
            <NavLinkItemMobile
              icon={null}
              mode="desktop"
              key={index}
              label={link.label}
              to={link.to}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
