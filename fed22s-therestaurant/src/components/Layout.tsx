import { Outlet } from "react-router-dom";
import {
  LayoutWrapper,
  OutletWrapper,
  VerticalWrapper,
  Wrapper,
} from "./styled/Wrappers";
import { Footer } from "./Footer";
import { ImageWrapper, StyledImage } from "./styled/ImageStyling";
import { Navigation } from "./Navigation";
import { ActionType, AdminReducer } from "../reducers/AdminReducer";
import { useEffect, useReducer } from "react";
import { AdminContext } from "../contexts/AdminContext";
import { AdminDispatchContext } from "../contexts/AdminDispatchContext";
import { getBookings } from "../services/dataService";

export const Layout = () => {
  const [bookings, dispatch] = useReducer(AdminReducer, []);

  useEffect(() => {
    const getData = async () => {
      const bookingsFromApi = await getBookings();
      dispatch({
        type: ActionType.FILTER_BOOKINGS,
        payload: JSON.stringify(bookingsFromApi),
      });
    };
  }, []);

  return (
    <>
      <AdminContext.Provider value={{ bookings, dispatch }}>
        <AdminDispatchContext.Provider value={dispatch}>
          <VerticalWrapper>
            <LayoutWrapper>
              <ImageWrapper>
                <StyledImage src="/assets/restaurant-4011989_1280.jpg"></StyledImage>
              </ImageWrapper>
              <OutletWrapper>
                <Navigation></Navigation>
                <Outlet></Outlet>
              </OutletWrapper>
            </LayoutWrapper>
            <Footer></Footer>
          </VerticalWrapper>
        </AdminDispatchContext.Provider>
      </AdminContext.Provider>
    </>
  );
};
