import { useState } from "react";

import hamburgerMenuIcon from "../../assets/images/icon-menu.svg";
import logo from "../../assets/images/logo.svg";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function AppBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => setIsMobileMenuOpen((state) => !state);

  return (
    <div
      className="
        flex items-center justify-between pb-8 pt-7 
        md:pb-14 md:pt-20"
    >
      <img
        src={logo}
        alt="Logo"
        className="h-[30px] w-[47px] md:h-[42px] md:w-[66px]"
      />
      <button
        type="button"
        onClick={handleMobileMenuToggle}
        className="block sm:hidden"
      >
        <img src={hamburgerMenuIcon} alt="Mobile menu icon" />
      </button>
      <DesktopMenu />
      {isMobileMenuOpen ? (
        <MobileMenu handleClick={handleMobileMenuToggle} />
      ) : null}
    </div>
  );
}

export default AppBar;
