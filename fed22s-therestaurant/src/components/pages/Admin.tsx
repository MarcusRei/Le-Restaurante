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

  useEffect(() => {
    // Applicera filtrering baserat på valt datum och tid
    const filtered = bookings.filter((booking) => {
      // filtreringslogik här
    });
    setFilteredBookings(filtered);
  }, [bookings, selectedDate, selectedTime]);
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
    </AdminWrapper>
  );
};
