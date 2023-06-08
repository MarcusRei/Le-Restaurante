import { Outlet } from "react-router-dom";
import {
  HorizontalWrapper,
  LayoutWrapper,
  NavWrapper,
  OutletWrapper,
  VerticalWrapper,
  Wrapper,
} from "./styled/Wrappers";
import { ImageBackground } from "./styled/ImageBackground";
import { Footer } from "./Footer";
import { ImageWrapper, StyledImage } from "./styled/ImageStyling";
import { StyledFooter } from "./styled/StyledFooter";
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
        <StyledFooter></StyledFooter>
      </VerticalWrapper>
      <Footer></Footer>
    </>
  );
};
