import { TableSet } from "../TableSet";
import {
  AdminWrapper,
  UpperTableWrapper,
  TableviewWrapper,
  LowerTableWrapper,
} from "../styled/AdminWrappers";
import { BookingsList } from "../BookingsList";
import { useContext, useEffect, useReducer, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BookingClass } from "../../models/BookingClass";
import { getBookings } from "../../services/dataService";
import { AdminContext } from "../../contexts/AdminContext";
import {
  ActionType,
  AdminReducer,
  ILists,
} from "../../reducers/AdminReducer";
import { TimeSwitchContext } from "../../contexts/TimeSwitchContext";
import { timeSlot } from "../../enums/timeSlots";
import { TimeSwitchReducer } from "../../reducers/TimeSwitchReducer";
import { TimeSwitchDispatchContext } from "../../contexts/TimeSwitchDispatchContext";

export const Admin = () => {
  const startValue: ILists = {
    allBookings: [],
    filteredList: [],
  };

  //const handleTime = useContext(TimeSwitchContext);
  const [time, TimeSwitchDispatch] = useReducer(
    TimeSwitchReducer,
    false
  );

  const [bookings, dispatch] = useReducer(AdminReducer, startValue);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [filteredBookings, setFilteredBookings] = useState<
    BookingClass[]
  >(bookings.filteredList);
  const [timeslot, setTimeslot] = useState(timeSlot.EARLY);

  function checkTimeSlot() {
    if (time === true) {
      setTimeslot(timeSlot.EARLY);
    } else {
      setTimeslot(timeSlot.LATE);
    }
  }

  checkTimeSlot();
  filterByTime();

  function filterByTime() {
    dispatch({
      type: ActionType.TIMEFILTER_BOOKINGS,
      payload: JSON.stringify({
        list: bookings.filteredList,
        timeSlot: timeslot,
      }),
    });
  }

  useEffect(() => {
    getBookings().then((bookings: BookingClass[]) => {
      //console.log(bookings);

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

  const handleDateChange = (date: Date) => {
    const selectedDateISO = date?.toISOString().split("T")[0] ?? "";
    setSelectedDate(selectedDateISO);
  };

  return (
    <AdminContext.Provider value={{ bookings, dispatch }}>
      <TimeSwitchDispatchContext.Provider value={TimeSwitchDispatch}>
        <TimeSwitchContext.Provider value={time}>
          <AdminWrapper>
            <TableviewWrapper>
              <UpperTableWrapper>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
              </UpperTableWrapper>
              <LowerTableWrapper>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <TableSet></TableSet>
                <DatePicker
                  selected={new Date()}
                  onChange={handleDateChange}
                />
              </LowerTableWrapper>
            </TableviewWrapper>

            <BookingsList />
          </AdminWrapper>
        </TimeSwitchContext.Provider>
      </TimeSwitchDispatchContext.Provider>
    </AdminContext.Provider>
  );
};
