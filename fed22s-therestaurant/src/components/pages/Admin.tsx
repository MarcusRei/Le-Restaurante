import { TableSet } from "../TableSet";
import {
  AdminWrapper,
  UpperTableWrapper,
  TableviewWrapper,
  LowerTableWrapper,
} from "../styled/AdminWrappers";
import axios from "axios";
import { BookingsList } from "../BookingsList";
import { useEffect, useState } from "react";
import AdminDatePicker from "../DatePicker";

export const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const getBookings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/v1/bookings"
        );
        const bookingsData = response.data;

        console.log("inuti fetch");

        setBookings(bookingsData);
      } catch (error) {
        console.error("Inga bokningar hittades", error);
      }
    };
    getBookings();
  }, []);

  const handleDateChange = (date: Date) => {
    const selectedDate = date?.toISOString().split("T")[0] ?? "";
    console.log("===>", date);

    //  setSelectedDate(selectedDate);
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
        </LowerTableWrapper>
      </TableviewWrapper>
      <BookingsList></BookingsList>
      <AdminDatePicker
        selected={new Date(selectedDate)}
        onChange={handleDateChange}
      />
    </AdminWrapper>
  );
};
