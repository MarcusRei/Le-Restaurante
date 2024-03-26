import { BookingButton, CallUsButton } from "./styled/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const FrontPageActionButtons = () => {
  return (
    <>
      <CallUsButton>
        <FontAwesomeIcon icon={faMobile} /> 08 - 89677
      </CallUsButton>
      <Link to="/booking">
        <BookingButton>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          BORDSBOKNING
        </BookingButton>
      </Link>
    </>
  );
};
