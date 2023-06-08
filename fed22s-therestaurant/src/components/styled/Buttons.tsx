import styled from "styled-components";

export const Button = styled.button`
  font-family: "Italiana", serif;
  font-size: 15px;
  border: 1px solid lightgrey;
  background-color: white;
  padding: 10px;
  @media (min-width: 844px) {
    border: 1.5px solid lightgray;
    height: 40px;
  }
`;

export const CallUsButton = styled(Button)`
  border: 1px solid lightgray;
  background-color: white;
  @media (min-width: 844px) {
    border: 1.5px solid lightgray;
    width: 12em;
  }
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
export const BookingButton = styled(Button)`
  border: 1px solid lightgray;
  background-color: white;

  @media (min-width: 844px) {
    border: 1.5px solid lightgray;
    width: 14em;
  }
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const MailUsButton = styled(CallUsButton)`
  height: auto;
`;
