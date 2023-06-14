import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { UpdateFormWrapper } from "./styled/AdminWrappers";
import { Heading } from "./styled/HeadingStyles";
import { NumberInput, TextInput } from "./styled/Inputs";
import {
  FormLabel,
  StyledAdminUpdateForm,
  TinyText,
} from "./styled/StyledForm";
import { HorizontalWrapperGap } from "./styled/Wrappers";
import { AdminButton } from "./styled/Buttons";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";
import { timeSlot } from "../enums/timeSlots";
import {
  BookingCustomerExt,
  emptyBookingCustomerExt,
} from "../models/BookingCustomerExt";

export const AdminUpdateForm = () => {
  const currentBooking = useContext(CurrentBookingContext);
  const [updatedBooking, setUpdatedBooking] = useState<BookingCustomerExt>({
    ...emptyBookingCustomerExt,
    guests: currentBooking.guests,
  });
  const [finishedBooking, setFinishedBooking] = useState<BookingCustomerExt>({
    ...emptyBookingCustomerExt,
    guests: currentBooking.guests,
  });

  const oppositeTime = updatedBooking.time;

  useEffect(() => {
    console.log("Det här objektet skickas!", finishedBooking);
  }, [finishedBooking]);

  /* console.log("uppdaterad bokning: ", updatedBooking);
  console.log("finished", finishedBooking); */

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const prop = e.target.name;
    if (e.target.type === "text") {
      setUpdatedBooking({ ...updatedBooking, [prop]: e.target.value });
    }
    if (e.target.type === "number") {
      setUpdatedBooking({ ...updatedBooking, [prop]: +e.target.value });
    }
  }

  function handleCustomerChange(e: ChangeEvent<HTMLInputElement>) {
    const prop = e.target.name;
    setUpdatedBooking({
      ...updatedBooking,
      customer: { ...updatedBooking.customer, [prop]: e.target.value },
    });
  }

  function updateBooking() {
    setFinishedBooking({
      ...updatedBooking,
      date: currentBooking.date,
    });
  }

  function stopSubmit(e: FormEvent) {
    e.preventDefault();

    handleSubmit();
  }

  function handleSubmit() {
    updateBooking();
  }
  return (
    <UpdateFormWrapper>
      <StyledAdminUpdateForm onSubmit={stopSubmit}>
        <Heading>Uppdatera bokning</Heading>
        <FormLabel>
          <TinyText>Nuvaranade namn: {currentBooking.customer.name}</TinyText>
          Namn:
          <TextInput
            type="text"
            value={updatedBooking.customer.name}
            name="name"
            onChange={handleCustomerChange}
          ></TextInput>
        </FormLabel>
        <FormLabel>
          <TinyText>Nuvarande email: {currentBooking.customer.email}</TinyText>
          Email:
          <TextInput
            type="text"
            value={updatedBooking.customer.email}
            name="email"
            onChange={handleCustomerChange}
          />
        </FormLabel>
        <FormLabel>
          <TinyText>
            Nuvaranade nummer: {currentBooking.customer.phonenumber}
          </TinyText>
          Telefonnummer:
          <TextInput
            type="text"
            value={updatedBooking.customer.phonenumber}
            name="phonenumber"
            onChange={handleCustomerChange}
          />
        </FormLabel>

        <HorizontalWrapperGap>
          <FormLabel>
            <TinyText>Nuvarande sällskap: {currentBooking.guests}st</TinyText>
            Antal i sällskap:
            <NumberInput
              type="number"
              min={1}
              //max={10}
              value={updatedBooking.guests}
              name="guests"
              onChange={handleChange}
            />
          </FormLabel>
          <AdminButton
            onClick={() =>
              setUpdatedBooking({
                ...updatedBooking,
                time:
                  updatedBooking.time === timeSlot.EARLY
                    ? timeSlot.LATE
                    : timeSlot.EARLY,
              })
            }
          >
            Byt till
            {currentBooking.time === timeSlot.EARLY
              ? timeSlot.LATE
              : timeSlot.EARLY}
          </AdminButton>
        </HorizontalWrapperGap>
        <AdminButton>Uppdatera bokning!</AdminButton>
      </StyledAdminUpdateForm>
    </UpdateFormWrapper>
  );
};
