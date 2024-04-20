import { BookingsList } from "../BookingsList/BookingsList";
import { useReducer, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { AdminContext } from "../../contexts/AdminContext";
import { AdminReducer, ILists } from "../../reducers/AdminReducer";
import "./styles/Admin.css";
import { TableView } from "../TableView/TableView";
import Calendar from "react-calendar";
import { DateTime } from "luxon";

export const Admin = () => {
  const startValue: ILists = {
    allBookings: [],
    filteredList: [],
  };
  const [bookings, dispatch] = useReducer(AdminReducer, startValue);
  const [date, setDate] = useState(DateTime.local().toJSDate());
  const [showAllBookings, setShowAllBookings] = useState(false);
  const dateRef = useRef<HTMLDialogElement>(null);

  return (
    <AdminContext.Provider value={{ bookings, dispatch }}>
      <div className="flex-row">
        <TableView />
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
              <button
                className="admin-button"
                onClick={() => dateRef.current!.showModal()}
              >
                {showAllBookings
                  ? "visar alla bokningar"
                  : DateTime.fromJSDate(date).toFormat("d MMM cccc")}
              </button>
            </div>
          </div>

          <div className="section-separator" />

          <BookingsList date={date} showAll={showAllBookings} />

          <div className="spacing medium"></div>
        </section>
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
    </AdminContext.Provider>
  );
};
