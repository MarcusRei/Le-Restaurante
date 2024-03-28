import { useContext, useState } from "react";
import { BookingCard } from "./BookingCard/BookingCard";
import { TimeSwitcher } from "./TimeSwitcher";
import { AdminContext } from "../contexts/AdminContext";
import { UpdateBookingForm } from "./UpdateBookingForm";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";
import { Booking, emptyBookingCustomerExt } from "../models/Booking";

export interface IFormHandling {
  openForm: () => void;
  closeForm: () => void;
}

export const BookingsList = () => {
  const { bookings } = useContext(AdminContext);
  const [updateFormSwitch, setUpdateFormSwitch] = useState(false);
  const [currentBooking, setChosenBooking] = useState<Booking>(
    emptyBookingCustomerExt
  );

  const testBooking = {
    _id: "54",
    date: "2024-03-28",
    time: "Kl 14:00-15:00",
    guests: 4,
    customer: {
      _id: "40",
      name: "Stefan Test",
      email: "stefan.test@gmail.com",
      phonenumber: "0760505645",
    },
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

      <CurrentBookingContext.Provider value={currentBooking}>
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
      </CurrentBookingContext.Provider>
    </div>
  );
};
