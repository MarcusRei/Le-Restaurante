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

enum timeSlot {
  EARLY = "18.00-21.00",
  LATE = "21.00-23.00",
}

export const BookingsCalendar = () => {
  const bookings = useContext(BookingsContext);

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [showTimeslots, setShowTimeslots] = useState<IShowTimeslots>({
    earlySlot: false,
    lateSlot: false,
  });
  const [bookedTables, setBookedTables] = useState({ early: 0, late: 0 });

  useEffect(() => {
    checkDate();
  }, [date]);

  function filterList(chosenDate: string) {
    // Filtrera bokningar på samma dag
    const filteredBookings = bookings.filter((booking) => {
      if (new Date(booking.date).toDateString() === chosenDate) {
        return booking;
      }
    });

    // Kollar om det finns lediga bord på första sittningen
    filteredBookings.map((booking) => {
      if (booking.time === timeSlot.EARLY) {
        console.log(Math.ceil(booking.guests / 6));
        setBookedTables({
          ...bookedTables,
          early: Math.ceil(booking.guests / 6),
        });
      }

      if (booking.time === timeSlot.LATE) {
        console.log(Math.ceil(booking.guests / 6));
        setBookedTables({
          ...bookedTables,
          late: Math.ceil(booking.guests / 6),
        });
      }
    });

    console.log("filter", filteredBookings);
  }
  console.log("bokade bord: ", bookedTables);

  function updateDate(nextValue: Date) {
    //console.log("update");
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
