import { StyledFooter } from "./styled/StyledFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <StyledFooter>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
    </StyledFooter>
  );
};
