import { ChangeEvent, FormEvent, useState } from "react";
import { Customer } from "../models/Customer";

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
      <input type="checkbox" onChange={handleCheckbox} />
      <p>
        Genom att boka bord på Le Restaurante godkänner jag att mina uppgifter
        sparas enligt denna
        <a href="https://book.easytablebooking.com/book/privacy/?id=b6e01&lang=SE">
          {" "}
          integritetspolicy
        </a>
      </p>
      <button disabled={!policyChecked}>Boka</button>
    </div>
  );
};
