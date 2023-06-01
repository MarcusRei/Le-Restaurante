import { ChangeEvent, FormEvent, useState } from "react";
import { Customer } from "../models/Customer";
import { Input } from "./styled/Input";
import { StyledForm } from "./styled/StyledForm";
import { NumberInput } from "./styled/NumberInput";
import { LeftsideDiv } from "./styled/LeftsideDiv";
import { Heading } from "./styled/Heading";
import { Button } from "./styled/Button";
import { ImageBackground } from "./styled/ImageBackground";

export const Form = () => {
  const [policyChecked, setPolicyChecked] = useState(false);
  const [customer, setCustomer] = useState<Customer>({
    name: "",
    email: "",
    phone: "",
    guests: 0,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(customer);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const prop = e.target.name;
    if (e.target.type === "text") {
      setCustomer({ ...customer, [prop]: e.target.value });
    }
    if (e.target.type === "number") {
      setCustomer({ ...customer, [prop]: +e.target.value });
    }
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setPolicyChecked(e.target.checked);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Heading>Boka bord</Heading>
      <label>
        Namn:
        <Input
          type="text"
          value={customer.name}
          name="name"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <Input
          type="text"
          value={customer.email}
          name="email"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Telefonnummer:
        <Input
          type="text"
          value={customer.phone}
          name="phone"
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
            value={customer.guests}
            name="guests"
            onChange={handleChange}
            required
          />
        </label>
        <Button>Välj tid</Button>
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
      <Button disabled={!policyChecked}>Boka</Button>
    </StyledForm>
  );
};
