import { Link } from "react-router-dom";
import { Booking } from "../models/BookingClass";
import { useState } from "react";

export const BookingConfirmation = () => {
  return (
    <>
      <h1>Tack så mycket!</h1>
      <h2>Vi har tagit emot din bokning!</h2>
      <Link to={"/"}></Link>
    </>
  );
};
