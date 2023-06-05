import styled from "styled-components";
import { HorizontalWrapper } from "./Wrapper";

export const StyledForm = styled.form`
  background-color: #989898ce;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;

  @media (min-width: 844px) {
    width: 50%;
    background-color: #efeaea;
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
`;
