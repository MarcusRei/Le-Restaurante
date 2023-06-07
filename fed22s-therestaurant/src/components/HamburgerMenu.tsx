import { useState } from "react";
import {
  HamburgerLine,
  HamburgerSymbol,
} from "./styled/navigation/navigationStyles";

interface IHamburgerMenuProps {
  toggleMobileLinks: () => void;
}

export const HamburgerMenu = (props: IHamburgerMenuProps) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    props.toggleMobileLinks();
  };

  return (
    <>
      <HamburgerSymbol onClick={handleClick} isRotated={isRotated}>
        <HamburgerLine></HamburgerLine>
        <HamburgerLine></HamburgerLine>
        <HamburgerLine></HamburgerLine>
      </HamburgerSymbol>
    </>
  );
};
