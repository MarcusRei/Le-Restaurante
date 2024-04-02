import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Booking } from "../models/Booking";
import { updateBooking } from "../services/dataService";

interface IUpdateBookingFormProps {
  handleUpdateForm: () => void;
}

export const UpdateBookingForm = (props: IUpdateBookingFormProps) => {
  const [booking, setBooking] = useState<Booking>({} as Booking);
  function sendBooking() {}

  function stopSubmit(e: FormEvent) {
    e.preventDefault();

    handleSubmit();
  }

  function handleSubmit() {
    sendBooking();
  }

  function changeTime(e: FormEvent) {
    e.preventDefault();
  }

  function handleInput() {}
  return (
    <form className="admin-form">
      <button onClick={props.handleUpdateForm}>Close</button>
      <form onSubmit={stopSubmit}>
        <h2 className="font medium">Uppdatera bokning</h2>

        <div className="font-bold">Nuvaranade namn: {booking.name}</div>
        <article className="flex-row gap-small align-center">
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            defaultValue={booking.name}
            name="name"
            onChange={handleInput}
          ></input>
        </article>

        <div className="spacing small" />

        <article>
          <div className="font-bold">Nuvarande email: {booking.email}</div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={booking.email}
            name="email"
            onChange={handleInput}
          />
        </article>

        <div className="spacing small" />

        <div className="font-bold">Nuvarande nummer: {booking.phonenumber}</div>
        <article>
          <label htmlFor="phone">Telefonnummer:</label>
          <input
            type="text"
            value={booking.phonenumber}
            name="phonenumber"
            onChange={handleInput}
          />
        </article>

        <div className="spacing small" />

        <article>
          <label>
            Antal i sällskap:
            <input
              type="number"
              min={1}
              //max={10}
              value={booking.guests}
              name="guests"
              onChange={handleInput}
            />
          </label>
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <div className="font-bold">
            Nuvarande sittning:
            {booking.timeSlot}
          </div>

          <button className="admin-button" onClick={changeTime}>
            Byt tid
          </button>
        </article>

        <div className="spacing small" />

        <div className="flex-row justify-center">
          <button className="admin-button font-bold">Uppdatera bokning!</button>
        </div>
      </form>
    </form>
  );
};
