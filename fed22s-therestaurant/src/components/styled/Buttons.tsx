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

/* export const ContactButton = styled.button`
  background-color: transparent;
  border: 1px solid #424242;
  border-radius: 10px;
  padding: 0.2em 1em;

  &:hover {
    cursor: pointer;
    background-color: #c3c3c3;
  }
`; */

export const CallUsButton = styled(Button)`
  border: 1px solid lightgray;
  background-color: white;
  font-weight: 600;

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
  font-weight: 600;

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
  margin-bottom: 3em;
`;

export const AdminButton = styled.button`
  background-color: #eaeaea;
  border: 1px solid #424242;
  border-radius: 10px;
  padding: 0.2em 1em;
  width: 90px;

  &:hover {
    cursor: pointer;
    background-color: #c3c3c3;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: #29292996;
  width: 50px;
  height: 50px;
  right: 50px;
  top: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: #6f6f6f95;
  }
`;
