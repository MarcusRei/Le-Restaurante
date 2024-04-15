import { BookingsList } from "../BookingsList/BookingsList";
import { useEffect, useReducer, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getBookings } from "../../services/dataService";
import { AdminContext } from "../../contexts/AdminContext";
import { ActionType, AdminReducer, ILists } from "../../reducers/AdminReducer";
import { TimeSwitchContext } from "../../contexts/TimeSwitchContext";
import { TimeSwitchReducer } from "../../reducers/TimeSwitchReducer";
import { TimeSwitchDispatchContext } from "../../contexts/TimeSwitchDispatchContext";
import "./styles/Admin.css";
import { Booking } from "../../models/Booking";
import { TableView } from "../TableView/TableView";

export const Admin = () => {
  const startValue: ILists = {
    allBookings: [],
    filteredList: [],
  };
  const [time, TimeSwitchDispatch] = useReducer(TimeSwitchReducer, false);
  const [bookings, dispatch] = useReducer(AdminReducer, startValue);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>(
    bookings.filteredList
  );
  const [timeslot, setTimeslot] = useState(false);

  console.log("selected date:", selectedDate);

  console.log("timeSlot:", timeslot);

  useEffect(() => {
    getBookings().then((bookings: Booking[]) => {
      dispatch({
        type: ActionType.ADDED_BOOKING,
        payload: JSON.stringify(bookings),
      });
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: ActionType.DATEFILTER_BOOKINGS,
      payload: selectedDate,
    });
  }, [selectedDate]);

  const setDate = (date: Date) => {
    const selectedDateISO = date?.toISOString().split("T")[0] ?? "";
    setSelectedDate(selectedDateISO);
  };

  return (
    <AdminContext.Provider value={{ bookings, dispatch }}>
      <TimeSwitchDispatchContext.Provider value={TimeSwitchDispatch}>
        <TimeSwitchContext.Provider value={time}>
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
                  <DatePicker selected={new Date()} onChange={setDate} />
                </div>
              </div>

              <div className="section-separator" />

              <BookingsList />

              <div className="spacing medium"></div>
            </section>
          </div>
        </TimeSwitchContext.Provider>
      </TimeSwitchDispatchContext.Provider>
    </AdminContext.Provider>
  );
};
