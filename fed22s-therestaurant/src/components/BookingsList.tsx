import { useContext, useState } from "react";
import { BookingClass } from "../models/Booking";
import { BookingCard } from "./BookingCard";
import { TimeSwitcher } from "./TimeSwitcher";
import { BookingsListWrapper } from "./styled/AdminWrappers";
import { BookingHeading } from "./styled/BookingHeading";
import { AdminContext } from "../contexts/AdminContext";
import { AdminUpdateForm } from "./AdminUpdateForm";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";

export const BookingsList = () => {
  const { bookings } = useContext(AdminContext);
  /* console.log("bookings", bookings); */
  const [updateFormSwitch, setUpdateFormSwitch] = useState(false);
  const [currentBooking, setChosenBooking] = useState<BookingClass>({
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  });

  function openUpdateForm() {
    setUpdateFormSwitch(true);
  }

  function updateChosenBooking(current: BookingClass) {
    console.log("current", current);
    setChosenBooking(current);
  }

  return (
    <BookingsListWrapper>
      <TimeSwitcher></TimeSwitcher>
      <BookingHeading>Bokningar</BookingHeading>
      <CurrentBookingContext.Provider value={currentBooking}>
        {bookings.map((booking: BookingClass) => (
          <BookingCard
            openUpdateForm={openUpdateForm}
            key={booking._id}
            booking={booking}
            updateChosenBooking={updateChosenBooking}
          />
        ))}
        {updateFormSwitch && <AdminUpdateForm></AdminUpdateForm>}
      </CurrentBookingContext.Provider>
    </BookingsListWrapper>
  );
};
