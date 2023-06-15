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
import { HorizontalWrapper } from "../styled/Wrappers";
import { Button } from "../styled/Buttons";
import { BookingCustomerExt } from "../../models/BookingCustomerExt";
import { DatePickerWrapper } from "../styled/DatePickerWrapper";

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
    BookingCustomerExt[]
  >(bookings.filteredList);
  const [timeslot, setTimeslot] = useState(false);

  /* function checkTimeSlot() {
    if (time === true) {
      setTimeslot(timeSlot.EARLY);
    } else {
      setTimeslot(timeSlot.LATE);
    }
  }

  checkTimeSlot(); */
  /* filterByTime(); */
  /* useEffect(() => {
    if (timeslot === true) {
      dispatch({
        type: ActionType.TIMEFILTER_BOOKINGS,
        payload: JSON.stringify(timeSlot.LATE),
      });
    } else {
      dispatch({
        type: ActionType.TIMEFILTER_BOOKINGS,
        payload: JSON.stringify(timeSlot.EARLY),
      });
    }
  }, [timeslot]);
 */
  console.log("timeSlot:", timeslot);

  function setTime() {
    /* if (timeslot === timeSlot.EARLY) {
      setTimeslot(timeSlot.LATE);
    } else {
      setTimeslot(timeSlot.EARLY);
    } */
    setTimeslot(!timeslot);
  }

  useEffect(() => {
    getBookings().then((bookings: BookingCustomerExt[]) => {
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
              </LowerTableWrapper>
            </TableviewWrapper>
            {/* <HorizontalWrapper>
              <Button onClick={setTime}>Early</Button>
            </HorizontalWrapper> */}
            <DatePickerWrapper>
              <DatePicker
                selected={new Date()}
                onChange={handleDateChange}
              />
            </DatePickerWrapper>
            <BookingsList />
          </AdminWrapper>
        </TimeSwitchContext.Provider>
      </TimeSwitchDispatchContext.Provider>
    </AdminContext.Provider>
  );
};
