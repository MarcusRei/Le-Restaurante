import { useRef } from "react";
import { Booking } from "../../models/Booking";
import { DateTime } from "luxon";
import { BookingsList } from "../BookingsList/BookingsList";

interface IBookingsViewProps {
  bookings: Booking[];
  showAllBookings: boolean;
  date: Date;
  openDialog: Function;
  updateBookings: Function;
}

export const BookingsView = (props: IBookingsViewProps) => {
  const dateRef = useRef<HTMLDialogElement>(null);
  return (
    <section className="admin-view">
      <article className="flex-row justify-center full-width">
        <h2>Admin</h2>
      </article>

      <div className="spacing small"></div>

      <div className="flex-row gap-small padding small">
        <h3 className="font large">Bokningar</h3>

        <div className="flex-resize" />
        <div className="flex-row align-center gap-small">
          <label htmlFor="date-picker">Datum:</label>
          <button className="admin-button" onClick={() => props.openDialog()}>
            {props.showAllBookings
              ? "visar alla bokningar"
              : DateTime.fromJSDate(props.date).toFormat("d MMM cccc")}
          </button>
        </div>
      </div>

      <div className="section-separator" />

      <BookingsList
        date={props.date}
        showAll={props.showAllBookings}
        bookings={props.bookings}
        updateBookings={() => props.updateBookings()}
      />

      <div className="spacing medium"></div>
    </section>
  );
};
