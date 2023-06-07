import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useContext, useEffect, useState } from "react";
import { TimeSlots } from "../TimeSlots";
import { BookingsContext } from "../../contexts/BookingsContext";
import { BookingClass } from "../../models/Booking";

export const BookingsCalendar = () => {
  const bookings = useContext(BookingsContext);

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  function updateDate(nextValue: Date) {
    setDate(nextValue);
  }

  function checkDate() {
    const chosenDate = date.toDateString();
    console.log(bookings);

    //const checkedDate = bookings.find((booking) => booking.date === chosenDate);

    const earlyTimeBookings = bookings.filter(
      (booking) => booking.time === "18.00-21.00"
    );
    console.log(earlyTimeBookings);

    const lateTimeBookings = bookings.filter(
      (booking) => booking.time === "21.00-23.00"
    );
    console.log(lateTimeBookings);

    /* if (checkedDate !== undefined) {
      checkedDate.time;
    } */

    //
    console.log(chosenDate);

    setShowTime(true);
  }

  return (
    <>
      <div className="calendar-container">
        <Calendar
          value={date}
          onChange={() => updateDate(date)}
          onClickDay={() => checkDate()}
        ></Calendar>
        <div>Valt datum: {date.toDateString()}</div>
        <h2>Tillgängliga tider:</h2>
        <TimeSlots showTime={showTime}></TimeSlots>
      </div>
    </>
  );
};
