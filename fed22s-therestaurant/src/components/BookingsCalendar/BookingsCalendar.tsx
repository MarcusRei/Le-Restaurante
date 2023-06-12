import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useContext, useEffect, useState } from "react";
import { TimeSlots } from "../TimeSlots";
import { BookingsContext } from "../../contexts/BookingsContext";
import { BookingClass } from "../../models/Booking";
import { timeSlot } from "../../enums/timeSlots";
import { NewBookingContext } from "../../contexts/NewBookingContext";
import { IAction } from "../../reducers/BookingReducer";
import { actionType } from "../../enums/actionType";
import { DateTime } from "luxon";

interface IShowTimeslots {
  earlySlot: boolean;
  lateSlot: boolean;
}

interface IBookingsCalendarProps {
  closeCalendar: () => void;
  addDate: (Value: IAction) => void;
}

export const BookingsCalendar = (props: IBookingsCalendarProps) => {
  const bookings = useContext(BookingsContext);
  const booking = useContext(NewBookingContext);

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [showTimeslots, setShowTimeslots] = useState<IShowTimeslots>({
    earlySlot: true,
    lateSlot: true,
  });
  const [bookedTables, setBookedTables] = useState({ early: 0, late: 0 });

  let lateSlotTables = 0;
  let earlySlotTables = 0;

  // Om det valda datumet ändras
  useEffect(() => {
    checkDate();
    // setBookedTables({ early: 0, late: 0 });
    console.log(bookedTables);
  }, [date]);

  // Om bookedTables ändras
  useEffect(() => {
    checkAvailableTables();
  }, [bookedTables]);

  function updateDate(nextValue: Date) {
    setDate(nextValue);
  }

  function checkDate() {
    const chosenDate = DateTime.fromJSDate(date).toString().split("T")[0];

    props.addDate({ type: actionType.DATEADDED, payload: chosenDate });
    filterList(chosenDate);
  }

  function filterList(chosenDate: String) {
    // Filtrera bokningar på samma dag
    const filteredBookings = bookings.filter((booking) => {
      console.log(booking.date);
      if (chosenDate === booking.date) {
        return booking;
      }
    });

    if (filteredBookings.length === 0) {
      setBookedTables({ early: 0, late: 0 });
    }

    // Kollar lediga bord på första sittningen
    filteredBookings.map((booking) => {
      if (booking.time === timeSlot.EARLY) {
        earlySlotTables = earlySlotTables + Math.ceil(booking.guests / 6);
      }

      // Kolla lediga bord på andra sittningen
      if (booking.time === timeSlot.LATE) {
        lateSlotTables = lateSlotTables + Math.ceil(booking.guests / 6);
      }

      setBookedTables({
        early: earlySlotTables,
        late: lateSlotTables,
      });
    });
  }

  function checkAvailableTables() {
    // Kolla om första sittningen har bord kvar
    if (bookedTables.early >= 15) {
      setShowTimeslots({ ...showTimeslots, earlySlot: false });
    }

    if (bookedTables.early < 15) {
      setShowTimeslots({ ...showTimeslots, earlySlot: true });
    }

    // Kolla om andra sittningen har bord kvar
    if (bookedTables.late >= 15) {
      setShowTimeslots({ ...showTimeslots, lateSlot: false });
    }

    if (bookedTables.late < 15) {
      setShowTimeslots({ ...showTimeslots, lateSlot: true });
    }
  }

  function closeCalendar() {
    props.closeCalendar();
  }

  return (
    <>
      <div className="calendar-container">
        <Calendar
          value={date}
          //@ts-ignore
          onChange={updateDate}
          onClickDay={checkDate}
          minDate={new Date()}
        ></Calendar>
        <div>Valt datum: {date.toISOString().split("T")[0] ?? ""}</div>
        <h2>Tillgängliga tider:</h2>
        <TimeSlots
          closeCalendar={closeCalendar}
          showTimeSlots={showTimeslots}
        ></TimeSlots>
      </div>
    </>
  );
};
