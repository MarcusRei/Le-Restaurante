import { BookingsCalendar } from "../BookingsCalendar/BookingsCalendar";
import { useEffect, useReducer, useRef, useState } from "react";
import { BookingClass } from "../../models/BookingClass";
import { getBookings } from "../../services/dataService";
import { BookingReducer, IBookingAction } from "../../reducers/BookingReducer";

export const Booking = () => {
  const calendarRef = useRef<HTMLDialogElement>(null);
  const [policy, setPolicy] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [bookings, setBookings] = useState<BookingClass[]>([]);
  const [activeTables, setActiveTables] = useState(0);

  const [booking, dispatch] = useReducer(BookingReducer, {
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  });

  useEffect(() => {
    getBookings().then((bookings: BookingClass[]) => setBookings(bookings));
  }, []);

  function openCalendar() {
    setCalendarOpen(true);
  }

  function closeCalendar() {
    setCalendarOpen(false);
  }

  function addTime(value: IBookingAction) {
    dispatch(value);
  }

  function addDate(value: IBookingAction) {
    dispatch(value);
  }

  function updateActiveTables(value: number) {
    setActiveTables(value);
  }

  return (
    <>
      <form className="flex-column justify-center align-center gap-small">
        <h1>Boka bord</h1>

        <article className="flex-column">
          <label className="font small font-bold" htmlFor="name">
            Namn:
          </label>
          <input type="text" name="name" />
        </article>

        <article className="flex-column">
          <label className="font small font-bold" htmlFor="email">
            Email:
          </label>
          <input type="text" name="email" />
        </article>

        <article className="flex-column">
          <label className="font small font-bold" htmlFor="phone">
            Telefonnummer:
          </label>
          <input type="text" name="phone" />
        </article>

        <article className="flex-column position-relative">
          <label className="font small font-bold" htmlFor="guests">
            Antal i sällskap:
          </label>
          <div className="flex-row gap-small">
            <input type="number" min={1} name="guests" />
            <button
              className="secondary-button button-position position-absolute"
              onClick={(e) => {
                e.preventDefault();
                calendarRef.current?.showModal();
              }}
            >
              Välj tid
            </button>
          </div>
        </article>

        <article className="flex-row justify-center align-center gap-small half-width">
          <input
            type="checkbox"
            name="guests"
            onChange={() => setPolicy(!policy)}
          />
          <div className="half-width font-bold">
            Jag bekräftar att jag har läst och godkänt Le Restaurante's
            <a href="">integritetspolicy</a>
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
