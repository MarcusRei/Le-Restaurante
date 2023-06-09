import { BookingCard } from "./BookingCard";
import { TimeSwitcher } from "./TimeSwitcher";
import { BookingsListWrapper } from "./styled/AdminWrappers";
import { BookingHeading } from "./styled/BookingHeading";

export interface BookingListProps {
  bookings: [];
}

export const BookingsList = (bookings: BookingListProps) => {
  console.log("data från bookingslist ===>", bookings);
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
