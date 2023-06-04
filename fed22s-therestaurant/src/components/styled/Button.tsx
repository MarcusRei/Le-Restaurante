import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  @media (min-width: 844px) {
    border: 1.5px solid black;
    height: 40px;
    width: 100px;
    background-color: lightgray;
  }
`;

export const ContactButton = styled.button`
  background-color: transparent;
  border: 1px solid #424242;
  border-radius: 10px;
  padding: 0.2em 1em;

  &:hover {
    cursor: pointer;
    background-color: #c3c3c3;
  }
`;
