import { BookingsCalendar } from "./BookingsCalendar/BookingsCalendar";
import {
  Dispatch,
  DispatchWithoutAction,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Form } from "./Form";
import { CenteringWrapper } from "./styled/Wrappers";
import { BookingsContext } from "../contexts/BookingsContext";
import { BookingClass } from "../models/Booking";
import { getBookings } from "../services/dataService";
import { NewBookingContext } from "../contexts/NewBookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { BookingReducer, IAction } from "../reducers/BookingReducer";

export const Booking = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [bookings, setBookings] = useState<BookingClass[]>([]);
  const [booking, dispatch] = useReducer(BookingReducer, {
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  });

  /* useEffect(() => {
    console.log("din bokning: ", booking);
  }, [booking]); */

  // Context

  /* const [booking, setBooking] = useState<BookingClass>({
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  }); */

  useEffect(() => {
    getBookings().then((bookings: BookingClass[]) => setBookings(bookings));
  }, []);

  function openCalendar() {
    setCalendarOpen(true);
  }

  function closeCalendar() {
    setCalendarOpen(false);
  }

  return (
    <>
      <CenteringWrapper>
        <NewBookingContext.Provider value={booking}>
          <Form
            closeCalendar={closeCalendar}
            openCalendar={openCalendar}
          ></Form>
          <BookingsContext.Provider value={bookings}>
            <BookingDispatchContext.Provider value={dispatch}>
              {calendarOpen && (
                <BookingsCalendar
                  closeCalendar={closeCalendar}
                ></BookingsCalendar>
              )}
            </BookingDispatchContext.Provider>
          </BookingsContext.Provider>
        </NewBookingContext.Provider>
      </CenteringWrapper>
    </>
  );
};
