import { useState } from "react";
import "./TwoSeats.css";
import { Booking } from "../../../models/Booking";

interface ITwoSeatsProps {
  booking: Booking;
  tableId: string;
}

export const TwoSeats = (props: ITwoSeatsProps) => {
  return (
    <div className="two-seats flex-row align-center justify-center position-relative">
      <section className="two-seats-text-container flex-column justify-center align-center position-absolute">
        <div className="font-bold">{props.tableId}</div>
        <div className="font-bold">{props.booking.name}</div>
        <div className="font-bold">
          {props.booking.guests > 0 ? props.booking.guests : null}
        </div>
      </section>

      <svg
        width="70"
        height="162"
        viewBox="0 0 70 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="46.5"
          width="69"
          height="69"
          rx="34.5"
          fill="#D9D9D9"
        />
        <rect
          x="0.5"
          y="46.5"
          width="69"
          height="69"
          rx="34.5"
          stroke="#6C6C6C"
        />
        <path
          d="M59.5 25V39.5H10.5V25C10.5 11.469 21.469 0.5 35 0.5C48.531 0.5 59.5 11.469 59.5 25Z"
          fill="#D9D9D9"
        />
        <path
          d="M59.5 25V39.5H10.5V25C10.5 11.469 21.469 0.5 35 0.5C48.531 0.5 59.5 11.469 59.5 25Z"
          stroke="#6C6C6C"
        />
        <path
          d="M10.5 137L10.5 122.5H59.5L59.5 137C59.5 150.531 48.531 161.5 35 161.5C21.469 161.5 10.5 150.531 10.5 137Z"
          fill="#D9D9D9"
        />
        <path
          d="M10.5 137L10.5 122.5H59.5L59.5 137C59.5 150.531 48.531 161.5 35 161.5C21.469 161.5 10.5 150.531 10.5 137Z"
          stroke="#6C6C6C"
        />
      </svg>
    </div>
  );
};
