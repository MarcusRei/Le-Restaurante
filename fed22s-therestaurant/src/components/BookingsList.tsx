import { BookingCard } from "./BookingCard";
import { TimeSwitcher } from "./TimeSwitcher";
import { BookingsListWrapper } from "./styled/AdminWrappers";
import { BookingHeading } from "./styled/BookingHeading";

export const BookingsList = () => {
  return (
    <>
      <BookingsListWrapper>
        <BookingHeading>Bokningar</BookingHeading>
        <TimeSwitcher></TimeSwitcher>
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
      </BookingsListWrapper>
    </>
  );
};
