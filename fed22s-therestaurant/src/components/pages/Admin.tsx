import { TableSet } from "../TableSet";
import {
  AdminWrapper,
  UpperTableWrapper,
  TableviewWrapper,
  LowerTableWrapper,
} from "../styled/AdminWrappers";
import { BookingsList } from "../BookingsList";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Booking } from "../../models/Booking";
import { getBookings } from "../../services/dataService";
import { AdminContext } from "../../contexts/AdminContext";
import { ActionType } from "../../reducers/AdminReducer";

export const Admin = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const { bookings, dispatch } = useContext(AdminContext);

  useEffect(() => {
    // Filtrera bokningar baserat på datum
    dispatch({
      type: ActionType.FILTER_BOOKINGS,
      payload: selectedDate,
    });
  }, [selectedDate, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingsData = await getBookings();

        console.log("Bokningar från API:", bookingsData);

        const bookingsWithCustomers = bookingsData.map(
          (booking: Booking) => {
            return booking;
          }
        );
      } catch (error) {
        console.error("Inga bokningar hittades", error);
      }
    };

    fetchData();
  }, []);

  const handleDateChange = (date: Date) => {
    const selectedDateISO = date?.toISOString().split("T")[0] ?? "";
    console.log("===> handleDataChange", date);

    setSelectedDate(selectedDateISO);
  };

  return (
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
  );
};
