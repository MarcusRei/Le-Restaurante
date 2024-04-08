import Calendar from "react-calendar";
import "./BookingsCalendar.css";
import { useContext, useEffect, useState } from "react";
import { TimeSlots } from "../TimeSlots";
import { TimeSlot } from "../../enums/timeSlots";
import { IBookingAction } from "../../reducers/BookingReducer";
import { DateTime } from "luxon";
import { BookingDispatchContext } from "../../contexts/BookingContext";
import { getBookings, getBookingsByDate } from "../../services/dataService";
import { Booking } from "../../models/Booking";

interface IShowTimeslots {
  earlySlot: boolean;
  lateSlot: boolean;
}

export interface ICombinedTables {
  early: number;
  late: number;
}

interface IBookingsCalendarProps {
  closeCalendar: Function;
  addTime: (Value: IBookingAction) => void;
  activeTables: number;
}

export const BookingsCalendar = (props: IBookingsCalendarProps) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const dispatch = useContext(BookingDispatchContext);
  const [date, setDate] = useState(DateTime.local().toJSDate());
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

  /* useEffect(() => {
    loadInBookings();
  }, []); */

  async function loadInBookings(date: string) {
    const response = await getBookingsByDate(date);

    setBookings(response);
    console.log(response);
  }

  combineCheck();

  function changeDate(date: Date) {
    const chosenDate = DateTime.fromJSDate(date).toString().split("T")[0];
    loadInBookings(chosenDate);
    setDate(date);

    console.log(date);

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
      if (booking.timeSlot === TimeSlot.EARLY) {
        earlySlotTables += Math.ceil(booking.guests / 6);
      }

      if (booking.timeSlot === TimeSlot.LATE) {
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
    }

    if (bookedTables.late + props.activeTables >= 15) {
      lateTables = false;
    }

    setShowTimeslots({
      earlySlot: earlyTables,
      lateSlot: lateTables,
    });
  }

  function combineCheck() {
    combinedTables = {
      late: bookedTables.late + props.activeTables,
      early: bookedTables.early + props.activeTables,
    };
  }

  return (
    <div className="flex-column padding small">
      <div className="calendar-button-wrapper">
        <button
          className="secondary-button"
          onClick={() => props.closeCalendar()}
        >
          Stäng
        </button>
      </div>
      <div className="calendar-container">
        <Calendar
          value={date}
          //@ts-ignore
          onClickDay={(value) => changeDate(value)}
          minDate={DateTime.local().toJSDate()}
        ></Calendar>
        <div>Valt datum: {DateTime.fromJSDate(date).toISODate()}</div>
        <div className="spacing small" />
        <h2>Tillgängliga tider:</h2>
        <TimeSlots
          closeCalendar={() => props.closeCalendar()}
          combinedTables={combinedTables}
        ></TimeSlots>
      </div>
    </div>
  );
};
