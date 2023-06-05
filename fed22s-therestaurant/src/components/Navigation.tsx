import { Navbar } from "./styled/Navbar";
import { useState } from "react";
import { NavIcon } from "./styled/NavIcon";
import { HamburgerMenu } from "./styled/HamburgerMenu";
import { NavLinkWrapper } from "./styled/NavLinkWrapper";
import { keyframes } from "styled-components";

export const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const links = [
    { label: "Meny", url: "/menu" },
    { label: "Bokning", url: "/booking" },
    { label: "Kontakt", url: "/contact" },
  ];

  const handleClick = () => {
    setShowNav(!showNav);
    setIsRotated(!isRotated);
  };

  return (
    <>
      <Navbar>
        <HamburgerMenu onClick={handleClick} isRotated={isRotated}>
          <NavIcon></NavIcon>
          <NavIcon></NavIcon>
          <NavIcon></NavIcon>
        </HamburgerMenu>
      </Navbar>
      <NavLinkWrapper>
        {showNav && (
          <>
            {links.map((link) => (
              <a key={link.label} href={link.url}>
                {link.label}
              </a>
            ))}
          </>
        )}
      </NavLinkWrapper>
    </>
  );
};
