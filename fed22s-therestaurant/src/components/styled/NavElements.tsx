import styled from "styled-components";

export const NavElements = styled.ul`
  position: absolute;
  right: 0;
  top: 60px;
  //background-color: #fef7e5;
  list-style: none;
  width: 0px;
  height: calc(100vh - 50px);
  transition: all 0.3s ease-in;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
