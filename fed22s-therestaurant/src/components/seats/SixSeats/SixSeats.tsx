import { Booking } from "../../../models/Booking";
import "./SixSeats.css";

interface ISixSeatsProps {
  booking: Booking;
  tableId: string;
}

export const SixSeats = (props: ISixSeatsProps) => {
  return (
    <div className="six-seats flex-row align-center justify-center position-relative">
      <section className="six-seats-text-container flex-column justify-center align-center position-absolute">
        <div className="font-bold">{props.tableId}</div>
        <div className="font-bold">{props.booking.name}</div>
        <div className="font-bold">
          {props.booking.guests > 0 ? props.booking.guests : null}
        </div>
      </section>
      <svg
        width="240"
        height="200"
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M164.5 175V160.5H213.5V175C213.5 188.531 202.531 199.5 189 199.5C175.469 199.5 164.5 188.531 164.5 175Z"
          fill="#D9D9D9"
        />
        <path
          d="M164.5 175V160.5H213.5V175C213.5 188.531 202.531 199.5 189 199.5C175.469 199.5 164.5 188.531 164.5 175Z"
          stroke="#6C6C6C"
        />
        <path
          d="M98.5 175V160.5H147.5V175C147.5 188.531 136.531 199.5 123 199.5C109.469 199.5 98.5 188.531 98.5 175Z"
          fill="#D9D9D9"
        />
        <path
          d="M98.5 175V160.5H147.5V175C147.5 188.531 136.531 199.5 123 199.5C109.469 199.5 98.5 188.531 98.5 175Z"
          stroke="#6C6C6C"
        />
        <path
          d="M32.5 175L32.5 160.5H81.5V175C81.5 188.531 70.531 199.5 57 199.5C43.469 199.5 32.5 188.531 32.5 175Z"
          fill="#D9D9D9"
        />
        <path
          d="M32.5 175L32.5 160.5H81.5V175C81.5 188.531 70.531 199.5 57 199.5C43.469 199.5 32.5 188.531 32.5 175Z"
          stroke="#6C6C6C"
        />
        <rect
          x="0.5"
          y="50.5"
          width="239"
          height="99"
          rx="49.5"
          fill="#D9D9D9"
        />
        <rect
          x="0.5"
          y="50.5"
          width="239"
          height="99"
          rx="49.5"
          stroke="#6C6C6C"
        />
        <path
          d="M31.5 25C31.5 11.469 42.469 0.5 56 0.5C69.531 0.5 80.5 11.469 80.5 25V39.5H31.5V25Z"
          fill="#D9D9D9"
        />
        <path
          d="M31.5 25C31.5 11.469 42.469 0.5 56 0.5C69.531 0.5 80.5 11.469 80.5 25V39.5H31.5V25Z"
          stroke="#6C6C6C"
        />
        <path
          d="M97.5 25C97.5 11.469 108.469 0.5 122 0.5C135.531 0.5 146.5 11.469 146.5 25V39.5H97.5V25Z"
          fill="#D9D9D9"
        />
        <path
          d="M97.5 25C97.5 11.469 108.469 0.5 122 0.5C135.531 0.5 146.5 11.469 146.5 25V39.5H97.5V25Z"
          stroke="#6C6C6C"
        />
        <path
          d="M212.5 25V39.5H163.5V25C163.5 11.469 174.469 0.5 188 0.5C201.531 0.5 212.5 11.469 212.5 25Z"
          fill="#D9D9D9"
        />
        <path
          d="M212.5 25V39.5H163.5V25C163.5 11.469 174.469 0.5 188 0.5C201.531 0.5 212.5 11.469 212.5 25Z"
          stroke="#6C6C6C"
        />
      </svg>
    </div>
  );
};
