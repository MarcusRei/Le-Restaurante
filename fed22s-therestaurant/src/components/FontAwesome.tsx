import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export const FontAwesome = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faMobile} />
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </div>
  );
};
