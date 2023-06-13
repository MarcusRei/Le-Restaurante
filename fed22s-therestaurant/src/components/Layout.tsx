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

export const Layout = () => {
  return (
    <>
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
    </>
  );
};
