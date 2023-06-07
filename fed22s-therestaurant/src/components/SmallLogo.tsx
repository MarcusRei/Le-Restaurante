import { FooterHeaderLogo, FrontPageHeading } from "./styled/Heading";
import {
  HeadingLine,
  HeadingLineWrapper,
} from "./styled/HeadingLine";

export const SmallLogo = () => {
  return (
    <>
      <HeadingLineWrapper>
        <FooterHeaderLogo>
          <HeadingLine></HeadingLine>
          Le RESTAURANTE
          <HeadingLine></HeadingLine>
        </FooterHeaderLogo>
      </HeadingLineWrapper>
    </>
  );
};
