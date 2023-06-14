import { Booking } from "../models/Booking";
import { BookingHeading } from "./styled/BookingHeading";
import { ContactButton } from "./styled/Button";
import { ThinText } from "./styled/ThinText";
import { TimeSlotBlock } from "./styled/TimeSlotBlock";
import { HorizontalWrapper, VerticalWrapper } from "./styled/Wrappers";
import React, { useContext } from "react";
import { Button } from "./styled/Button";
import { AdminContext } from "../contexts/AdminContext";
import { ActionType } from "../reducers/AdminReducer";
import { deleteBooking } from "../services/dataService";
import { id } from "date-fns/locale";

export const BookingCard = ({ booking }: { booking: Booking }) => {
  const { bookings, dispatch } = useContext(AdminContext);

  const handleUpdateBooking = () => {
    // Uppdatera
    const updatedBooking = { ...booking };
    dispatch({
      type: ActionType.UPDATE_BOOKING,
      payload: JSON.stringify(updatedBooking),
    });
  };

  const handleDeleteBooking = async () => {
    try {
      await deleteBooking(booking._id);
      dispatch({
        type: ActionType.DELETE_BOOKING,
        payload: booking._id ? booking._id.toString() : "",
      });
    } catch (error) {
      console.error("Could not delete the booking");
    }
    // Ta bort
    // bookings.map((booking) => {
    //   if (id === booking._id) console.log(id);
    // });
    // dispatch({
    //   type: ActionType.DELETE_BOOKING,
    //   payload: booking._id ? booking._id.toString() : "",
    // });
    // console.log(bookings);
  };

  return (
    <HorizontalWrapper>
      <TimeSlotBlock>{booking.time}</TimeSlotBlock>
      <VerticalWrapper>
        <BookingHeading>{booking.name}</BookingHeading>
        <ThinText>{booking.guests}</ThinText>
      </VerticalWrapper>
      <VerticalWrapper>
        <ThinText>{booking.date}</ThinText>
        <ThinText>Bord 1</ThinText>
      </VerticalWrapper>
      <ContactButton>Kontakta</ContactButton>
      <Button onClick={handleUpdateBooking}>Uppdatera</Button>
      <Button onClick={handleDeleteBooking}>Ta bort</Button>
    </HorizontalWrapper>
  );
};
