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
import { AdminButton, CloseButton } from "./styled/Buttons";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";
import { timeSlot } from "../enums/timeSlots";
import {
  BookingCustomerExt,
  emptyBookingCustomerExt,
} from "../models/BookingCustomerExt";
import { updateBooking } from "../services/dataService";
import { CrossBarOne, CrossBarTwo } from "./styled/ExitCross";

interface IAdminUpdateFormProps {
  handleUpdateForm: () => void;
}

export const AdminUpdateForm = (props: IAdminUpdateFormProps) => {
  const currentBooking = useContext(CurrentBookingContext);

  const [updatedBooking, setUpdatedBooking] = useState<BookingCustomerExt>({
    ...emptyBookingCustomerExt,
    guests: currentBooking.guests,
  });

  const [finishedBooking, setFinishedBooking] = useState<BookingCustomerExt>({
    ...emptyBookingCustomerExt,
    guests: currentBooking.guests,
  });

  useEffect(() => {
    if (finishedBooking.customer.name !== "") {
      updateBooking(finishedBooking);
    }
  });

  console.log("objekt som vi skickar iväg:", finishedBooking);

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

  function sendBooking() {
    // Färdigställer objekt
    setFinishedBooking({
      ...updatedBooking,
      customer: {
        ...updatedBooking.customer,
        _id: currentBooking.customer._id,
        name:
          updatedBooking.customer.name === ""
            ? currentBooking.customer.name
            : updatedBooking.customer.name,
        email:
          updatedBooking.customer.email === ""
            ? currentBooking.customer.email
            : updatedBooking.customer.email,
        phonenumber:
          updatedBooking.customer.phonenumber === ""
            ? currentBooking.customer.phonenumber
            : updatedBooking.customer.phonenumber,
      },
      date: currentBooking.date,
      _id: currentBooking._id,
    });

    // PUT Request

    //updateBooking(finishedBooking);
  }

  function stopSubmit(e: FormEvent) {
    e.preventDefault();

    handleSubmit();
  }

  function handleSubmit() {
    sendBooking();
  }

  function changeTime(e: FormEvent) {
    e.preventDefault();

    if (updatedBooking.time === "") {
      if (currentBooking.time === timeSlot.EARLY) {
        setUpdatedBooking({ ...updatedBooking, time: timeSlot.LATE });
      } else {
        setUpdatedBooking({ ...updatedBooking, time: timeSlot.EARLY });
      }
    } else {
      if (updatedBooking.time === timeSlot.EARLY) {
        setUpdatedBooking({ ...updatedBooking, time: timeSlot.LATE });
      }
      if (updatedBooking.time === timeSlot.LATE) {
        setUpdatedBooking({ ...updatedBooking, time: timeSlot.EARLY });
      }
    }
  }
  return (
    <UpdateFormWrapper>
      <CloseButton onClick={props.handleUpdateForm}>
        <CrossBarOne></CrossBarOne>
        <CrossBarTwo></CrossBarTwo>
      </CloseButton>
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
          <FormLabel>
            <TinyText>
              Nuvarande sittning:{" "}
              {updatedBooking.time === ""
                ? currentBooking.time
                : updatedBooking.time}
            </TinyText>
            <AdminButton onClick={changeTime}>Byt tid</AdminButton>
          </FormLabel>
        </HorizontalWrapperGap>
        <AdminButton>Uppdatera bokning!</AdminButton>
      </StyledAdminUpdateForm>
    </UpdateFormWrapper>
  );
};
