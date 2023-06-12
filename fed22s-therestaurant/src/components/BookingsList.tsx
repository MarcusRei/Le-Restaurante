import { Booking } from "../models/Booking";
import { Customer } from "../models/Customer";
import { BookingCard } from "./BookingCard";
import { TimeSwitcher } from "./TimeSwitcher";
import { BookingsListWrapper } from "./styled/AdminWrappers";
import { BookingHeading } from "./styled/BookingHeading";

export interface BookingListProps {
  bookings: (Booking | Customer)[];
}

export const BookingsList = ({ bookings }: BookingListProps) => {
  console.log("data från bookingslist ===>", bookings);
  return (
    <>
      <BookingsListWrapper>
        <BookingHeading>Bokningar</BookingHeading>
        <TimeSwitcher></TimeSwitcher>
        {bookings.map((bookings: Booking | Customer) => (
          <BookingCard key={bookings._id} bookings={bookings} />
        ))}
      </BookingsListWrapper>
    </>
  );
};
