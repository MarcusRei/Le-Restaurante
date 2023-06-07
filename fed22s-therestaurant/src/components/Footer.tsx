import {
  StyledFooter,
  IconWrapper,
  LogoWrapper,
  AdressWrapper,
  AdressAndLogoWrapper,
} from "./styled/StyledFooter";
import { SmallLogo } from "./SmallLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <StyledFooter>
      <AdressAndLogoWrapper>
        <LogoWrapper>
          <SmallLogo></SmallLogo>
        </LogoWrapper>
        <AdressWrapper>Adressvägen 7</AdressWrapper>
        <AdressWrapper>Stockholm 191 91</AdressWrapper>
      </AdressAndLogoWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </IconWrapper>
    </StyledFooter>
  );
};
