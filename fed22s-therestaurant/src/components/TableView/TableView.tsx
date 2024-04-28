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

    // sort into two four and six, move big groups to separate array
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

    if (updatedBookings.twoSeaters.length < 6) {
      let remaining = 6 - updatedBookings.twoSeaters.length;

      for (let i = 0; i < remaining; i++) {
        const emptyTable = {
          tableId: `t${updatedBookings.twoSeaters.length + 1}`,
          date: "n/a",
          timeSlot: null,
          guests: 0,
          name: "empty",
          email: "n/a",
          phonenumber: "n/a",
        };
        updatedBookings.twoSeaters.push(emptyTable);
      }
    }

    if (updatedBookings.fourSeaters.length < 8) {
      let remaining = 8 - updatedBookings.fourSeaters.length;

      for (let i = 0; i < remaining; i++) {
        const emptyTable = {
          tableId: `f${updatedBookings.fourSeaters.length + 1}`,
          date: "n/a",
          timeSlot: null,
          guests: 0,
          name: "empty",
          email: "n/a",
          phonenumber: "n/a",
        };
        updatedBookings.fourSeaters.push(emptyTable);
      }
    }

    if (updatedBookings.sixSeaters.length < 6) {
      let remaining = 6 - updatedBookings.sixSeaters.length;

      for (let i = 0; i < remaining; i++) {
        const emptyTable = {
          tableId: `s${updatedBookings.sixSeaters.length + 1}`,
          date: "n/a",
          timeSlot: null,
          guests: 0,
          name: "empty",
          email: "n/a",
          phonenumber: "n/a",
        };
        updatedBookings.sixSeaters.push(emptyTable);
      }
    }

    console.log("updatedBookings", updatedBookings);
    console.log("bigGroups", bigGroups);

    setExtendedBookings(updatedBookings);
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
            {extendedBookings.twoSeaters.map((booking) => {
              return <TwoSeats tableId={booking.tableId} booking={booking} />;
            })}
          </div>
        </div>

        <div className="grid four-seats-group gap-medium">
          {extendedBookings.sixSeaters.map((booking) => {
            return <SixSeats tableId={booking.tableId} booking={booking} />;
          })}
        </div>

        <div className="grid four-seats-round-group gap-medium">
          {/*  <FourSeats tableId="f1" />
          <FourSeats tableId="f2" />
          <FourSeats tableId="f3" />
          <FourSeats tableId="f4" />
          <FourSeats tableId="f5" />
          <FourSeats tableId="f6" />
          <FourSeats tableId="f7" />
          <FourSeats tableId="f8" /> */}
          {extendedBookings.fourSeaters.map((booking) => {
            return <FourSeats tableId={booking.tableId} booking={booking} />;
          })}
        </div>
      </div>
    </section>
  );
};
