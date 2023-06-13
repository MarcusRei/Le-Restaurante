import { useContext } from "react";
import { Booking } from "../models/Booking";
import { BookingCard } from "./BookingCard";
import { TimeSwitcher } from "./TimeSwitcher";
import { BookingsListWrapper } from "./styled/AdminWrappers";
import { BookingHeading } from "./styled/BookingHeading";
import { BookingContext } from "../contexts/BookingContext";
import { AdminContext } from "../contexts/AdminContext";

export const BookingsList = () => {
  const { bookings } = useContext(AdminContext);

  return (
    <BookingsListWrapper>
      <TimeSwitcher></TimeSwitcher>
      <BookingHeading>Bokningar</BookingHeading>
      {bookings.map((booking: Booking) => (
        <BookingCard key={booking.phonenumber} booking={booking} />
      ))}
    </BookingsListWrapper>
  );
};
