import { Navbar } from "./styled/navigation/Navbar";
import { useEffect, useState } from "react";
import { NavIcon } from "./styled/navigation/NavIcon";
import { HamburgerMenu } from "./styled/navigation/HamburgerMenu";
import { NavLinkWrapper } from "./styled/navigation/NavLinkWrapper";
import { StyledAnchor } from "./styled/navigation/StyledAnchor";

export const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [displayLinks, setDisplayLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 844;
      setDisplayLinks(isDesktop);
      if (isDesktop) {
        setShowNav(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { label: "Hem", url: "/" },
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
        {(showNav || displayLinks) && (
          <>
            {links.map((link) => (
              <StyledAnchor key={link.label} href={link.url}>
                {link.label}
              </StyledAnchor>
            ))}
          </>
        )}
      </NavLinkWrapper>
    </>
  );
};
