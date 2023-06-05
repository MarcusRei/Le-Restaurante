import { Outlet } from "react-router-dom";
import { Wrapper } from "./styled/Wrapper";
import { ImageBackground } from "./styled/ImageBackground";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

export const Layout = () => {
  return (
    <>
      <ImageBackground>
        <Navigation></Navigation>
        <Wrapper>
          <Outlet></Outlet>
        </Wrapper>
      </ImageBackground>
      <Footer></Footer>
    </>
  );
};
