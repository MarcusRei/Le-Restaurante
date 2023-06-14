import styled from "styled-components";

export const AdminWrapper = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const TableviewWrapper = styled.div`
  background-color: #808080a0;
  display: flex;
  flex-direction: column;
  place-items: center;
  position: relative;
  width: 70vw;
  height: 98vh;
  border-radius: 15px;
`;

export const UpperTableWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  //background-color: blue;
`;

export const LowerTableWrapper = styled(UpperTableWrapper)`
  //background-color: red;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 60%;
  height: 60%;
`;

export const BookingsListWrapper = styled(TableviewWrapper)`
  width: 30vw;
`;

export const UpdateFormWrapper = styled.div`
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: #ff0000a8;
`;
