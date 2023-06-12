import { BookingsCalendar } from "../BookingsCalendar/BookingsCalendar";
import {
  Dispatch,
  DispatchWithoutAction,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Form } from "../Form";
import { CenteringWrapper } from "../styled/Wrappers";
import { BookingsContext } from "../../contexts/BookingsContext";
import { BookingClass } from "../../models/Booking";
import { getBookings } from "../../services/dataService";
import { NewBookingContext } from "../../contexts/NewBookingContext";
import { BookingDispatchContext } from "../../contexts/BookingDispatchContext";
import { BookingReducer, IBookingAction } from "../../reducers/BookingReducer";
import { actionType } from "../../enums/actionType";

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

  const [guestCount, setGuestCount] = useState(0);

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

  function addTime(value: IBookingAction) {
    dispatch(value);
  }

  function addDate(value: IBookingAction) {
    dispatch(value);
  }

  function updateGuestCount(value: number) {
    setGuestCount(value);
  }

  return (
    <>
      <CenteringWrapper>
        <NewBookingContext.Provider value={booking}>
          <BookingsContext.Provider value={bookings}>
            <Form
              addTime={addTime}
              closeCalendar={closeCalendar}
              openCalendar={openCalendar}
              updateGuestCount={updateGuestCount}
            ></Form>

            <BookingDispatchContext.Provider value={dispatch}>
              {calendarOpen && (
                <BookingsCalendar
                  addDate={addDate}
                  closeCalendar={closeCalendar}
                  guestCount={guestCount}
                ></BookingsCalendar>
              )}
            </BookingDispatchContext.Provider>
          </BookingsContext.Provider>
        </NewBookingContext.Provider>
      </CenteringWrapper>
    </>
  );
};
