import React from "react";
import MenuIcon from "../components/icons/Menu";

const Header: React.FC<{ title: string; toggleMenu: () => void }> = ({
  title,
  toggleMenu,
}) => {
  return (
    <header className="mb-8 relative z-10">
      <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        {title}
      </h4>
      <MenuIcon
        onClick={toggleMenu}
        className="w-6 h-6 lg:w-7 lg:h-7 absolute right-0 bottom-2 lg:bottom-3 text-primary hover:text-primary-600 transition-all cursor-pointer"
      ></MenuIcon>
    </header>
  );
};

export default Header;
