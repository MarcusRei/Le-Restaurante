import { ChangeEvent, FormEvent, useState } from "react";
import { Customer } from "../models/Customer";

export const Form = () => {
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

  return (
    <div>
      <h3>Boka bord</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Namn:
          <input
            type="text"
            value={customer.name}
            name="name"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={customer.email}
            name="email"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Telefonnummer:
          <input
            type="text"
            value={customer.phone}
            name="phone"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Antal i sällskap:
          <input
            type="number"
            min={1}
            max={10}
            value={customer.guests}
            name="guests"
            onChange={handleChange}
            required
          />
        </label>
        <button>Välj tid</button>
      </form>
      <button>Boka</button>
    </div>
  );
};
