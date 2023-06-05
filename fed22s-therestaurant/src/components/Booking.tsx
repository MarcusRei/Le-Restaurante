import { useState } from "react";
import { Form } from "./Form";
import { ImageBackground } from "./styled/ImageBackground";
import { BookingConfirmation } from "./BookingConfirmation";
import { BookingContext } from "../contexts/BookingContext";
import { CenteringWrapper } from "./styled/Wrapper";

export const Booking = () => {
  return (
    <>
      <CenteringWrapper>
        <Form></Form>
      </CenteringWrapper>
    </>
  );
};
