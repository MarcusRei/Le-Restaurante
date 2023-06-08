import { timeSlot } from "../enums/timeSlots";

interface ITimeSlotsProps {
  showTimeSlots: {
    earlySlot: boolean;
    lateSlot: boolean;
  };
}

export const TimeSlots = (props: ITimeSlotsProps) => {
  function addTime(time: string) {
    console.log(time);
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
