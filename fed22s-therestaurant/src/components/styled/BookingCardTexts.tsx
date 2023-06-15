import styled from "styled-components";

export const ThinText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: #424242;
  font-weight: 100;
  margin: 0;
`;

export const ThickText = styled(ThinText)`
  font-weight: 600;
`;
