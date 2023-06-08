import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useContext, useEffect, useState } from "react";
import { TimeSlots } from "../TimeSlots";
import { BookingsContext } from "../../contexts/BookingsContext";
import { BookingClass } from "../../models/Booking";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { timeSlot } from "../../enums/timeSlots";

interface IShowTimeslots {
  earlySlot: boolean;
  lateSlot: boolean;
}

export const BookingsCalendar = () => {
  const bookings = useContext(BookingsContext);

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [showTimeslots, setShowTimeslots] = useState<IShowTimeslots>({
    earlySlot: true,
    lateSlot: true,
  });
  const [bookedTables, setBookedTables] = useState({ early: 0, late: 0 });

  let lateSlotTables = 0;
  let earlySlotTables = 0;

  useEffect(() => {
    checkDate();
    console.log(bookedTables);
  }, [date]);

  useEffect(() => {
    checkAvailableTables();
  }, [bookedTables]);

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
        earlySlotTables = earlySlotTables + Math.ceil(booking.guests / 6);
        /* setBookedTables({
          ...bookedTables,
          early: bookedTables.early + Math.ceil(booking.guests / 6),
        }); */
      }
      console.log("antal bord: ", earlySlotTables);

      // Kolla andra
      if (booking.time === timeSlot.LATE) {
        lateSlotTables = lateSlotTables + Math.ceil(booking.guests / 6);
        /* setBookedTables({
          ...bookedTables,
          late: bookedTables.late + Math.ceil(booking.guests / 6),
        }); */
      }
      console.log("antal bord på sena: ", lateSlotTables);

      setBookedTables({
        ...bookedTables,
        early: earlySlotTables,
        late: lateSlotTables,
      });
    });

    console.log("filter", filteredBookings);
  }

  function checkAvailableTables() {
    console.log("bokade bord: ", bookedTables);
    // Kolla om första sittningen har bord kvar
    if (bookedTables.early >= 15) {
      setShowTimeslots({ ...showTimeslots, earlySlot: false });
    }

    // Kolla om andra sittningen har bord kvar
    if (bookedTables.late >= 15) {
      setShowTimeslots({ ...showTimeslots, lateSlot: false });
    }
  }

  function updateDate(nextValue: Date) {
    //console.log("update");
    setDate(nextValue);
  }

  function checkDate() {
    const chosenDate = date.toDateString();

    //setShowTime(true);
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
        <TimeSlots showTimeSlots={showTimeslots}></TimeSlots>
      </div>
    </>
  );
};