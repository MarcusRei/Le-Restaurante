import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Customer } from "../models/Customer";
import { Input } from "./styled/Input";
import { StyledForm } from "./styled/StyledForm";
import { NumberInput } from "./styled/NumberInput";
import { LeftsideDiv } from "./styled/LeftsideDiv";
import { Heading } from "./styled/Heading";
import { Button } from "./styled/Button";
import { ImageBackground } from "./styled/ImageBackground";
import { Booking } from "../models/Booking";
import { BookingContext } from "../contexts/BookingContext";

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

  /* const booking = useContext(BookingContext); */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setConfirm(true);

    console.log("Form sent!");
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
      <StyledForm>
        <Heading>Boka bord</Heading>
        <label>
          Namn:
          <Input
            type="text"
            value={booking.name}
            name="name"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <Input
            type="text"
            value={booking.email}
            name="email"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Telefonnummer:
          <Input
            type="text"
            value={booking.phonenumber}
            name="phonenumber"
            onChange={handleChange}
            required
          />
        </label>
        <LeftsideDiv>
          <label>
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
          </label>
          <Button onClick={openCalendar}>Välj tid</Button>
        </LeftsideDiv>
        <label>
          <input type="checkbox" onChange={handleCheckbox} />
        </label>
        <p>
          Genom att boka bord på Le Restaurante godkänner jag att mina uppgifter
          sparas enligt denna
          <a href="https://book.easytablebooking.com/book/privacy/?id=b6e01&lang=SE">
            {" "}
            integritetspolicy
          </a>
        </p>
        <Button
          disabled={!policyChecked}
          onClick={dateChosen ? handleSubmit : undefined}
        >
          Boka
        </Button>
      </StyledForm>
      {confirm && <h2>Din bokning är registrerad!</h2>}
    </>
  );
};
