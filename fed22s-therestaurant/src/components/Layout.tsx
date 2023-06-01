import { Outlet } from "react-router-dom";
import { Wrapper } from "./styled/Wrapper";
import { ImageBackground } from "./styled/ImageBackground";

export const Layout = () => {
  return (
    <>
      <ImageBackground>
        <Wrapper>
          <Outlet></Outlet>
        </Wrapper>
      </ImageBackground>
    </>
  );
};
