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
import { Booking } from "../../models/Booking";
import { getBookings } from "../../services/dataService";
import { AdminContext } from "../../contexts/AdminContext";
import {
  ActionType,
  AdminReducer,
} from "../../reducers/AdminReducer";

export const Admin = () => {
  const [bookings, dispatch] = useReducer(AdminReducer, []);

  const [selectedDate, setSelectedDate] = useState<string>("");
  //const [state, dispatch] = useReducer(AdminReducer, bookings);

  useEffect(() => {
    getBookings().then((bookings: Booking[]) => {
      console.log(bookings);

      dispatch({
        type: ActionType.ADDED_BOOKING,
        payload: JSON.stringify(bookings),
      });
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: ActionType.FILTER_BOOKINGS,
      payload: selectedDate,
    });
  }, [selectedDate]);

  const handleDateChange = (date: Date) => {
    const selectedDateISO = date?.toISOString().split("T")[0] ?? "";
    setSelectedDate(selectedDateISO);
  };

  return (
    <AdminContext.Provider value={{ bookings, dispatch }}>
      <AdminWrapper>
        <TableviewWrapper>
          <UpperTableWrapper>
            {bookings.length}
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
    </AdminContext.Provider>
  );
};
