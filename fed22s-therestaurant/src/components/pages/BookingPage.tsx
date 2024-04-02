import { BookingsCalendar } from "../BookingsCalendar/BookingsCalendar";
import { ChangeEvent, useEffect, useReducer, useRef, useState } from "react";
import { getBookings } from "../../services/dataService";
import { BookingReducer, IBookingAction } from "../../reducers/BookingReducer";
import { Booking } from "../../models/Booking";

export const BookingPage = () => {
  const calendarRef = useRef<HTMLDialogElement>(null);
  const [bookingInfo, setBookingInfo] = useState<Booking>({} as Booking);
  const [policy, setPolicy] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [activeTables, setActiveTables] = useState(0);

  useEffect(() => {
    getBookings().then((bookings: Booking[]) => setBookings(bookings));
  }, []);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target;

    if (input.name === "guests") {
      setBookingInfo({
        ...bookingInfo,
        guests: Number(e.target.value),
      });
    } else {
      setBookingInfo({
        ...bookingInfo,
        [input.name]: input.value,
      });
    }
  }

  function closeCalendar() {
    setCalendarOpen(false);
  }

  function addTime(value: IBookingAction) {}

  function addDate(value: IBookingAction) {}

  return (
    <>
      <form className="flex-column align-center gap-small">
        <h1>Boka bord</h1>

        <div className="input-container">
          <article className="flex-column">
            <label className="font medium font-bold" htmlFor="name">
              Namn:
            </label>
            <input type="text" name="name" />
          </article>

          <div className="spacing small" />

          <article className="flex-column">
            <label className="font medium font-bold" htmlFor="email">
              Email:
            </label>
            <input type="text" name="email" onChange={(e) => handleInput(e)} />
          </article>

          <div className="spacing small" />

          <article className="flex-column">
            <label className="font medium font-bold" htmlFor="phone">
              Telefonnummer:
            </label>
            <input type="text" name="phone" />
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
                name="guests"
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
          </article>
        </div>

        <div className="spacing small" />

        <article className="flex-row justify-center align-center gap-small half-width">
          <input
            type="checkbox"
            name="guests"
            onChange={() => setPolicy(!policy)}
          />
          <div className="half-width font-bold">
            Jag bekräftar att jag har läst och godkänt Le Restaurante's
            <a href=""> integritetspolicy</a>
          </div>
        </article>

        <span className="spacing small" />

        <button disabled={!policy} className="secondary-button">
          Boka
        </button>
      </form>

      <dialog ref={calendarRef}>
        <BookingsCalendar
          addDate={addDate}
          addTime={addTime}
          closeCalendar={closeCalendar}
          activeTables={activeTables}
        ></BookingsCalendar>
      </dialog>
    </>
  );
};
