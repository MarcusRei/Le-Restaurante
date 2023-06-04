import { TableSet } from "./TableSet";
import { BottomChair, ChairsWrapper, TopChair } from "./styled/Chairs";
import { Table } from "./styled/Table";
import {
  AdminWrapper,
  LowerTableWrapper,
  TableWrapper,
  TableviewWrapper,
  UpperTableWrapper,
} from "./styled/AdminWrappers";
import { BookingsList } from "./BookingsList";

export const Admin = () => {
  return (
    <AdminWrapper>
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
      <BookingsList></BookingsList>
    </AdminWrapper>
  );
};
