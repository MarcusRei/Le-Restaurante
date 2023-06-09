import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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
import { BookingClass } from "../models/Booking";
import {
  HorizontalWrapper,
  HorizontalWrapperGap,
  VerticalWrapper,
} from "./styled/Wrappers";
import { postNewBooking } from "../services/dataService";
import { NewBookingContext } from "../contexts/NewBookingContext";
import { BookingReducer } from "../reducers/BookingReducer";
import { actionType } from "../enums/actionType";

interface IChecks {
  policyChecked: boolean;
  dateChosen: boolean;
  confirm: boolean;
}

/* export interface IBookingPayload {
  name: string;
  email: string;
  phonenumber: string;
  guests: number;
  date: string;
  time: string;
} */

interface IFormProps {
  openCalendar: () => void;
  closeCalendar: () => void;
  /* updateBooking: (time: string) => void; */
}

export const Form = (props: IFormProps) => {
  const [checks, setChecks] = useState<IChecks>({
    policyChecked: false,
    dateChosen: false,
    confirm: false,
  });

  const [newBooking, setNewBooking] = useState<BookingClass>({
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  });

  //const booking = useContext(NewBookingContext);
  const [booking, dispatch] = useReducer(BookingReducer, {
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  });

  /* useEffect(() => {
    console.log(booking);
  }, [booking]); */

  /* const [booking, setBooking] = useState<BookingClass>({
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  }); */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({ type: actionType.INFOADDED, payload: newBooking });

    setChecks({ ...checks, confirm: true });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const prop = e.target.name;
    if (e.target.type === "text") {
      //setBooking({ ...booking, [prop]: e.target.value });
      setNewBooking({ ...newBooking, [prop]: e.target.value });
    }
    if (e.target.type === "number") {
      //setBooking({ ...booking, [prop]: +e.target.value });
      setNewBooking({ ...newBooking, [prop]: +e.target.value });
    }
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    /* setPolicyChecked(e.target.checked); */
    setChecks({ ...checks, policyChecked: e.target.checked });
  };

  const openCalendar = (e: FormEvent) => {
    e.preventDefault();
    props.openCalendar();
    //setBooking({ ...booking, date: "05-06-2023", time: "18:00-21:00" });
    /* setDateChosen(true); */

    //setChecks({ ...checks, dateChosen: true });

    //console.log("date and time set!");
  };

  function stopSubmit(e: FormEvent) {
    e.preventDefault();
    handleSubmit(e);
  }

  return (
    <>
      <VerticalWrapper>
        <StyledForm onSubmit={stopSubmit}>
          <Heading>Boka bord</Heading>
          <FormLabel>
            Namn:
            <TextInput
              type="text"
              value={newBooking.name}
              name="name"
              onChange={handleChange}
              required
            />
          </FormLabel>
          <FormLabel>
            Email:
            <TextInput
              type="text"
              value={newBooking.email}
              name="email"
              onChange={handleChange}
              required
            />
          </FormLabel>
          <FormLabel>
            Telefonnummer:
            <TextInput
              type="text"
              value={newBooking.phonenumber}
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
                value={newBooking.guests}
                name="guests"
                onChange={handleChange}
                required
              />
            </FormLabel>
            <Button onClick={openCalendar}>Välj tid</Button>
          </HorizontalWrapperGap>
          <HorizontalWrapper>
            {newBooking.date !== "" && (
              <VerticalWrapper>
                <DateTimeText>{newBooking.date}</DateTimeText>
                <DateTimeText>{newBooking.time}</DateTimeText>
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
            disabled={!checks.policyChecked}
            onClick={checks.dateChosen ? handleSubmit : undefined}
          >
            Boka
          </Button>
        </StyledForm>
        {checks.confirm && <h2>Din bokning är registrerad!</h2>}
      </VerticalWrapper>
    </>
  );
};
