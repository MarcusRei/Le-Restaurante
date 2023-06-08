import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CallUsButton, MailUsButton } from "../styled/Buttons";
import { faMailBulk, faMobile } from "@fortawesome/free-solid-svg-icons";
import {
  Heading,
  HeadingLine,
  HeadingLineWrapper,
  WrapperOfHours,
} from "../styled/HeadingStyles";
import { ParagraphFrontPage } from "../styled/frontpage/ParagraphFrontPage";
import { CenterWrapper, ContactWrapper } from "../styled/Wrappers";

export const Contact = () => {
  return (
    <>
      <CenterWrapper>
        <ContactWrapper>
          <CallUsButton>
            <FontAwesomeIcon icon={faMobile} /> 08-89677
          </CallUsButton>
          <MailUsButton>
            <FontAwesomeIcon icon={faMailBulk} /> leRestaurante@hello.se
          </MailUsButton>
        </ContactWrapper>
        <ContactWrapper>
          <HeadingLineWrapper>
            <Heading>
              <HeadingLine></HeadingLine>
              ÖPPETTIDER<HeadingLine></HeadingLine>
            </Heading>
          </HeadingLineWrapper>
          <WrapperOfHours>
            <ParagraphFrontPage>
              Måndag: 11:00-14:00, 16:30-22:00 Tisdag: 11:00-14:00, 16:30-22:00
              Onsdag: 11:00-14:00, 16:30-23:00 Torsdag: 11:00-14:00, 16:30-23:00
              Fredag: 11:00-14.00, 16:30 – 23:00 Lördag: 16:30 – 23:00
            </ParagraphFrontPage>
          </WrapperOfHours>
        </ContactWrapper>
      </CenterWrapper>
    </>
  );
};
