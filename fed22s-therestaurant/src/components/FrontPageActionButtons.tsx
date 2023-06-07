import { BookingButton, CallUsButton } from "./styled/Button";
import { InnerWrapperOfHeading } from "./styled/InnerWrapperOfHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export const FrontPageActionButtons = () => {
  return (
    <>
      <InnerWrapperOfHeading>
        <CallUsButton>
          <FontAwesomeIcon icon={faMobile} /> 08 - 89677
        </CallUsButton>
        <BookingButton>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          BORDSBOKNING
        </BookingButton>
      </InnerWrapperOfHeading>
    </>
  );
};
