import { FrontPageHeading } from "./styled/Heading";
import { PTagFrontPage } from "./styled/PtagFrontPage";
import { OuterWrapperOfHeading } from "./styled/OuterWrapperOfHeading";
import { InnerWrapperOfHeading } from "./styled/InnerWrapperOfHeading";
import { LeRestauranteWrapper } from "./styled/LeRestauranteWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { BookingButton, CallUsButton } from "./styled/Button";

export const Home = () => {
  return (
    <>
      <OuterWrapperOfHeading>
        <LeRestauranteWrapper>
          <PTagFrontPage>Välkomna till</PTagFrontPage>
          <FrontPageHeading>Le RESTAURANTE</FrontPageHeading>
        </LeRestauranteWrapper>
        <PTagFrontPage>
          En äkta italiensk ristorante med rötter från Trieste. Hos
          oss får du det italienska köket när det är som bäst, i en
          familjär och trivsam miljö. Välkomna att boka bord!
        </PTagFrontPage>

        <InnerWrapperOfHeading>
          <CallUsButton>
            <FontAwesomeIcon icon={faMobile} /> 08 - 89677
          </CallUsButton>
          <BookingButton>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
            BORDSBOKNING
          </BookingButton>
        </InnerWrapperOfHeading>
      </OuterWrapperOfHeading>
    </>
  );
};
