import { FrontPageHeading, Heading } from "./styled/Heading";
import { PTagFrontPage } from "./styled/PtagFrontPage";
import {
  OuterWrapperOfHeading,
  WrapperOfHours,
} from "./styled/OuterWrapperOfHeading";
import {
  HeadingLine,
  HeadingLineWrapper,
} from "./styled/HeadingLine";
import { Logo } from "./Logo";
import { ParagraphFrontPage } from "./styled/ParagraphFrontPage";
import { LeRestauranteWrapper } from "./styled/LeRestauranteWrapper";
import { FrontPageActionButtons } from "./FrontPageActionButtons";

export const Home = () => {
  return (
    <>
      <OuterWrapperOfHeading>
        <LeRestauranteWrapper>
          <PTagFrontPage>Välkomna till</PTagFrontPage>
          <Logo></Logo>
        </LeRestauranteWrapper>
        <ParagraphFrontPage>
          En äkta italiensk ristorante med rötter från Trieste. Hos
          oss får du det italienska köket när det är som bäst, i en
          familjär och trivsam miljö. Välkomna att boka bord!
        </ParagraphFrontPage>
        <FrontPageActionButtons></FrontPageActionButtons>
        <HeadingLineWrapper>
          <Heading>
            <HeadingLine></HeadingLine>
            ÖPPETTIDER<HeadingLine></HeadingLine>
          </Heading>
        </HeadingLineWrapper>
        <WrapperOfHours>
          <ParagraphFrontPage>
            Måndag: 11:00-14:00, 16:30-22:00 Tisdag: 11:00-14:00,
            16:30-22:00 Onsdag: 11:00-14:00, 16:30-23:00 Torsdag:
            11:00-14:00, 16:30-23:00 Fredag: 11:00-14.00, 16:30 –
            23:00 Lördag: 16:30 – 23:00
          </ParagraphFrontPage>
        </WrapperOfHours>
      </OuterWrapperOfHeading>
    </>
  );
};
