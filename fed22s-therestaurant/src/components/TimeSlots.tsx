interface ITimeSlotsProps {
  showTimeSlots: {
    earlySlot: boolean;
    lateSlot: boolean;
  };
}

export const TimeSlots = (props: ITimeSlotsProps) => {
  return (
    <>
      <div>
        {props.showTimeSlots.earlySlot && (
          <div>
            <button>18:00</button>
          </div>
        )}
        {props.showTimeSlots.lateSlot && (
          <div>
            <button>21:00</button>
          </div>
        )}
      </div>
    </>
  );
};
