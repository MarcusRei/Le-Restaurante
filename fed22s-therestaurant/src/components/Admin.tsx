import { TableSet } from "./TableSet";
import { BottomChair, ChairsWrapper, TopChair } from "./styled/Chairs";
import { Table } from "./styled/Table";
import {
  LowerTableWrapper,
  TableWrapper,
  TableviewWrapper,
  UpperTableWrapper,
} from "./styled/tableviewWrappers";

export const Admin = () => {
  return (
    <TableviewWrapper>
      <UpperTableWrapper>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
      </UpperTableWrapper>
      <LowerTableWrapper>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
        <TableSet></TableSet>
      </LowerTableWrapper>
    </TableviewWrapper>
  );
};
