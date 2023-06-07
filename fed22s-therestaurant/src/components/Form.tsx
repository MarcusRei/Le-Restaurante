import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  PolicyWrapper,
  StyledForm,
  FormLabel,
  FormParagraph,
  DateTimeText,
} from "./styled/StyledForm";
import { TextInput, NumberInput } from "./styled/Inputs";
import { Heading } from "./styled/Heading";
import { Button } from "./styled/Button";
import { Booking } from "../models/Booking";
import {
  HorizontalWrapper,
  HorizontalWrapperGap,
  VerticalWrapper,
} from "./styled/Wrappers";
import { postNewBooking } from "../services/dataService";

export const Form = () => {
  const [policyChecked, setPolicyChecked] = useState(false);
  const [dateChosen, setDateChosen] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const [booking, setBooking] = useState<Booking>({
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(booking);

    postNewBooking(booking);

    setConfirm(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const prop = e.target.name;
    if (e.target.type === "text") {
      setBooking({ ...booking, [prop]: e.target.value });
    }
    if (e.target.type === "number") {
      setBooking({ ...booking, [prop]: +e.target.value });
    }
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setPolicyChecked(e.target.checked);
  };

  const openCalendar = (e: FormEvent) => {
    e.preventDefault();
    setBooking({ ...booking, date: "05-06-2023", time: "18:00-21:00" });
    setDateChosen(true);

    console.log("date and time set!");
  };

  return (
    <>
      <VerticalWrapper>
        <StyledForm>
          <Heading>Boka bord</Heading>
          <FormLabel>
            Namn:
            <TextInput
              type="text"
              value={booking.name}
              name="name"
              onChange={handleChange}
              required
            />
          </FormLabel>
          <FormLabel>
            Email:
            <TextInput
              type="text"
              value={booking.email}
              name="email"
              onChange={handleChange}
              required
            />
          </FormLabel>
          <FormLabel>
            Telefonnummer:
            <TextInput
              type="text"
              value={booking.phonenumber}
              name="phonenumber"
              onChange={handleChange}
              required
            />
          </FormLabel>

          <HorizontalWrapperGap>
            <FormLabel>
              Antal i sällskap:
              <NumberInput
                type="number"
                min={1}
                max={10}
                value={booking.guests}
                name="guests"
                onChange={handleChange}
                required
              />
            </FormLabel>
            <Button onClick={openCalendar}>Välj tid</Button>
          </HorizontalWrapperGap>
          <HorizontalWrapper>
            {booking.date !== "" && (
              <VerticalWrapper>
                <DateTimeText>{booking.date}</DateTimeText>
                <DateTimeText>{booking.time}</DateTimeText>
              </VerticalWrapper>
            )}
          </HorizontalWrapper>

          <PolicyWrapper>
            <FormLabel>
              <input type="checkbox" onChange={handleCheckbox} />
            </FormLabel>
            <FormParagraph>
              Jag bekräftar att jag har läst och godkänt Le Restaurante's
              <a href="https://book.easytablebooking.com/book/privacy/?id=b6e01&lang=SE">
                {" "}
                integritetspolicy
              </a>
            </FormParagraph>
          </PolicyWrapper>

          <Button
            disabled={!policyChecked}
            onClick={dateChosen ? handleSubmit : undefined}
          >
            Boka
          </Button>
        </StyledForm>
        {confirm && <h2>Din bokning är registrerad!</h2>}
      </VerticalWrapper>
    </>
  );
};
