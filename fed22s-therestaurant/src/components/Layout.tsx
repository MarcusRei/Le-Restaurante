import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation/Navigation";

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
          <Outlet></Outlet>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};
