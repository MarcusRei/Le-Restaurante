import { BookingButton, CallUsButton } from "./styled/Buttons";
import { InnerWrapperOfHeading } from "./styled/HeadingStyles";
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
