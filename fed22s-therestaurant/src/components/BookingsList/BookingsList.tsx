import { BookingCard } from "../BookingCard/BookingCard";
import "./BookingsList.css";
import { Booking } from "../../models/Booking";

export interface IBookingsListProps {
  date: Date;
  showAll: Boolean;
  bookings: Booking[];
  updateBookings: Function;
}

export const BookingsList = (props: IBookingsListProps) => {
  console.log(props.bookings);

  return (
    <div className="bookings-list">
      {props.bookings.length === 0 ? (
        <div className="flex-column align-center justify-center">
          <div className="spacing medium" />
          <p>Inga bokningar på det här datumet</p>
        </div>
      ) : null}
      {props.bookings.map((booking, index) => (
        <BookingCard
          key={index}
          booking={booking}
          refreshBookings={() => props.updateBookings()}
        />
      ))}
    </div>
  );
};
