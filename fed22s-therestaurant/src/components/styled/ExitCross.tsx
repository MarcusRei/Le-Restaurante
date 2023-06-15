import styled from "styled-components";

export const CrossBarOne = styled.div`
  /* position: relative;
  right: 0;
  background-color: black;
  width: 10px;
  height: 50px;
  transform: rotate(90deg); */
  position: absolute;
  left: 23px;
  content: " ";
  height: 33px;
  width: 3px;
  background-color: #a1a1a1;
  transform: rotate(45deg);
`;

export const CrossBarTwo = styled.div`
  /* position: relative;
  background-color: black;
  width: 10px;
  height: 50px; */
  position: absolute;
  left: 23px;
  content: " ";
  height: 33px;
  width: 3px;
  background-color: #a1a1a1;
  transform: rotate(-45deg);
`;
