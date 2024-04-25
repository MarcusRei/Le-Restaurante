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
          <div className="spacing medium" />
          <div className="two-seats-group full-width flex-row justify-center gap-medium">
            <TwoSeats />
            <TwoSeats />
            <TwoSeats />
            <TwoSeats />
          </div>
        </div>

        <div className="grid four-seats-group gap-medium">
          <FourSeats />
          <FourSeats />
          <FourSeats />
          <FourSeats />
          <FourSeats />
          <FourSeats />
        </div>

        <div className="grid four-seats-round-group gap-medium">
          <FourSeatsRound />
          <FourSeatsRound />
          <FourSeatsRound />
          <FourSeatsRound />
          <FourSeatsRound />
          <FourSeatsRound />
          <FourSeatsRound />
          <FourSeatsRound />
        </div>
      </div>
    </section>
  );
};
