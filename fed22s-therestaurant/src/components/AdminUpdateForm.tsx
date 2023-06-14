import { ChangeEvent, useContext, useState } from "react";
import { BookingClass } from "../models/Booking";
import { UpdateFormWrapper } from "./styled/AdminWrappers";
import { Heading } from "./styled/HeadingStyles";
import { NumberInput, TextInput } from "./styled/Inputs";
import {
  FormLabel,
  StyledAdminUpdateForm,
  TinyText,
} from "./styled/StyledForm";
import { HorizontalWrapperGap } from "./styled/Wrappers";
import { Button } from "./styled/Buttons";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";

export const AdminUpdateForm = () => {
  const [updatedBooking, setUpdatedBooking] = useState<BookingClass>({
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  });

  const currentBooking = useContext(CurrentBookingContext);
  console.log("Halloj", currentBooking);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const prop = e.target.name;
    if (e.target.type === "text") {
      setUpdatedBooking({ ...updatedBooking, [prop]: e.target.value });
    }
    if (e.target.type === "number") {
      setUpdatedBooking({ ...updatedBooking, [prop]: +e.target.value });
    }
    console.log(updatedBooking);
  }

  function updateBooking() {
    console.log(updatedBooking);
  }
  return (
    <UpdateFormWrapper>
      <StyledAdminUpdateForm>
        <Heading>Uppdatera bokning</Heading>
        <FormLabel>
          <TinyText>Nuvaranade namn: "Tillfälligt"</TinyText>
          Namn:
          <TextInput
            type="text"
            value={updatedBooking.name}
            name="name"
            onChange={handleChange}
          ></TextInput>
        </FormLabel>
        <FormLabel>
          <TinyText>Nuvaranade namn: "Tillfälligt"</TinyText>
          Email:
          <TextInput
            type="text"
            value={updatedBooking.email}
            name="email"
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          <TinyText>Nuvaranade nummer: "Tillfälligt"</TinyText>
          Telefonnummer:
          <TextInput
            type="text"
            value={updatedBooking.phonenumber}
            name="phonenumber"
            onChange={handleChange}
            required
          />
        </FormLabel>

        <HorizontalWrapperGap>
          <FormLabel>
            <TinyText>Nuvarande sällskap "tillfälligt"</TinyText>
            Antal i sällskap:
            <NumberInput
              type="number"
              min={1}
              //max={10}
              value={updatedBooking.guests}
              name="guests"
              onChange={handleChange}
              required
            />
          </FormLabel>
          <Button>Byt sittning</Button>
        </HorizontalWrapperGap>
        <Button onClick={updateBooking}>Uppdatera bokning!</Button>
      </StyledAdminUpdateForm>
    </UpdateFormWrapper>
  );
};
