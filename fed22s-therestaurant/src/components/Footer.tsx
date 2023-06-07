import {
  StyledFooter,
  IconWrapper,
  LogoWrapper,
} from "./styled/StyledFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <StyledFooter>
      <LogoWrapper>
        <Logo></Logo>
      </LogoWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </IconWrapper>
    </StyledFooter>
  );
};
