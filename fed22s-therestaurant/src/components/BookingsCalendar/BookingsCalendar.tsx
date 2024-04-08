import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useContext, useState } from "react";
import { TimeSlots } from "../TimeSlots";
import { TimeSlot } from "../../enums/timeSlots";
import { IBookingAction } from "../../reducers/BookingReducer";
import { DateTime } from "luxon";
import {
  BookingContext,
  BookingDispatchContext,
} from "../../contexts/BookingContext";
import { getBookingsByDate } from "../../services/dataService";
import { Booking } from "../../models/Booking";

interface IBookingsCalendarProps {
  closeCalendar: Function;
  addTime: (Value: IBookingAction) => void;
  activeTables: number;
}

export const BookingsCalendar = (props: IBookingsCalendarProps) => {
  const dispatch = useContext(BookingDispatchContext);
  const booking = useContext(BookingContext);
  const [date, setDate] = useState(DateTime.local().toJSDate());
  const [earlySlot, setEarlySlot] = useState(false);
  const [lateSlot, setLateSlot] = useState(false);

  console.log(earlySlot, lateSlot);

  async function loadInBookings(date: string) {
    const response = await getBookingsByDate(date);
    checkAvailability(response);
    console.log(response);
  }

  function changeDate(date: Date) {
    const chosenDate = DateTime.fromJSDate(date).toString().split("T")[0];
    loadInBookings(chosenDate);
    setDate(date);

    console.log(date);
  }

  function checkAvailability(bookings: Booking[]) {
    let earlySitting = 0;
    let lateSitting = 0;
    console.log("bookings: ", bookings);

    for (let i = 0; i < bookings.length; i++) {
      const booking = bookings[i];
      if (booking.timeSlot === TimeSlot.EARLY) {
        earlySitting += booking.guests;
      } else {
        lateSitting += booking.guests;
      }
    }

    console.log("early:", earlySitting, "late:", lateSitting);

    console.log(earlySitting + booking.guests);

    if (earlySitting + booking.guests < 36) {
      setEarlySlot(true);
    } else {
      setEarlySlot(false);
    }

    if (lateSitting + booking.guests < 36) {
      setLateSlot(true);
    } else {
      setLateSlot(false);
    }
  }

  return (
    <div className="flex-column padding small">
      <div className="calendar-button-wrapper">
        <button
          className="secondary-button"
          onClick={() => props.closeCalendar()}
        >
          Stäng
        </button>
      </div>
      <div className="calendar-container">
        <Calendar
          value={date}
          onClickDay={(value) => changeDate(value)}
          minDate={DateTime.local().toJSDate()}
        ></Calendar>
        <div>Valt datum: {DateTime.fromJSDate(date).toISODate()}</div>
        <div className="spacing small" />
        <h2>Tillgängliga tider:</h2>
        <TimeSlots
          closeCalendar={() => props.closeCalendar()}
          earlySlot={earlySlot}
          lateSlot={lateSlot}
        ></TimeSlots>
      </div>
    </div>
  );
};
