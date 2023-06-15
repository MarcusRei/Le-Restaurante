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

export const Admin = () => {
  const startValue: ILists = {
    allBookings: [],
    filteredList: [],
  };

  const [bookings, dispatch] = useReducer(AdminReducer, startValue);
  //const dispatch = useContext(AdminContext, dispatch)
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [filteredBookings, setFilteredBookings] = useState<
    BookingClass[]
  >(bookings.filteredList);

  useEffect(() => {
    getBookings().then((bookings: BookingClass[]) => {
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
            {bookings.filteredList.length}
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
