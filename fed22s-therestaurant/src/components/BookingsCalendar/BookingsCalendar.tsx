import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useContext, useEffect, useState } from "react";
import { TimeSlots } from "../TimeSlots";
import { BookingsContext } from "../../contexts/BookingsContext";
import { BookingClass } from "../../models/Booking";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { timeSlot } from "../../enums/timeSlots";
import { updateBooking } from "../../services/dataService";

interface IShowTimeslots {
  earlySlot: boolean;
  lateSlot: boolean;
}

interface IBookingsCalendarProps {
  closeCalendar: () => void;
}

export const BookingsCalendar = (props: IBookingsCalendarProps) => {
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

  function closeCalendar() {
    props.closeCalendar();
  }

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
      }

      // Kolla lediga platser på andra
      if (booking.time === timeSlot.LATE) {
        lateSlotTables = lateSlotTables + Math.ceil(booking.guests / 6);
      }

      setBookedTables({
        ...bookedTables,
        early: earlySlotTables,
        late: lateSlotTables,
      });
    });

    //console.log("filter", filteredBookings);
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
    setDate(nextValue);
  }

  function checkDate() {
    const chosenDate = date.toDateString();

    filterList(chosenDate);
  }

  return (
    <>
      <div className="calendar-container">
        <Calendar
          value={date}
          //@ts-ignore
          onChange={updateDate}
          onClickDay={checkDate}
        ></Calendar>
        <div>Valt datum: {date.toDateString()}</div>
        <h2>Tillgängliga tider:</h2>
        <TimeSlots
          closeCalendar={closeCalendar}
          showTimeSlots={showTimeslots}
        ></TimeSlots>
      </div>
    </>
  );
};
