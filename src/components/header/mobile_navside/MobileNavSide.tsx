import { FC } from "react";
import { FaCode, FaFolder, FaPerson, FaPhone } from "react-icons/fa6";
import NavLinkItem from "../nav_link_item/NavLinkItem";

const navLinks = [
  { to: "/", icon: <FaPerson />, label: "About Me" },
  { to: "/skills", icon: <FaCode />, label: "Skills" },
  { to: "/projects", icon: <FaFolder />, label: "Projects" },
  { to: "/contact", icon: <FaPhone />, label: "Contact" },
];

const MobileNavSide: FC = () => {
  return (
    <nav className="bg-base-200 min-h-full w-60 pt-16 flex flex-col text-lg">
      {navLinks.map((link, index) => (
        <NavLinkItem
          mode="mobile"
          key={index}
          icon={link.icon}
          label={link.label}
          to={link.to}
        />
      ))}
    </nav>
  );
};
export default MobileNavSide;
