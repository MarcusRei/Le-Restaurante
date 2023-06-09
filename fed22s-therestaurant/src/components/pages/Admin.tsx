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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Admin = () => {
  const [bookings, setBookings] = useState<[]>([]);
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

        console.log("inuti fetch", bookingsData);

        setBookings(bookingsData);
      } catch (error) {
        console.error("Inga bokningar hittades", error);
      }
    };
    getBookings();
  }, []);

  useEffect(() => {
    console.log("===> STATE", selectedDate);
  }, [selectedDate]);

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
      <BookingsList bookings={bookings}></BookingsList>
    </AdminWrapper>
  );
};
