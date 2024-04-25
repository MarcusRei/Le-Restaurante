import { Booking } from "../../../models/Booking";
import "./FourSeats.css";

interface IFourSeatsProps {
  booking?: Booking;
}

export const FourSeats = (props: IFourSeatsProps) => {
  return (
    <div className="four-seats flex-row align-center justify-center">
      <div>{props.booking?.name}</div>
      <div>{props.booking?.guests}</div>
      <svg
        width="200"
        height="192"
        viewBox="0 0 200 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M119.5 167V152.5H168.5V167C168.5 180.531 157.531 191.5 144 191.5C130.469 191.5 119.5 180.531 119.5 167Z"
          fill="#D9D9D9"
        />
        <path
          d="M119.5 167V152.5H168.5V167C168.5 180.531 157.531 191.5 144 191.5C130.469 191.5 119.5 180.531 119.5 167Z"
          stroke="#6C6C6C"
        />
        <path
          d="M31.5 167L31.5 152.5H80.5V167C80.5 180.531 69.531 191.5 56 191.5C42.469 191.5 31.5 180.531 31.5 167Z"
          fill="#D9D9D9"
        />
        <path
          d="M31.5 167L31.5 152.5H80.5V167C80.5 180.531 69.531 191.5 56 191.5C42.469 191.5 31.5 180.531 31.5 167Z"
          stroke="#6C6C6C"
        />
        <rect
          x="0.5"
          y="46.5"
          width="199"
          height="99"
          rx="49.5"
          fill="#D9D9D9"
        />
        <rect
          x="0.5"
          y="46.5"
          width="199"
          height="99"
          rx="49.5"
          stroke="#6C6C6C"
        />
        <path
          d="M80.5 25V39.5H31.5V25C31.5 11.469 42.469 0.5 56 0.5C69.531 0.5 80.5 11.469 80.5 25Z"
          fill="#D9D9D9"
        />
        <path
          d="M80.5 25V39.5H31.5V25C31.5 11.469 42.469 0.5 56 0.5C69.531 0.5 80.5 11.469 80.5 25Z"
          stroke="#6C6C6C"
        />
        <path
          d="M168.5 25V39.5H119.5V25C119.5 11.469 130.469 0.5 144 0.5C157.531 0.5 168.5 11.469 168.5 25Z"
          fill="#D9D9D9"
        />
        <path
          d="M168.5 25V39.5H119.5V25C119.5 11.469 130.469 0.5 144 0.5C157.531 0.5 168.5 11.469 168.5 25Z"
          stroke="#6C6C6C"
        />
      </svg>
    </div>
  );
};
