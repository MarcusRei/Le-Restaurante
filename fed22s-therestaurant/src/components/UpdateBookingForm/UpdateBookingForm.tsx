import { Booking } from "../../models/Booking";
import "./UpdateBookingForm.css";

interface IUpdateBookingFormProps {
  closeDialog: Function;
  booking: Booking;
}

export const UpdateBookingForm = (props: IUpdateBookingFormProps) => {
  return (
    <>
      <form className="update-booking-form">
        <div className="upper-button-container flex-row">
          <button
            className="admin-button danger font-bold"
            onClick={() => props.closeDialog()}
          >
            Close
          </button>
        </div>

        <h2 className="font medium">Uppdatera bokning</h2>

        <article className="flex-column gap-small">
          <div className="font-bold">Nuvaranade namn: {props.booking.name}</div>
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            defaultValue={props.booking.name}
            name="name"
          ></input>
        </article>

        <div className="spacing small" />

        <article className="flex-column gap-small">
          <div className="font-bold">
            Nuvarande email: {props.booking.email}
          </div>
          <label htmlFor="email">Email:</label>
          <input type="text" value={props.booking.email} name="email" />
        </article>

        <div className="spacing small" />

        <article className="flex-column gap-small">
          <div className="font-bold">
            Nuvarande nummer: {props.booking.phonenumber}
          </div>
          <label htmlFor="phone">Telefonnummer:</label>
          <input
            type="text"
            value={props.booking.phonenumber}
            name="phonenumber"
          />
        </article>

        <div className="spacing small" />

        <article>
          <label>
            Antal i sällskap:
            <input
              type="number"
              min={1}
              //max={10}
              value={props.booking.guests}
              name="guests"
            />
          </label>
        </article>

        <div className="spacing small" />

        <article className="flex-row align-center gap-small">
          <div className="font-bold">
            Nuvarande sittning:
            {props.booking.timeSlot}
          </div>

          <button className="admin-button font-bold">Byt tid</button>
        </article>

        <div className="spacing small" />

        <div className="flex-row justify-center">
          <button className="admin-button font-bold">Uppdatera bokning</button>
        </div>
      </form>

      <dialog>
        <div></div>
      </dialog>
    </>
  );
};
