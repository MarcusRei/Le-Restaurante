import { useContext, useState } from "react";
import { TimeSlot } from "../enums/timeSlots";
import { BookingDispatchContext } from "../contexts/BookingContext";
import { actionType } from "../enums/actionType";
import { ICombinedTables } from "./BookingsCalendar/BookingsCalendar";

interface ITimeSlotsProps {
  closeCalendar: () => void;
  combinedTables: ICombinedTables;
}

export const TimeSlots = (props: ITimeSlotsProps) => {
  const dispatch = useContext(BookingDispatchContext);
  const [combined, setCombined] = useState(props.combinedTables);

  function addTime(time: TimeSlot) {
    dispatch({
      type: actionType.TIMEADDED,
      payload: { time: time },
    });
    props.closeCalendar();
  }

  return (
    <>
      {props.combinedTables.early <= 15 ? (
        <div>
          <button onClick={() => addTime(TimeSlot.EARLY)}>18:00-21:00</button>
        </div>
      ) : null}

      {props.combinedTables.late <= 15 ? (
        <div>
          <button onClick={() => addTime(TimeSlot.LATE)}>21:00-23:00</button>
        </div>
      ) : null}
    </>
  );
};
