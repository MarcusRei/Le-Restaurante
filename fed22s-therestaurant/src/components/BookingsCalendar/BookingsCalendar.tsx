import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useState } from "react";
import { TimeSlots } from "../TimeSlots";

// 1. Hämta alla bookings

// 2. Loopa igenom alla och jämför med

// 3. Visa alla tillgängliga tider i kalendern

// 4. registrera vald dag och gå tillbaka till formulär

export const BookingsCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  function updateDate(nextValue: Date) {
    setDate(nextValue);
  }

  function checkDate() {
    const chosenDate = date.toDateString();
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
