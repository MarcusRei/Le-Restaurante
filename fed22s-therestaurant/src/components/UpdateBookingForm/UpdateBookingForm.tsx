import { useContext, useRef, useState } from "react";
import { Booking } from "../../models/Booking";
import "./UpdateBookingForm.css";
import Calendar from "react-calendar";
import { DateTime } from "luxon";
import { BookingContext } from "../../contexts/BookingContext";

interface IUpdateBookingFormProps {
  closeDialog: Function;
  booking: Booking;
}

export const UpdateBookingForm = (props: IUpdateBookingFormProps) => {
  const calendarRef = useRef<HTMLDialogElement>(null);
  const dispatch = useContext(BookingContext);
  const [date, setDate] = useState(DateTime.local().toJSDate());

  function changeDate(date: Date) {
    const chosenDate = DateTime.fromJSDate(date).toISODate()!;

    setDate(date);
    calendarRef.current!.close();
  }

  return (
    <>
      <form className="update-booking-form">
        <div className="upper-button-container flex-row">
          <button
            className="admin-button danger font-bold"
            onClick={() => props.closeDialog()}
          >
            Close
          </button>
        </div>

        <h2 className="font medium">Uppdatera bokning</h2>
        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            defaultValue={props.booking.name}
            name="name"
          ></input>
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <label htmlFor="email">Email:</label>
          <input type="text" value={props.booking.email} name="email" />
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <label htmlFor="phone">Telefonnummer:</label>
          <input
            type="text"
            value={props.booking.phonenumber}
            name="phonenumber"
          />
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <label>Antal i sällskap:</label>
          <input
            type="number"
            min={1}
            //max={10}
            value={props.booking.guests}
            name="guests"
          />
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <div className="font-bold">
            Nuvarande sittning:
            {props.booking.timeSlot}
          </div>

          <button
            className="admin-button font-bold"
            onClick={(e) => {
              e.preventDefault();
              calendarRef.current!.showModal();
            }}
          >
            Byt tid
          </button>
        </article>

        <div className="spacing small" />

        <div className="flex-row justify-center">
          <button className="admin-button font-bold">Uppdatera bokning</button>
        </div>
      </form>

      <dialog ref={calendarRef}>
        <div className="padding small">
          <button
            className="admin-button danger"
            onClick={(e) => {
              e.preventDefault();
              calendarRef.current!.close();
            }}
          >
            Close
          </button>
          <Calendar
            value={date}
            onClickDay={(value) => changeDate(value)}
            minDate={DateTime.local().toJSDate()}
          ></Calendar>
        </div>
      </dialog>
    </>
  );
};
