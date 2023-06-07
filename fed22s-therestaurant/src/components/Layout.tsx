import { Outlet } from "react-router-dom";
import { HorizontalWrapper, NavWrapper, Wrapper } from "./styled/Wrappers";
import { ImageBackground } from "./styled/ImageBackground";
import { Footer } from "./Footer";
import { ImageWrapper, StyledImage } from "./styled/ImageStyling";
import { StyledFooter } from "./styled/StyledFooter";
import { Navigation } from "./Navigation";

export const Layout = () => {
  return (
    <>
      <HorizontalWrapper>
        <ImageWrapper>
          <StyledImage src="/assets/restaurant-4011989_1280.jpg"></StyledImage>
          <NavWrapper>
            <Navigation></Navigation>
          </NavWrapper>
        </ImageWrapper>
        <Outlet></Outlet>
      </HorizontalWrapper>

      <StyledFooter></StyledFooter>
    </>
  );
};
