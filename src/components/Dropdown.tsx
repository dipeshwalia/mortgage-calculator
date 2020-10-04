import React from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  display: flex;
`;
const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;

  &:nth-child(2n-1) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const SelectLabel = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  width: 180px;
`;

export default function Dropdown({ label = "I am Select", children }: any) {
  return (
    <SelectWrapper>
      {label && <SelectLabel> {label}: </SelectLabel>}
      <Select>
        <option selected disabled>
          Choose an option
        </option>
        <option value="1">Pure CSS</option>
        <option value="2">No JS</option>
        <option value="3">Nice!</option>
      </Select>
      {children}
    </SelectWrapper>
  );
}
