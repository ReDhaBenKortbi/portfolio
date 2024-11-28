import { FC } from "react";
interface NavLinkItemProps {
  to: string;
  icon: React.ReactNode | null;
  label: string;
  mode: "desktop" | "mobile";
}

const NavLinkItem: FC<NavLinkItemProps> = ({ to, icon, label, mode }) => {
  return (
    <a
      href={to}
      className={"text-neutral poppins-regular py-5 px-3 lg:p-0 text-lg"}
    >
      {mode == "mobile" ? (
        <>
          <span className="flex items-center">
            {icon}
            <p className="ml-5">{label}</p>
          </span>
        </>
      ) : (
        label
      )}
    </a>
  );
};

export default NavLinkItem;
