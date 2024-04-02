import { useContext, useState } from "react";
import { BookingCard } from "./BookingCard/BookingCard";
import { TimeSwitcher } from "./TimeSwitcher";
import { AdminContext } from "../contexts/AdminContext";
import { UpdateBookingForm } from "./UpdateBookingForm";
import { Booking } from "../models/Booking";
import { TimeSlot } from "../enums/timeSlots";

export interface IFormHandling {
  openForm: () => void;
  closeForm: () => void;
}

export const BookingsList = () => {
  const { bookings } = useContext(AdminContext);
  const [updateFormSwitch, setUpdateFormSwitch] = useState(false);
  const [currentBooking, setChosenBooking] = useState<Booking>({} as Booking);

  const testBooking = {
    date: "2024-03-28",
    timeSlot: TimeSlot.EARLY,
    guests: 4,
    name: "Stefan Test",
    email: "stefan.test@gmail.com",
    phonenumber: "0760505645",
  };

  function handleUpdateForm() {
    setUpdateFormSwitch(!updateFormSwitch);
  }

  function updateChosenBooking(current: any) {
    console.log("current", current);
    setChosenBooking(current);
  }

  return (
    <div>
      <div>
        <TimeSwitcher></TimeSwitcher>
      </div>

      <article className="booking-list">
        <BookingCard
          handleUpdateForm={handleUpdateForm}
          booking={testBooking}
          updateChosenBooking={updateChosenBooking}
        />

        <BookingCard
          handleUpdateForm={handleUpdateForm}
          booking={testBooking}
          updateChosenBooking={updateChosenBooking}
        />

        {bookings.filteredList.map((booking) => (
          <BookingCard
            handleUpdateForm={handleUpdateForm}
            key={booking._id}
            booking={booking}
            updateChosenBooking={updateChosenBooking}
          />
        ))}
      </article>

      {updateFormSwitch && (
        <UpdateBookingForm
          handleUpdateForm={handleUpdateForm}
        ></UpdateBookingForm>
      )}
    </div>
  );
};
