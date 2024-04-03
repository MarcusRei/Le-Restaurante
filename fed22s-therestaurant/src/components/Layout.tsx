import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation/Navigation";
import { Booking } from "../models/Booking";
import { BookingsContext } from "../contexts/BookingsContext";

export const Layout = () => {
  return (
    <div className="layout">
      <div className="layout flex-row">
        <article className="cover-image-wrapper position-relative">
          <img
            className="cover-image position-absolute"
            src="/assets/restaurant-4011989_1280.jpg"
            alt="Uteservering"
          />
        </article>
        <section className="outlet">
          <Navigation></Navigation>
          <BookingsContext.Provider value={[]}>
            <Outlet></Outlet>
          </BookingsContext.Provider>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};
