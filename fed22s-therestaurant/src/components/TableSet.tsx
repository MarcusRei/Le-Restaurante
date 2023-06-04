import { BottomChair, ChairsWrapper, TopChair } from "./styled/Chairs";
import { Table } from "./styled/Table";
import { TableWrapper, TableviewWrapper } from "./styled/AdminWrappers";

export const TableSet = () => {
  return (
    <TableWrapper>
      <ChairsWrapper>
        <TopChair></TopChair>
        <TopChair></TopChair>
        <TopChair></TopChair>
      </ChairsWrapper>
      <Table></Table>
      <ChairsWrapper>
        <BottomChair></BottomChair>
        <BottomChair></BottomChair>
        <BottomChair></BottomChair>
      </ChairsWrapper>
    </TableWrapper>
  );
};
