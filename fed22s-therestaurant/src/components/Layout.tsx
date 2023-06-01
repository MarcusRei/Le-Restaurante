import { Outlet } from "react-router-dom";
import { Wrapper } from "./styled/Wrapper";
import { ImageBackground } from "./styled/ImageBackground";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <ImageBackground>
        <Wrapper>
          <Outlet></Outlet>
        </Wrapper>
      </ImageBackground>
      <Footer></Footer>
    </>
  );
};
