import { BookingHeading } from "./styled/BookingHeading";
import { ContactButton } from "./styled/Button";
import { ThinText } from "./styled/ThinText";
import { TimeSlotBlock } from "./styled/TimeSlotBlock";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./styled/Wrappers";

export const BookingCard = () => {
  return (
    <HorizontalWrapper>
      <TimeSlotBlock>18:00</TimeSlotBlock>
      <VerticalWrapper>
        <BookingHeading>Marcus Reineck</BookingHeading>
        <ContactButton>Kontakta</ContactButton>
        <ThinText>6 personer</ThinText>
      </VerticalWrapper>
      <VerticalWrapper>
        <ThinText>Datum: 31-05-23</ThinText>
        <ThinText>Bord 1</ThinText>
      </VerticalWrapper>
    </HorizontalWrapper>
  );
};
