import { Booking } from "../../../models/Booking";
import "./FourSeats.css";

interface IFourSeatsProps {
  booking: Booking;
  tableId: string;
}

export const FourSeats = (props: IFourSeatsProps) => {
  return (
    <div className="four-seats flex-row align-center justify-center position-relative">
      <section className="four-seats-text-container flex-column justify-center align-center position-absolute">
        <div
          className={`font-bold ${
            props.booking.name === "empty" ? "empty" : null
          }`}
        >
          {props.tableId}
        </div>
        <div
          className={`font-bold ${
            props.booking.name === "empty" ? "empty" : null
          }`}
        >
          {props.booking.name}
        </div>
        <div className="font-bold">
          {props.booking.guests > 0 ? props.booking.guests : null}
        </div>
      </section>
      <svg
        width="192"
        height="192"
        viewBox="0 0 192 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="46.5"
          y="46.5"
          width="99"
          height="99"
          rx="49.5"
          fill="#D9D9D9"
        />
        <rect
          x="46.5"
          y="46.5"
          width="99"
          height="99"
          rx="49.5"
          stroke="#6C6C6C"
        />
        <path
          d="M120.5 25V39.5H71.5V25C71.5 11.469 82.469 0.5 96 0.5C109.531 0.5 120.5 11.469 120.5 25Z"
          fill={`${props.booking.guests > 0 ? "#bce2a0" : "#D9D9D9"}`}
        />
        <path
          d="M120.5 25V39.5H71.5V25C71.5 11.469 82.469 0.5 96 0.5C109.531 0.5 120.5 11.469 120.5 25Z"
          stroke="#6C6C6C"
        />
        <path
          d="M71.5 167V152.5H120.5V167C120.5 180.531 109.531 191.5 96 191.5C82.469 191.5 71.5 180.531 71.5 167Z"
          fill={`${props.booking.guests > 1 ? "#bce2a0" : "#D9D9D9"}`}
        />
        <path
          d="M71.5 167V152.5H120.5V167C120.5 180.531 109.531 191.5 96 191.5C82.469 191.5 71.5 180.531 71.5 167Z"
          stroke="#6C6C6C"
        />
        <path
          d="M25 71.5H39.5V120.5H25C11.469 120.5 0.5 109.531 0.5 96C0.5 82.469 11.469 71.5 25 71.5Z"
          fill={`${props.booking.guests > 2 ? "#bce2a0" : "#D9D9D9"}`}
        />
        <path
          d="M25 71.5H39.5V120.5H25C11.469 120.5 0.5 109.531 0.5 96C0.5 82.469 11.469 71.5 25 71.5Z"
          stroke="#6C6C6C"
        />
        <path
          d="M167 120.5H152.5V71.5H167C180.531 71.5 191.5 82.469 191.5 96C191.5 109.531 180.531 120.5 167 120.5Z"
          fill={`${props.booking.guests > 3 ? "#bce2a0" : "#D9D9D9"}`}
        />
        <path
          d="M167 120.5H152.5V71.5H167C180.531 71.5 191.5 82.469 191.5 96C191.5 109.531 180.531 120.5 167 120.5Z"
          stroke="#6C6C6C"
        />
      </svg>
    </div>
  );
};
