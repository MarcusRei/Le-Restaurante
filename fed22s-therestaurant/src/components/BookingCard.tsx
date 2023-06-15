import { BookingClass } from "../models/Booking";
import { BookingHeading } from "./styled/BookingHeading";
import { AdminButton, ContactButton } from "./styled/Buttons";
import { ThinText } from "./styled/ThinText";
import { TimeSlotBlock } from "./styled/TimeSlotBlock";
import { HorizontalWrapper, VerticalWrapper } from "./styled/Wrappers";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "./styled/Buttons";
import { AdminContext } from "../contexts/AdminContext";
import { ActionType } from "../reducers/AdminReducer";
import { BookingCustomerExt } from "../models/BookingCustomerExt";
import { deleteBooking } from "../services/dataService";

interface IBookingCardProps {
  handleUpdateForm: () => void;
  booking: BookingCustomerExt;
  updateChosenBooking: (current: BookingCustomerExt | BookingClass) => void;
}

export const BookingCard = (props: IBookingCardProps) => {
  const { dispatch } = useContext(AdminContext);
  const [bookingToUpdate, setBookingToUpdate] = useState({});
  console.log(props.booking);

  //useEffect(() => {}, [bookingToUpdate]);

  const updateBooking = () => {
    props.updateChosenBooking(props.booking);
    const chosenBooking = { ...props.booking };

    props.handleUpdateForm();

    setBookingToUpdate(chosenBooking);

    console.log("chosenBooking", chosenBooking._id);

    /* dispatch({
      type: ActionType.UPDATE_BOOKING,
      payload: JSON.stringify(chosenBooking),
    }); */
  };

  const handleDeleteBooking = async () => {
    try {
      await deleteBooking(props.booking._id);
      dispatch({
        type: ActionType.DELETE_BOOKING,
        payload: props.booking._id ? props.booking._id.toString() : "",
      });
    } catch (error) {
      console.error("Could not delete the booking");
    }
  };

  return (
    <HorizontalWrapper>
      <TimeSlotBlock>{props.booking.time}</TimeSlotBlock>
      <VerticalWrapper>
        <BookingHeading>{props.booking.customer.name}</BookingHeading>
        <ThinText>{props.booking.guests}</ThinText>
      </VerticalWrapper>
      <VerticalWrapper>
        <ThinText>{props.booking.date}</ThinText>
        <ThinText>Bord 1</ThinText>
      </VerticalWrapper>
      <ContactButton>Kontakta</ContactButton>
      <AdminButton onClick={updateBooking}>Uppdatera</AdminButton>
      <AdminButton onClick={handleDeleteBooking}>Ta bort</AdminButton>
    </HorizontalWrapper>
  );
};
