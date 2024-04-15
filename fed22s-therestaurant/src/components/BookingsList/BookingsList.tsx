import { useContext, useState } from "react";
import { BookingCard } from "../BookingCard/BookingCard";
import { AdminContext } from "../../contexts/AdminContext";
import "./BookingsList.css";

export interface IFormHandling {
  openForm: () => void;
  closeForm: () => void;
}

export const BookingsList = () => {
  const { bookings } = useContext(AdminContext);
  const [updateFormSwitch, setUpdateFormSwitch] = useState(false);

  function handleUpdateForm() {
    setUpdateFormSwitch(!updateFormSwitch);
  }

  return (
    <div className="bookings-list">
      {bookings.filteredList.map((booking) => (
        <BookingCard
          handleUpdateForm={handleUpdateForm}
          key={booking._id}
          booking={booking}
        />
      ))}
    </div>
  );
};
