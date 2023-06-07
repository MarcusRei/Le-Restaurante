import { StyledFooter } from "./styled/StyledFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <StyledFooter>
      <Logo></Logo>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
    </StyledFooter>
  );
};
