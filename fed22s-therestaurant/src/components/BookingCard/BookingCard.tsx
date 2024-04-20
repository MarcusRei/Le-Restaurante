import { useContext, useRef, useState } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { Booking } from "../../models/Booking";
import "./BookingCard.css";
import { UpdateBookingForm } from "../UpdateBookingForm/UpdateBookingForm";

interface IBookingCardProps {
  handleUpdateForm: () => void;
  booking: Booking;
}

export const BookingCard = (props: IBookingCardProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { dispatch } = useContext(AdminContext);

  function updateBooking() {
    console.log("updateBooking");
    props.handleUpdateForm();
  }

  function openUpdateDialog() {
    dialogRef.current!.showModal();
  }

  const handleDeleteBooking = async () => {
    console.log("handleDeleteBooking");
  };

  return (
    <div className="booking-card flex-row gap-small">
      <section className="flex-column gap-small">
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
        <button
          className="admin-button font-bold"
          onClick={() => openUpdateDialog()}
        >
          Uppdatera
        </button>

        <button
          className="admin-button danger font-bold"
          onClick={handleDeleteBooking}
        >
          Ta bort
        </button>
      </section>

      <dialog ref={dialogRef}>
        <div>
          <UpdateBookingForm
            booking={props.booking}
            closeDialog={() => dialogRef.current!.close()}
          />
        </div>
      </dialog>
    </div>
  );
};
