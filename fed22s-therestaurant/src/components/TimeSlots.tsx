import { useContext } from "react";
import { NewBookingContext } from "../contexts/NewBookingContext";
import { timeSlot } from "../enums/timeSlots";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { actionType } from "../enums/actionType";
import { BookingClass } from "../models/Booking";
import { updateBooking } from "../services/dataService";

interface ITimeSlotsProps {
  showTimeSlots: {
    earlySlot: boolean;
    lateSlot: boolean;
  };
  closeCalendar: () => void;
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
    console.log("bokning: ", booking);
    props.closeCalendar();
  }

  return (
    <>
      <div>
        {props.showTimeSlots.earlySlot && (
          <div>
            <button onClick={() => addTime(timeSlot.EARLY)}>18:00</button>
          </div>
        )}
        {props.showTimeSlots.lateSlot && (
          <div>
            <button onClick={() => addTime(timeSlot.LATE)}>21:00</button>
          </div>
        )}
      </div>
    </>
  );
};
