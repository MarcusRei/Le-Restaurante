import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useContext, useState } from "react";
import { TimeSlots } from "../TimeSlots";
import { BookingsContext } from "../../contexts/BookingsContext";
import { timeSlot } from "../../enums/timeSlots";
import { NewBookingContext } from "../../contexts/NewBookingContext";
import { IBookingAction } from "../../reducers/BookingReducer";
import { actionType } from "../../enums/actionType";
import { DateTime } from "luxon";

interface IShowTimeslots {
  earlySlot: boolean;
  lateSlot: boolean;
}

export interface ICombinedTables {
  early: number;
  late: number;
}

interface IBookingsCalendarProps {
  closeCalendar: () => void;
  addDate: (Value: IBookingAction) => void;
  activeTables: number;
  addTime: (Value: IBookingAction) => void;
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
  const [bookedTables, setBookedTables] = useState({
    early: 0,
    late: 0,
  });

  let lateSlotTables = 0;
  let earlySlotTables = 0;

  let combinedTables: ICombinedTables = {
    late: 0,
    early: 0,
  };

  console.log("bokade bord: ", bookedTables);
  combineCheck();

  function updateDate(nextValue: Date) {
    setDate(nextValue);
  }

  function checkDate(date: Date) {
    const chosenDate = DateTime.fromJSDate(date).toString().split("T")[0];
    console.log("chosenDate", chosenDate);

    props.addDate({
      type: actionType.DATEADDED,
      payload: chosenDate,
    });

    filterList(chosenDate);
  }

  function filterList(chosenDate: String) {
    const filteredBookings = bookings.filter((booking) => {
      if (chosenDate === booking.date) {
        return booking;
      }
    });

    if (filteredBookings.length === 0) {
      setBookedTables({ early: 0, late: 0 });
    }

    filteredBookings.map((booking) => {
      if (booking.time === timeSlot.EARLY) {
        earlySlotTables += Math.ceil(booking.guests / 6);
      }

      if (booking.time === timeSlot.LATE) {
        lateSlotTables += Math.ceil(booking.guests / 6);
      }

      setBookedTables({
        early: earlySlotTables,
        late: lateSlotTables,
      });
      checkAvailableTables();
    });
  }

  function checkAvailableTables() {
    let earlyTables = true;
    let lateTables = true;

    if (bookedTables.early + props.activeTables >= 15) {
      earlyTables = false;

      console.log("Det finns inte tillräckligt med bord på den tidiga!");
    } else {
      console.log("det finns bord på den tidiga!");
    }

    if (bookedTables.late + props.activeTables >= 15) {
      lateTables = false;

      console.log("Det finns inte tillräckligt med bord på den sena!");
    } else {
      console.log("det finns bord på den sena!");
    }

    setShowTimeslots({
      earlySlot: earlyTables,
      lateSlot: lateTables,
    });
  }

  function closeCalendar() {
    props.closeCalendar();
  }

  function combineCheck() {
    combinedTables = {
      late: bookedTables.late + props.activeTables,
      early: bookedTables.early + props.activeTables,
    };
    console.log("combined", combinedTables);
  }

  return (
    <div className="padding small">
      <div className="calendar-button-wrapper">
        <button className="secondary-button">Stäng</button>
      </div>
      <div className="calendar-container">
        <Calendar
          value={date}
          //@ts-ignore
          onChange={updateDate}
          onClickDay={checkDate}
          minDate={new Date()}
        ></Calendar>
        <div>Valt datum: {date.toISOString().split("T")[0]}</div>
        <h2>Tillgängliga tider:</h2>
        <TimeSlots
          closeCalendar={closeCalendar}
          combinedTables={combinedTables}
        ></TimeSlots>
      </div>
    </div>
  );
};
