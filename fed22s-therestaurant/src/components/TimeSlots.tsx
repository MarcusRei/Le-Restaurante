interface ITimeSlotsProps {
  showTime: boolean;
}

export const TimeSlots = (props: ITimeSlotsProps) => {
  return (
    <>
      <div>
        {props.showTime
          ? "18:00 och 21:00"
          : "Tyvärr finns inga lediga tider här"}
      </div>
    </>
  );
};
