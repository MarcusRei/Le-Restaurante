import { useContext, useState } from "react";
import { NewBookingContext } from "../contexts/NewBookingContext";
import { timeSlot } from "../enums/timeSlots";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { actionType } from "../enums/actionType";
import { ICombinedTables } from "./BookingsCalendar/BookingsCalendar";

interface ITimeSlotsProps {
  closeCalendar: () => void;
  combinedTables: ICombinedTables;
}

export const TimeSlots = (props: ITimeSlotsProps) => {
  const booking = useContext(NewBookingContext);
  const dispatch = useContext(BookingDispatchContext);
  const newBooking = useContext(NewBookingContext);
  const [combined, setCombined] = useState(props.combinedTables);

  function addTime(time: string) {
    dispatch({
      type: actionType.TIMEADDED,
      payload: { time: time },
    });
    console.log("tid tillagd i bokning");
    props.closeCalendar();
  }

  console.log("i timeslots", props.combinedTables);

  return (
    <>
      <div>
        {props.combinedTables.early <= 15 ? (
          <div>
            <button onClick={() => addTime(timeSlot.EARLY)}>18:00-21:00</button>
          </div>
        ) : null}
        {/* {combined.early > 15 && <h2>Inga lediga tider</h2>} */}
        {props.combinedTables.late <= 15 && (
          <div>
            <button onClick={() => addTime(timeSlot.LATE)}>21:00-23:00</button>
          </div>
        )}
        {props.combinedTables.late >= 15 && null}
      </div>
    </>
  );
};
