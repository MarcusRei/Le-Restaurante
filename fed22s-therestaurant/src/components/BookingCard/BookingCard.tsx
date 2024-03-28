import { useContext, useState } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { ActionType } from "../../reducers/AdminReducer";
import { Booking } from "../../models/Booking";
import { deleteBooking } from "../../services/dataService";
import "./BookingCard.css";

interface IBookingCardProps {
  handleUpdateForm: () => void;
  booking: Booking;
  updateChosenBooking: (current: Booking) => void;
}

export const BookingCard = (props: IBookingCardProps) => {
  const { dispatch } = useContext(AdminContext);
  const [bookingToUpdate, setBookingToUpdate] = useState({});

  const updateBooking = () => {
    props.updateChosenBooking(props.booking);
    const chosenBooking = { ...props.booking };

    props.handleUpdateForm();

    setBookingToUpdate(chosenBooking);
  };

  const handleDeleteBooking = async () => {
    try {
      await deleteBooking(props.booking._id);
      dispatch({
        type: ActionType.DELETE_BOOKING,
        payload: props.booking._id ? props.booking._id.toString() : "",
      });
    } catch (error) {
      console.error("Could not delete the booking");
    }
  };

  return (
    <div className="flex-row gap-small">
      <section className="booking-card flex-column gap-small">
        <div>
          <article className="font-bold font medium">
            {props.booking.customer.name}
          </article>
          <article className="font-bold">
            Gäster: {props.booking.guests}
          </article>
        </div>

        <div>
          <article className="font-bold">{props.booking.time}</article>
          <article className="font-bold">Datum: {props.booking.date}</article>
        </div>
      </section>

      <div className="flex-resize" />

      <section className="booking-card-buttons flex-row gap-small align-center">
        <button className="admin-button font-bold" onClick={updateBooking}>
          Uppdatera
        </button>
        <button
          className="admin-button danger font-bold"
          onClick={handleDeleteBooking}
        >
          Ta bort
        </button>
      </section>
    </div>
  );
};
