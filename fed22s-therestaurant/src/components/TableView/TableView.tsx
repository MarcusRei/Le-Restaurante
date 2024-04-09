import { FourSeats } from "../seats/FourSeats/FourSeats";
import { FourSeatsRound } from "../seats/FourSeatsRound/FourSeatsRound";
import { TwoSeats } from "../seats/TwoSeats/TwoSeats";
import "./TableView.css";

export const TableView = () => {
  return (
    <section className="table-view">
      <article className="flex-row justify-center full-width">
        <h2>Bordsvy</h2>
      </article>

      <div className="grid">
        <div>
          <TwoSeats />
          <TwoSeats />
          <TwoSeats />
          <TwoSeats />
        </div>

        <div>
          <FourSeats />
          <FourSeats />
        </div>
        <div>
          <FourSeatsRound />
          <FourSeatsRound />
        </div>
      </div>
    </section>
  );
};
