import { Booking } from "../models/Booking";
import { BookingHeading } from "./styled/BookingHeading";
import { ContactButton } from "./styled/Button";
import { ThinText } from "./styled/ThinText";
import { TimeSlotBlock } from "./styled/TimeSlotBlock";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./styled/Wrappers";
import React, { useContext } from "react";
import { Button } from "./styled/Button";
import { AdminDispatchContext } from "../contexts/AdminDispatchContext";
import { AdminContext } from "../contexts/AdminContext";
import { ActionType } from "../reducers/AdminReducer";

export const BookingCard = ({ booking }: { booking: Booking }) => {
  const { dispatch } = useContext(AdminContext);

  const handleUpdateBooking = () => {
    // Uppdatera
    const updatedBooking = { ...booking };
    dispatch({
      type: ActionType.UPDATE_BOOKING,
      payload: JSON.stringify(updatedBooking),
    });
  };

  const handleDeleteBooking = () => {
    // Ta bort
    dispatch({
      type: ActionType.DELETE_BOOKING,
      payload: booking._id ? booking._id.toString() : "",
    });
  };

  return (
    <HorizontalWrapper>
      <TimeSlotBlock>{booking.time}</TimeSlotBlock>
      <VerticalWrapper>
        <BookingHeading>{booking.name}</BookingHeading>
        <ContactButton>Kontakta</ContactButton>
        <ThinText>{booking.guests}</ThinText>
      </VerticalWrapper>
      <VerticalWrapper>
        <ThinText>{booking.date}</ThinText>
        <ThinText>Bord 1</ThinText>
      </VerticalWrapper>
      <Button onClick={handleUpdateBooking}>Uppdatera</Button>
      <Button onClick={handleDeleteBooking}>Ta bort</Button>
    </HorizontalWrapper>
  );
};
