import { useContext } from "react";
import { NewBookingContext } from "../contexts/NewBookingContext";
import { timeSlot } from "../enums/timeSlots";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { actionType } from "../enums/actionType";
import { BookingClass } from "../models/Booking";
import { updateBooking } from "../services/dataService";
import { ICombinedTables } from "./BookingsCalendar/BookingsCalendar";

interface ITimeSlotsProps {
  showTimeSlots: {
    earlySlot: boolean;
    lateSlot: boolean;
  };
  closeCalendar: () => void;
  combinedTables: ICombinedTables;
}

export const TimeSlots = (props: ITimeSlotsProps) => {
  const booking = useContext(NewBookingContext);
  const dispatch = useContext(BookingDispatchContext);
  const newBooking = useContext(NewBookingContext);

  function addTime(time: string) {
    dispatch({
      type: actionType.TIMEADDED,
      payload: { time: time },
    });
    console.log("tid tillagd i bokning");
    props.closeCalendar();
  }

  return (
    <>
      <div>
        {props.combinedTables.early < 15 ? (
          <div>
            <button onClick={() => addTime(timeSlot.EARLY)}>18:00-21:00</button>
          </div>
        ) : null}
        {props.combinedTables.late < 15 ? (
          <div>
            <button onClick={() => addTime(timeSlot.LATE)}>21:00-23:00</button>
          </div>
        ) : null}
      </div>
    </>
  );
};
