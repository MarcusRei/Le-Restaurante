import { ChangeEvent, useRef, useState } from "react";
import { Booking } from "../../models/Booking";
import "./UpdateBookingForm.css";
import Calendar from "react-calendar";
import { DateTime } from "luxon";
import { TimeSlot } from "../../enums/timeSlots";
import { updateBooking } from "../../services/dataService";

interface IUpdateBookingFormProps {
  closeDialog: Function;
  booking: Booking;
  /* refreshBookings: Function; */
}

export const UpdateBookingForm = (props: IUpdateBookingFormProps) => {
  const calendarRef = useRef<HTMLDialogElement>(null);
  const timeSlotRef = useRef<HTMLDialogElement>(null);
  const [date, setDate] = useState(DateTime.local().toJSDate());
  const [booking, setBooking] = useState<Booking>(props.booking);

  console.log("booking", booking);

  function changeDate(date: Date) {
    const dateString = DateTime.fromJSDate(date).toFormat("yyyy-MM-dd");
    setBooking({
      ...booking,
      date: dateString,
    });

    setDate(date);
    calendarRef.current!.close();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  }

  async function updateBookingHandler() {
    const response = await updateBooking(booking);
    console.log(response);
    if (response.status === 200) {
      alert("Bokningen har uppdaterats");
      props.closeDialog();
    }
  }

  return (
    <>
      <form className="update-booking-form">
        <div className="upper-button-container flex-row">
          <button
            className="admin-button danger font-bold"
            onClick={(e) => {
              e.preventDefault();
              props.closeDialog();
            }}
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
            defaultValue={booking.name}
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            defaultValue={booking.email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <label htmlFor="phone">Telefonnummer:</label>
          <input
            type="tel"
            defaultValue={booking.phonenumber}
            name="phonenumber"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <label>Antal i sällskap:</label>
          <input
            type="number"
            min={1}
            //max={10}
            defaultValue={booking.guests}
            name="guests"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <div className="font-bold">Nuvarande sittning:</div>
          <div className="font-bold">{booking.timeSlot}</div>

          <button
            className="admin-button font-bold"
            onClick={(e) => {
              e.preventDefault();
              timeSlotRef.current!.showModal();
            }}
          >
            Byt tid
          </button>
        </article>

        <article className="flex-row align-center gap-small">
          <div className="font-bold">Datum:</div>
          <div className="font-bold">{booking.date}</div>

          <button
            className="admin-button font-bold"
            onClick={(e) => {
              e.preventDefault();
              calendarRef.current!.showModal();
            }}
          >
            Byt datum
          </button>
        </article>

        <div className="spacing small" />

        <div className="flex-row justify-center">
          <button
            className="admin-button font-bold"
            onClick={(e) => {
              e.preventDefault();
              updateBookingHandler();
            }}
          >
            Uppdatera bokning
          </button>
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

      <dialog ref={timeSlotRef}>
        <div className="flex-column gap-small padding small">
          <button
            className="admin-button danger"
            onClick={(e) => {
              e.preventDefault();
              timeSlotRef.current!.close();
            }}
          >
            Close
          </button>

          <div className="flex-row gap-small">
            <button
              className="admin-button font-bold"
              onClick={(e) => {
                e.preventDefault();
                setBooking({
                  ...booking,
                  timeSlot: TimeSlot.EARLY,
                });
                timeSlotRef.current!.close();
              }}
            >
              {TimeSlot.EARLY}
            </button>
            <button
              className="admin-button font-bold"
              onClick={(e) => {
                e.preventDefault();
                setBooking({
                  ...booking,
                  timeSlot: TimeSlot.LATE,
                });
                timeSlotRef.current!.close();
              }}
            >
              {TimeSlot.LATE}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
