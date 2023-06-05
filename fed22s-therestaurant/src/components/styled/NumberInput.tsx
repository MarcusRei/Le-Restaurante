import styled from "styled-components";
import { TextInput } from "./TextInput";

export const NumberInput = styled(TextInput)`
  display: block;
  width: 8em;
  margin-bottom: 2em;
  background-color: white;
  @media (min-width: 844px) {
    background-color: #ffffff;
  }
`;
