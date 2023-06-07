interface ITimeSlotsProps {
  showTime: boolean;
}

export const TimeSlots = (props: ITimeSlotsProps) => {
  /*  const openSlotsHTML = () */
  return (
    <>
      <div>
        {props.showTime ? (
          <div>
            <button>18:00</button>
            <button>21:00</button>
          </div>
        ) : (
          "Tyvärr finns inga lediga tider här"
        )}
      </div>
    </>
  );
};
