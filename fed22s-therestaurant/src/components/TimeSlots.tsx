import { useContext, useState } from "react";
import { TimeSlot } from "../enums/timeSlots";
import { BookingDispatchContext } from "../contexts/BookingContext";
import { actionType } from "../enums/actionType";
import { ActionType } from "../reducers/BookingReducer";

interface ITimeSlotsProps {
  closeCalendar: () => void;
  earlySlot: boolean;
  lateSlot: boolean;
}

export const TimeSlots = (props: ITimeSlotsProps) => {
  const dispatch = useContext(BookingDispatchContext);

  function addTime(time: TimeSlot) {
    dispatch({
      type: ActionType.TIMESLOT,
      payload: { time: time },
    });
    props.closeCalendar();
  }

  return (
    <div className="flex-row gap-small padding small">
      {props.earlySlot ? (
        <div>
          <button
            className="secondary-button"
            onClick={() => addTime(TimeSlot.EARLY)}
          >
            18:00-21:00
          </button>
        </div>
      ) : null}

      {props.lateSlot ? (
        <div>
          <button
            className="secondary-button"
            onClick={() => addTime(TimeSlot.LATE)}
          >
            21:00-23:00
          </button>
        </div>
      ) : null}
    </div>
  );
};
