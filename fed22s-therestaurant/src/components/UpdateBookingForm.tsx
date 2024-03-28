import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";
import { timeSlot } from "../enums/timeSlots";
import { Booking, emptyBookingCustomerExt } from "../models/Booking";
import { updateBooking } from "../services/dataService";

interface IUpdateBookingFormProps {
  handleUpdateForm: () => void;
}

export const UpdateBookingForm = (props: IUpdateBookingFormProps) => {
  const currentBooking = useContext(CurrentBookingContext);

  const [updatedBooking, setUpdatedBooking] = useState<Booking>({
    ...emptyBookingCustomerExt,
    guests: currentBooking.guests,
  });

  const [finishedBooking, setFinishedBooking] = useState<Booking>({
    ...emptyBookingCustomerExt,
    guests: currentBooking.guests,
  });

  useEffect(() => {
    if (finishedBooking.customer.name !== "") {
      updateBooking(finishedBooking);
    }
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const prop = e.target.name;
    if (e.target.type === "text") {
      setUpdatedBooking({ ...updatedBooking, [prop]: e.target.value });
    }
    if (e.target.type === "number") {
      setUpdatedBooking({ ...updatedBooking, [prop]: +e.target.value });
    }
  }

  function handleCustomerChange(e: ChangeEvent<HTMLInputElement>) {
    const prop = e.target.name;
    setUpdatedBooking({
      ...updatedBooking,
      customer: { ...updatedBooking.customer, [prop]: e.target.value },
    });
  }

  function sendBooking() {
    setFinishedBooking({
      ...updatedBooking,
      customer: {
        ...updatedBooking.customer,
        _id: currentBooking.customer._id,
        name:
          updatedBooking.customer.name === ""
            ? currentBooking.customer.name
            : updatedBooking.customer.name,
        email:
          updatedBooking.customer.email === ""
            ? currentBooking.customer.email
            : updatedBooking.customer.email,
        phonenumber:
          updatedBooking.customer.phonenumber === ""
            ? currentBooking.customer.phonenumber
            : updatedBooking.customer.phonenumber,
      },
      date: currentBooking.date,
      _id: currentBooking._id,
    });
  }

  function stopSubmit(e: FormEvent) {
    e.preventDefault();

    handleSubmit();
  }

  function handleSubmit() {
    sendBooking();
  }

  function changeTime(e: FormEvent) {
    e.preventDefault();

    if (updatedBooking.time === "") {
      if (currentBooking.time === timeSlot.EARLY) {
        setUpdatedBooking({ ...updatedBooking, time: timeSlot.LATE });
      } else {
        setUpdatedBooking({ ...updatedBooking, time: timeSlot.EARLY });
      }
    } else {
      if (updatedBooking.time === timeSlot.EARLY) {
        setUpdatedBooking({ ...updatedBooking, time: timeSlot.LATE });
      }
      if (updatedBooking.time === timeSlot.LATE) {
        setUpdatedBooking({ ...updatedBooking, time: timeSlot.EARLY });
      }
    }
  }
  return (
    <form className="admin-form">
      <button onClick={props.handleUpdateForm}>Close</button>
      <form onSubmit={stopSubmit}>
        <h2 className="font medium">Uppdatera bokning</h2>

        <div className="font-bold">
          Nuvaranade namn: {currentBooking.customer.name}
        </div>
        <article className="flex-row gap-small align-center">
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            value={updatedBooking.customer.name}
            name="name"
            onChange={handleCustomerChange}
          ></input>
        </article>

        <div className="spacing small" />

        <article>
          <div className="font-bold">
            Nuvarande email: {currentBooking.customer.email}
          </div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={updatedBooking.customer.email}
            name="email"
            onChange={handleCustomerChange}
          />
        </article>

        <div className="spacing small" />

        <div className="font-bold">
          Nuvarande nummer: {currentBooking.customer.phonenumber}
        </div>
        <article>
          <label htmlFor="phone">Telefonnummer:</label>
          <input
            type="text"
            value={updatedBooking.customer.phonenumber}
            name="phonenumber"
            onChange={handleCustomerChange}
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
              value={updatedBooking.guests}
              name="guests"
              onChange={handleChange}
            />
          </label>
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <div className="font-bold">
            Nuvarande sittning:
            {updatedBooking.time === ""
              ? currentBooking.time
              : updatedBooking.time}
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
