import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useContext, useEffect, useState } from "react";
import { TimeSlots } from "../TimeSlots";
import { BookingsContext } from "../../contexts/BookingsContext";
import { BookingClass } from "../../models/Booking";

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

  function updateDate(nextValue: Date) {
    setDate(nextValue);
  }

  function checkDate() {
    const chosenDate = date.toDateString();
    //console.log(chosenDate);

    // Filtrera bokningar på samma dag
    const filteredBookings = bookings.filter(
      //(booking) => booking.date.toDateString() === chosenDate
      (booking) => console.log(booking.date)
    );
    console.log("filter", filteredBookings);

    /* const earlyTimeBookings = bookings.filter(
      (booking) => booking.time === "18.00-21.00"
    );
    console.log(earlyTimeBookings); */

    /* if(earlyTimeBookings.length >)
     */

    /* const lateTimeBookings = bookings.filter(
      (booking) => booking.time === "21.00-23.00"
    );
    console.log(lateTimeBookings); */

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
