import { TableSet } from "../TableSet";
import {
  AdminWrapper,
  UpperTableWrapper,
  TableviewWrapper,
  LowerTableWrapper,
} from "../styled/AdminWrappers";
import { BookingsList } from "../BookingsList";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Booking } from "../../models/Booking";
import { Customer } from "../../models/Customer";
import {
  getBookings,
  getCustomers,
} from "../../services/dataService";

export const Admin = () => {
  const [bookings, setBookings] = useState<(Booking | Customer)[]>(
    []
  );
  const [filteredBookings, setFilteredBookings] = useState<
    (Booking | Customer)[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingsData = await getBookings();

        console.log("Bokningar från API:", bookingsData);

        const bookingsWithCustomers = bookingsData.map(
          (booking: Booking) => {
            // Här kan du lägga till logiken för att hämta kunder om det behövs
            // eller göra andra manipulationer av datan

            return booking;
          }
        );

        console.log("Bokningar med kunder:", bookingsWithCustomers);
        setBookings(bookingsWithCustomers);
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
      <BookingsList bookings={bookings} />
    </AdminWrapper>
  );
};
