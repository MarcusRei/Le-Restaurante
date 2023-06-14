import styled from "styled-components";
import { CenteringWrapper, HorizontalWrapper } from "./Wrappers";

export const StyledForm = styled.form`
  position: relative;
  background-color: #989898ab;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  z-index: 10;
  width: 80%;

  @media (min-width: 844px) {
    top: 0;
    width: 50%;
    background-color: #e1e1e1;
    position: relative;

    p {
      font-size: larger;
    }
  }
`;

export const FormParagraph = styled.p`
  width: 70%;
  font-weight: 600;
`;

export const FormLabel = styled.label`
  font-weight: 600;
`;

export const PolicyWrapper = styled(HorizontalWrapper)`
  gap: 1em;
  flex-direction: row;

  @media (min-width: 844px) {
    position: relative;
  }
`;

export const DateTimeText = styled.p`
  font-weight: 600;
  font-size: 1em;
  margin: 0;
`;

export const CenteringWrapperForm = styled(CenteringWrapper)`
  //flex-direction: column;
`;

export const StyledAdminUpdateForm = styled(StyledForm)`
  position: relative;
  font-size: medium;
  width: 30%;
`;

export const TinyText = styled.p`
  padding: 0;
  margin: 0;
  font-size: x-small;

  font-weight: 600;
`;
