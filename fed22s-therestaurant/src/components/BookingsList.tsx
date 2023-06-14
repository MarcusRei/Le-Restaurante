import { useContext } from "react";
import { BookingClass } from "../models/BookingClass";
import { BookingCard } from "./BookingCard";
import { TimeSwitcher } from "./TimeSwitcher";
import { BookingsListWrapper } from "./styled/AdminWrappers";
import { BookingHeading } from "./styled/BookingHeading";
import { AdminContext } from "../contexts/AdminContext";

export const BookingsList = () => {
  const { bookings: filteredBookings } = useContext(AdminContext);
  console.log("====> HÅÄR", filteredBookings);

  return (
    <BookingsListWrapper>
      <TimeSwitcher></TimeSwitcher>
      <BookingHeading>Bokningar</BookingHeading>
      {filteredBookings.map((booking: BookingClass) => (
        <BookingCard key={booking._id} booking={booking} />
      ))}
    </BookingsListWrapper>
  );
};
