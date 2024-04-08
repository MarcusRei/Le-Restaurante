import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation/Navigation";
import {
  BookingContext,
  BookingDispatchContext,
} from "../contexts/BookingContext";
import { useReducer } from "react";
import { BookingReducer } from "../reducers/BookingReducer";

export const Layout = () => {
  const [emptyBooking, dispatch] = useReducer(BookingReducer, {
    name: "",
    email: "",
    phonenumber: "",
    guests: 2,
    date: "",
    timeSlot: null,
  });
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
          <BookingDispatchContext.Provider value={dispatch}>
            <BookingContext.Provider value={emptyBooking}>
              <Outlet></Outlet>
            </BookingContext.Provider>
          </BookingDispatchContext.Provider>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};
