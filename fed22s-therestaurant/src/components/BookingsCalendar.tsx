import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useState } from "react";
import { TimeSlots } from "./TimeSlots";

// 1. Hämta alla bookings

// 2. Visa alla tillgängliga tider i kalendern

// 3. registrera vald dag och gå tillbaka till formulär

/* const disabledDates = [tomorrow, in3Days, in5Days];

function tileDisabled({ date, view }) {
  // Disable tiles in month view only
  if (view === "month") {
    // Check if a date React-Calendar wants to check is on the list of disabled dates
    return disabledDates.find((dDate) => isSameDay(dDate, date));
  }
} */

export const BookingsCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  function chooseDate(nextValue: any) {
    setDate(nextValue);
  }

  return (
    <>
      <div className="calendar-container">
        <Calendar
          value={date}
          onChange={chooseDate}
          onClickDay={() => setShowTime(true)}
        ></Calendar>
        <div>Valt datum: {date.toDateString()}</div>
        <TimeSlots showTime={showTime}></TimeSlots>
      </div>
    </>
  );
};
