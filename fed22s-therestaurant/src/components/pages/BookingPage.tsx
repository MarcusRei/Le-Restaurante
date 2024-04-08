import { BookingsCalendar } from "../BookingsCalendar/BookingsCalendar";
import { useContext, useEffect, useRef, useState } from "react";
import {
  BookingContext,
  BookingDispatchContext,
} from "../../contexts/BookingContext";
import { ActionType } from "../../reducers/BookingReducer";
import "./styles/BookingPage.css";
import { postNewBooking } from "../../services/dataService";
import { useNavigate } from "react-router-dom";

export const BookingPage = () => {
  const calendarRef = useRef<HTMLDialogElement>(null);
  const [policy, setPolicy] = useState(false);
  const [activeTables, setActiveTables] = useState(0);
  const booking = useContext(BookingContext);
  const dispatch = useContext(BookingDispatchContext);
  let navigate = useNavigate();

  console.log(booking);

  function closeCalendar() {
    calendarRef.current?.close();
  }

  async function publishBooking() {
    if (
      booking.name === "" ||
      booking.email === "" ||
      booking.phonenumber === "" ||
      booking.date === "" ||
      booking.timeSlot === null
    ) {
      alert("Du måste fylla i alla fält för att kunna lägga en bokning!");
    }

    console.log("booking i BookingPage", booking);

    const response = await postNewBooking(booking);

    if (response) {
      alert("Bokningen har skapats!");
      navigate("/");
    }
  }

  return (
    <>
      <form className="flex-column align-center gap-small">
        <h1>Boka bord</h1>

        <div className="input-container">
          <article className="flex-column">
            <label className="font medium font-bold" htmlFor="name">
              Namn:
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => {
                dispatch({
                  type: ActionType.NAME,
                  payload: { name: e.target.value },
                });
              }}
            />
          </article>

          <div className="spacing small" />

          <article className="flex-column">
            <label className="font medium font-bold" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              name="email"
              required
              onChange={(e) => {
                dispatch({
                  type: ActionType.EMAIL,
                  payload: { email: e.target.value },
                });
              }}
            />
          </article>

          <div className="spacing small" />

          <article className="flex-column">
            <label className="font medium font-bold" htmlFor="phone">
              Telefonnummer:
            </label>
            <input
              type="text"
              name="phone"
              required
              onChange={(e) => {
                dispatch({
                  type: ActionType.PHONE,
                  payload: { phonenumber: e.target.value },
                });
              }}
            />
          </article>

          <div className="spacing small" />

          <article className="flex-column position-relative">
            <label className="font medium font-bold" htmlFor="guests">
              Antal i sällskap:
            </label>
            <div className="flex-row align-center gap-small">
              <input
                className="guest-input"
                type="number"
                defaultValue={2}
                min={1}
                max={36}
                name="guests"
                onChange={(e) => {
                  dispatch({
                    type: ActionType.GUESTS,
                    payload: { guests: Number(e.target.value) },
                  });
                }}
              />
              <button
                className="secondary-button button-position"
                onClick={(e) => {
                  e.preventDefault();
                  calendarRef.current?.showModal();
                }}
              >
                Välj tid
              </button>
            </div>
            <div className="spacing small" />
            <div className="font-bold">
              {booking.timeSlot !== null
                ? "Vald sittning: " + booking.timeSlot
                : null}
            </div>
          </article>
        </div>

        <div className="spacing small" />

        <article className="flex-row justify-center align-center gap-small half-width">
          <input
            type="checkbox"
            name="policy"
            onChange={() => setPolicy(!policy)}
          />
          <div className="half-width font-bold">
            Jag bekräftar att jag har läst och godkänt Le Restaurante's
            <a href=""> integritetspolicy</a>
          </div>
        </article>

        <span className="spacing small" />

        <button
          disabled={!policy}
          className="secondary-button"
          onClick={(e) => {
            e.preventDefault();
            publishBooking();
          }}
        >
          Boka
        </button>
      </form>

      <dialog ref={calendarRef}>
        <BookingsCalendar
          closeCalendar={() => closeCalendar()}
        ></BookingsCalendar>
      </dialog>
    </>
  );
};
