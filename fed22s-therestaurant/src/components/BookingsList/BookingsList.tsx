import { useEffect, useState } from "react";
import { BookingCard } from "../BookingCard/BookingCard";
import "./BookingsList.css";
import { getBookings, getBookingsByDate } from "../../services/dataService";
import { DateTime } from "luxon";
import { Booking } from "../../models/Booking";

export interface IFormHandling {
  openForm: () => void;
  closeForm: () => void;
}

export interface IBookingsListProps {
  date: Date;
  showAll: Boolean;
}

export const BookingsList = (props: IBookingsListProps) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [updateFormSwitch, setUpdateFormSwitch] = useState(false);

  useEffect(() => {
    updateBookings();
  }, [props.date, props.showAll]);
  console.log(bookings);

  async function updateBookings() {
    if (props.showAll) {
      setBookings(await getBookings());
    } else {
      setBookings(
        await getBookingsByDate(
          DateTime.fromJSDate(props.date).toFormat("yyyy-MM-dd")
        )
      );
    }
  }

  return (
    <div className="bookings-list">
      {bookings.map((booking, index) => (
        <BookingCard
          key={index}
          booking={booking}
          refreshBookings={() => updateBookings()}
        />
      ))}
    </div>
  );
};
