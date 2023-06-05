import { useState } from "react";
import { Form } from "./Form";
import { ImageBackground } from "./styled/ImageBackground";
import { BookingConfirmation } from "./BookingConfirmation";
import { BookingContext } from "../contexts/BookingContext";

export const Booking = () => {
  /* const [booking, setBooking] = useState<Booking>({
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  }); */

  return (
    <>
      {/* <BookingContext.Provider value={booking}> */}
      {/* {confirm ? <BookingConfirmation></BookingConfirmation> : } */}
      <Form></Form>
      {/* </BookingContext.Provider> */}
    </>
  );
};
