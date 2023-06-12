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
import { getBookings, postNewBooking } from "../services/dataService";
import { NewBookingContext } from "../contexts/NewBookingContext";
import { BookingReducer, IBookingAction } from "../reducers/BookingReducer";
import { actionType } from "../enums/actionType";
import { BookingsContext } from "../contexts/BookingsContext";
import { BookingsReducer } from "../reducers/BookingsReducer";

interface IChecks {
  policyChecked: boolean;
  dateChosen: boolean;
  confirm: boolean;
}

interface IFormProps {
  openCalendar: () => void;
  closeCalendar: () => void;
  addTime: (Value: IBookingAction) => void;
  updateGuestCount: (value: number) => void;
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
  const booking = useContext(NewBookingContext);
  //const [bookings, dispatch] = useReducer(BookingsReducer, []);

  useEffect(() => {
    if (checks.confirm) {
      postNewBooking(booking);
      //getBookings();
    }
  }, [checks]);

  useEffect(() => {
    props.updateGuestCount(newBooking.guests);
  }, [newBooking.guests]);

  const handleSubmit = (/* e: FormEvent */) => {
    //e.preventDefault();

    props.addTime({ type: actionType.INFOADDED, payload: newBooking });

    setChecks({ ...checks, confirm: true });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const prop = e.target.name;
    if (e.target.type === "text") {
      setNewBooking({ ...newBooking, [prop]: e.target.value });
    }
    if (e.target.type === "number") {
      setNewBooking({ ...newBooking, [prop]: +e.target.value });
    }
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setChecks({ ...checks, policyChecked: e.target.checked });
  };

  const openCalendar = (e: FormEvent) => {
    e.preventDefault();
    props.openCalendar();
  };

  function stopSubmit(e: FormEvent) {
    e.preventDefault();
    handleSubmit();
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
                //max={10}
                value={newBooking.guests}
                name="guests"
                onChange={handleChange}
                required
              />
            </FormLabel>
            <Button onClick={openCalendar} disabled={newBooking.guests < 1}>
              Välj tid
            </Button>
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
            /* onClick={checks.dateChosen ? handleSubmit : undefined} */
          >
            Boka
          </Button>
        </StyledForm>
        {checks.confirm && <h2>Din bokning är registrerad!</h2>}
      </VerticalWrapper>
    </>
  );
};
