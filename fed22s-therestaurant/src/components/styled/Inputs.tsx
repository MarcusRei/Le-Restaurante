import styled from "styled-components";

export const TextInput = styled.input`
  display: block;
  border: 0.1em solid grey;
  border-radius: 0.6em;
  height: 2.2em;
  width: 20em;
  margin-bottom: 1.5em;
  background-color: white;
  @media (min-width: 844px) {
    background-color: #fafafa;
  }
`;

export const NumberInput = styled(TextInput)`
  display: block;
  width: 8em;
  margin-bottom: 2em;
  background-color: white;
  @media (min-width: 844px) {
    background-color: #ffffff;
  }
`;
