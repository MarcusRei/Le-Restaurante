import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useContext, useEffect, useState } from "react";
import { TimeSlots } from "../TimeSlots";
import { BookingsContext } from "../../contexts/BookingsContext";
import { BookingClass } from "../../models/Booking";
import { Value } from "react-calendar/dist/cjs/shared/types";

interface IShowTimeslots {
  earlySlot: boolean;
  lateSlot: boolean;
}

export const BookingsCalendar = () => {
  const bookings = useContext(BookingsContext);

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [showTimeslots, setShowTimeslots] = useState<IShowTimeslots>({
    earlySlot: false,
    lateSlot: false,
  });

  useEffect(() => {
    checkDate();
  }, [date]);

  function filterList(chosenDate: string) {
    const filteredBookings = bookings.filter((booking) => {
      if (new Date(booking.date).toDateString() === chosenDate) {
        return booking;
      }
    });
    // Filtrera bokningar på samma dag
    console.log("filter", filteredBookings);
  }

  function updateDate(nextValue: Date) {
    console.log("update");
    setDate(nextValue);
  }

  function checkDate() {
    const chosenDate = date.toDateString();

    setShowTime(true);
    filterList(chosenDate);
  }

  return (
    <>
      <div className="calendar-container">
        <Calendar
          value={date}
          onChange={updateDate}
          onClickDay={checkDate}
        ></Calendar>
        <div>Valt datum: {date.toDateString()}</div>
        <h2>Tillgängliga tider:</h2>
        <TimeSlots showTime={showTime}></TimeSlots>
      </div>
    </>
  );
};
