import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const FontAwesome = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faMobile} />
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
};
