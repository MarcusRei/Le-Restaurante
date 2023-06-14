import { BookingClass } from "../models/Booking";
import { BookingHeading } from "./styled/BookingHeading";
import { ContactButton } from "./styled/Button";
import { ThinText } from "./styled/ThinText";
import { TimeSlotBlock } from "./styled/TimeSlotBlock";
import { HorizontalWrapper, VerticalWrapper } from "./styled/Wrappers";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "./styled/Button";
import { AdminContext } from "../contexts/AdminContext";
import { ActionType } from "../reducers/AdminReducer";

interface IBookingCardProps {
  openUpdateForm: () => void;
  booking: BookingClass;
  updateChosenBooking: (current: BookingClass) => void;
}

export const BookingCard = (props: IBookingCardProps) => {
  const { dispatch } = useContext(AdminContext);
  const [bookingToUpdate, setBookingToUpdate] = useState({});

  //useEffect(() => {}, [bookingToUpdate]);

  const updateBooking = () => {
    props.updateChosenBooking(props.booking);
    const chosenBooking = { ...props.booking };

    props.openUpdateForm();

    setBookingToUpdate(chosenBooking);

    console.log("chosenBooking", chosenBooking._id);

    /* dispatch({
      type: ActionType.UPDATE_BOOKING,
      payload: JSON.stringify(chosenBooking),
    }); */
  };

  const handleDeleteBooking = () => {
    // Ta bort
    dispatch({
      type: ActionType.DELETE_BOOKING,
      payload: props.booking._id ? props.booking._id.toString() : "",
    });
  };

  return (
    <HorizontalWrapper>
      <TimeSlotBlock>{props.booking.time}</TimeSlotBlock>
      <VerticalWrapper>
        <BookingHeading>{props.booking.name}</BookingHeading>
        <ThinText>{props.booking.guests}</ThinText>
      </VerticalWrapper>
      <VerticalWrapper>
        <ThinText>{props.booking.date}</ThinText>
        <ThinText>Bord 1</ThinText>
      </VerticalWrapper>
      <ContactButton>Kontakta</ContactButton>
      <Button onClick={updateBooking}>Uppdatera</Button>
      <Button onClick={handleDeleteBooking}>Ta bort</Button>
    </HorizontalWrapper>
  );
};
