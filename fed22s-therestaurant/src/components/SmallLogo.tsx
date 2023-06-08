import { FooterHeaderLogo } from "./styled/StyledFooter";
import {
  HeadingLine,
  HeadingLineWrapper,
} from "./styled/HeadingStyles";

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
