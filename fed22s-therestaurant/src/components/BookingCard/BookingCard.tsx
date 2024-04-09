import { useContext, useState } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { Booking } from "../../models/Booking";
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
    console.log("updateBooking");
    props.updateChosenBooking(props.booking);
    const chosenBooking = { ...props.booking };

    props.handleUpdateForm();

    setBookingToUpdate(chosenBooking);
  };

  const handleDeleteBooking = async () => {
    console.log("handleDeleteBooking");
    /* try {
      await deleteBooking(props.booking);
      dispatch({
        type: ActionType.DELETE_BOOKING,
        payload: props.booking ? props.booking.toString() : "",
      });
    } catch (error) {
      console.error("Could not delete the booking");
    } */
  };

  return (
    <div className="flex-row gap-small">
      <section className="booking-card flex-column gap-small">
        <div>
          <article className="font-bold font medium">
            {props.booking.name}
          </article>
          <article className="font-bold">
            Gäster: {props.booking.guests}
          </article>
        </div>

        <div>
          <article className="font-bold">{props.booking.timeSlot}</article>
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
