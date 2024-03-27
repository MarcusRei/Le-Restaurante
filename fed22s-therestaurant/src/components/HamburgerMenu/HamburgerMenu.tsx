import { useState } from "react";
import "./HamburgerMenu.css";

export const HamburgerMenu = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hamburgerSymbol = (
    <div
      className="hamburger-symbol flex-column align-center justify-center debug-frame"
      onClick={() => {
        toggleMenu();
      }}
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </div>
  );

  return (
    <div className="hamburger flex-row position-relative">
      {hamburgerSymbol}

      <div
        className={`hamburger-menu flex-column gap-small align-center position-absolute ${
          isOpen ? "open" : "hidden"
        }`}
      >
        <a className="hamburger-link" href={"/"}>
          Hem
        </a>
        <a className="hamburger-link" href={"/menu"}>
          Meny
        </a>
        <a className="hamburger-link" href={"/booking"}>
          Boka
        </a>
        <a className="hamburger-link" href={"contact"}>
          Kontakt
        </a>
      </div>
    </div>
  );
};
