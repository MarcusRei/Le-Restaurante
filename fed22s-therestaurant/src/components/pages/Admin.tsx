import { useEffect, useRef, useState } from "react";
import "./styles/Admin.css";
import { TableView } from "../TableView/TableView";
import Calendar from "react-calendar";
import { DateTime } from "luxon";
import { BookingsView } from "../BookingsView/BookingsView";
import { getBookings, getBookingsByDate } from "../../services/dataService";
import { Booking } from "../../models/Booking";

export const Admin = () => {
  const [date, setDate] = useState(DateTime.local().toJSDate());
  const [showAllBookings, setShowAllBookings] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const dateRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    updateBookings();
  }, [date, showAllBookings]);
  console.log(bookings);

  async function updateBookings() {
    if (showAllBookings) {
      setBookings(await getBookings());
    } else {
      setBookings(
        await getBookingsByDate(
          DateTime.fromJSDate(date).toFormat("yyyy-MM-dd")
        )
      );
    }
  }

  return (
    <div className="flex-row">
      <TableView bookings={bookings} />
      <BookingsView
        bookings={bookings}
        showAllBookings={showAllBookings}
        date={date}
        openDialog={() => dateRef.current!.showModal()}
      />

      <dialog ref={dateRef}>
        <div className="flex-column gap-small padding small">
          <div className="flex-row gap-small">
            <button
              className="admin-button danger"
              onClick={() => dateRef.current!.close()}
            >
              Close
            </button>
            <button
              className="admin-button"
              onClick={() => {
                setShowAllBookings(true);
                dateRef.current!.close();
              }}
            >
              Visa alla bokningar
            </button>
          </div>
          <Calendar
            value={date}
            onClickDay={(value) => {
              setShowAllBookings(false);
              setDate(value);
              dateRef.current!.close();
            }}
          />
        </div>
      </dialog>
    </div>
  );
};
