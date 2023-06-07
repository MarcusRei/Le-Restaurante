import { BookingsCalendar } from "./BookingsCalendar/BookingsCalendar";
import { useEffect, useState } from "react";
import { Form } from "./Form";
import { CenteringWrapper } from "./styled/Wrappers";
import { BookingsContext } from "../contexts/BookingsContext";
import { BookingClass } from "../models/Booking";
import { getBookings } from "../services/dataService";

export const Booking = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [bookings, setBookings] = useState<BookingClass[]>([]);

  useEffect(() => {
    getBookings().then((bookings: BookingClass[]) => setBookings(bookings));
  }, []);

  const switchCalendar = () => {
    setCalendarOpen(true);
  };
  return (
    <>
      <CenteringWrapper>
        <Form switchCalendar={switchCalendar}></Form>
        <BookingsContext.Provider value={bookings}>
          {calendarOpen && <BookingsCalendar></BookingsCalendar>}
        </BookingsContext.Provider>
      </CenteringWrapper>
    </>
  );
};
