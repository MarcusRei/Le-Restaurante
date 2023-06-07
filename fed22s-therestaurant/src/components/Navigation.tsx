import {
  MobileLinksWrapper,
  Navbar,
} from "./styled/navigation/navigationStyles";
import { useEffect, useState } from "react";
import { StyledAnchor } from "./styled/navigation/navigationStyles";
import { HamburgerMenu } from "./HamburgerMenu";

export const Navigation = () => {
  const [displayMobileLinks, setDisplayMobileLinks] = useState(false);

  const [desktopWidth, setDesktopWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setDesktopWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  const toggleMobileLinks = () => {
    setDisplayMobileLinks(!displayMobileLinks);
  };

  const desktopMenu = (
    <ul>
      <StyledAnchor href={"/"}>Hem</StyledAnchor>
      <StyledAnchor href={"/menu"}>Meny</StyledAnchor>
      <StyledAnchor href={"/booking"}>Boka</StyledAnchor>
      <StyledAnchor href={"contact"}>Kontakt</StyledAnchor>
    </ul>
  );

  const mobileLinks = (
    <MobileLinksWrapper>
      <StyledAnchor href={"/"}>Hem</StyledAnchor>
      <StyledAnchor href={"/menu"}>Meny</StyledAnchor>
      <StyledAnchor href={"/booking"}>Boka</StyledAnchor>
      <StyledAnchor href={"contact"}>Kontakt</StyledAnchor>
    </MobileLinksWrapper>
  );

  return (
    <>
      {desktopWidth > 844 ? (
        desktopMenu
      ) : (
        <Navbar>
          <HamburgerMenu toggleMobileLinks={toggleMobileLinks}></HamburgerMenu>
          {displayMobileLinks && mobileLinks}
        </Navbar>
      )}
    </>
  );
};
