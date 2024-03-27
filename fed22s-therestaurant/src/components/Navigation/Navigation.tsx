import "./Navigation.css";
import { useState } from "react";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";

export const Navigation = () => {
  const [displayMobileLinks, setDisplayMobileLinks] = useState(false);

  const [desktopWidth, setDesktopWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setDesktopWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  const desktopMenu = (
    <ul className="flex-row justify-center gap-large full-width">
      <a className="navigation-link" href="/">
        Hem
      </a>
      <a className="navigation-link" href="/menu">
        Meny
      </a>
      <a className="navigation-link" href="/booking">
        Boka
      </a>
      <a className="navigation-link" href="/contact">
        Kontakt
      </a>
    </ul>
  );

  return <nav>{desktopWidth > 844 ? desktopMenu : <HamburgerMenu />}</nav>;
};
