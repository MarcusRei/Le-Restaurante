import { useEffect, useState } from "react";
import { Booking } from "../../models/Booking";
import { FourSeats } from "../seats/FourSeats/FourSeats";
import { TwoSeats } from "../seats/TwoSeats/TwoSeats";
import "./TableView.css";
import { SixSeats } from "../seats/SixSeats/SixSeats";

interface ITableViewProps {
  bookings: Booking[];
}

interface extendedBooking extends Booking {
  tableId: string;
}

interface extendedBookings {
  twoSeaters: extendedBooking[];
  fourSeaters: extendedBooking[];
  sixSeaters: extendedBooking[];
}

export const TableView = (props: ITableViewProps) => {
  const [extendedBookings, setExtendedBookings] = useState<extendedBookings>({
    twoSeaters: [],
    fourSeaters: [],
    sixSeaters: [],
  });

  useEffect(() => {
    sortBookings();
  }, [props.bookings]);
  console.log("extended", extendedBookings);

  function sortBookings() {
    console.log("sort bookings");
    let updatedBookings: extendedBookings = {
      twoSeaters: [],
      fourSeaters: [],
      sixSeaters: [],
    };

    let bigGroups: extendedBooking[] = [];

    for (let i = 0; i < props.bookings.length; i++) {
      const booking = props.bookings[i];

      if (booking.guests <= 2) {
        updatedBookings.twoSeaters.push({
          ...booking,
          tableId: `t${updatedBookings.twoSeaters.length + 1}`,
        });
      }

      if (booking.guests > 2 && booking.guests <= 4) {
        updatedBookings.fourSeaters.push({
          ...booking,
          tableId: `f${updatedBookings.fourSeaters.length + 1}`,
        });
      }

      if (booking.guests > 4 && booking.guests <= 6) {
        updatedBookings.sixSeaters.push({
          ...booking,
          tableId: `s${updatedBookings.sixSeaters.length + 1}`,
        });
      }

      if (booking.guests > 6) {
        bigGroups.push({ ...booking, tableId: `b${bigGroups.length + 1}` });
      }
    }

    console.log("updatedBookings", updatedBookings);
    console.log("bigGroups", bigGroups);

    setExtendedBookings(extendedBookings);
  }

  function findTwoSeaters(tableId: string) {
    const bookings = extendedBookings.twoSeaters;
    for (let i = 0; i < bookings.length; i++) {
      const booking = bookings[i];
      if (booking.tableId === tableId) {
        return booking;
      }
    }
  }

  function findFourSeaters(tableId: string) {
    const bookings = extendedBookings.fourSeaters;
    for (let i = 0; i < bookings.length; i++) {
      const booking = bookings[i];
      if (booking.tableId === tableId) {
        return booking;
      }
    }
  }

  function findSixSeaters(tableId: string) {
    const bookings = extendedBookings.sixSeaters;
    for (let i = 0; i < bookings.length; i++) {
      const booking = bookings[i];
      if (booking.tableId === tableId) {
        return booking;
      }
    }
  }

  return (
    <section className="table-view">
      <article className="flex-row justify-center full-width">
        <h2>Bordsvy</h2>
      </article>

      <div className="grid">
        <div>
          <div className="spacing medium" />
          <div className="two-seats-group full-width flex-row justify-center gap-medium">
            <TwoSeats booking={findTwoSeaters("t1")!} />
            <TwoSeats booking={findTwoSeaters("t2")!} />
            <TwoSeats booking={findTwoSeaters("t3")!} />
            <TwoSeats booking={findTwoSeaters("t4")!} />
            <TwoSeats booking={findTwoSeaters("t5")!} />
            <TwoSeats booking={findTwoSeaters("t6")!} />
          </div>
        </div>

        <div className="grid four-seats-group gap-medium">
          <SixSeats />
          <SixSeats />
          <SixSeats />
          <SixSeats />
          <SixSeats />
          <SixSeats />
        </div>

        <div className="grid four-seats-round-group gap-medium">
          <FourSeats />
          <FourSeats />
          <FourSeats />
          <FourSeats />
          <FourSeats />
          <FourSeats />
          <FourSeats />
          <FourSeats />
        </div>
      </div>
    </section>
  );
};
