import React from "react";
import styled from "styled-components";

const TableWrapper = styled.table`
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  width: 600px;
  border-radius: 1em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  background-color: white;
`;
const TableHeaderRow = styled.tr`
  text-align: left;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
`;

const TableHead = styled.th`
  padding: 1em;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: space-around;
`;

const TableDefinition = styled.td`
  padding: 1em 1em;
  align-self: flex-end;
`;
export default function Table({ columns = [], data = [] }: any) {
  return (
    <TableWrapper data-testid="table">
      <thead>
        <TableHeaderRow>
          {columns.map((v: any) => {
            return <TableHead key={v.id}>{v.label}</TableHead>;
          })}
        </TableHeaderRow>
      </thead>
      <tbody>
        {data.map((v: any, i: any) => {
          console.log(v);
          return (
            <TableRow key={i}>
              {columns.map((m: any, i: any) => {
                console.log(m.id);
                console.log(v);
                return <TableDefinition key={i}>{v[m.id]}</TableDefinition>;
              })}
            </TableRow>
          );
        })}
      </tbody>
    </TableWrapper>
  );
}
