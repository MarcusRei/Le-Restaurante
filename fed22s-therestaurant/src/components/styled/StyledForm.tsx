import styled from "styled-components";
import { HorizontalWrapper } from "./Wrappers";

export const StyledForm = styled.form`
  position: absolute;
  top: -39em;
  background-color: #989898ab;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  z-index: 10;

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
