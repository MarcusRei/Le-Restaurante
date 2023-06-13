import { useContext } from "react";
import { Booking } from "../models/Booking";
import { BookingCard } from "./BookingCard";
import { TimeSwitcher } from "./TimeSwitcher";
import { BookingsListWrapper } from "./styled/AdminWrappers";
import { BookingHeading } from "./styled/BookingHeading";
import { AdminContext } from "../contexts/AdminContext";

export const BookingsList = () => {
  const { bookings } = useContext(AdminContext);
  console.log("====> HÅÄR", bookings);

  return (
    <BookingsListWrapper>
      <TimeSwitcher></TimeSwitcher>
      <BookingHeading>Bokningar</BookingHeading>
      {bookings.map((booking: Booking) => (
        <BookingCard key={booking._id} booking={booking} />
      ))}
    </BookingsListWrapper>
  );
};
