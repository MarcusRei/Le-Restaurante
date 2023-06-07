import { Outlet } from "react-router-dom";
import { HorizontalWrapper, Wrapper } from "./styled/Wrapper";
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
        </ImageWrapper>
        <Outlet></Outlet>
      </HorizontalWrapper>

      <StyledFooter></StyledFooter>
    </>
  );
};
