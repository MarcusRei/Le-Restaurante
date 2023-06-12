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
        {bookings.map((booking: any) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </BookingsListWrapper>
    </>
  );
};
