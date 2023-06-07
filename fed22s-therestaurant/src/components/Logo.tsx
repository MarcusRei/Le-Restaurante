import { FrontPageHeading } from "./styled/HeadingStyles";
import { HeadingLine, HeadingLineWrapper } from "./styled/HeadingLine";

export const Logo = () => {
  return (
    <>
      <HeadingLineWrapper>
        <FrontPageHeading>
          <HeadingLine></HeadingLine>
          Le RESTAURANTE
          <HeadingLine></HeadingLine>
        </FrontPageHeading>
      </HeadingLineWrapper>
    </>
  );
};
