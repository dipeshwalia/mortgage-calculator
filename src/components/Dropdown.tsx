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

export default function Dropdown({
  label = "I am Select",
  children,
  initialState = 25,
  data = [],
  onChange,
}: any) {
  const [value, setValue] = React.useState(initialState);

  return (
    <SelectWrapper>
      {label && <SelectLabel> {label}: </SelectLabel>}
      <Select
        data-testid={"dropdown"}
        value={value}
        onChange={(e) => {
          const val = Number(e.target.value);
          console.log(e.target.value)
          setValue(val);
          onChange(val);
        }}
      >
        <option selected disabled key={"default"}>
          Choose an option
        </option>
        {data.map((v: any) => {
          return (
            <option key={v.value} value={v.value}>
              {v.label}
            </option>
          );
        })}
      </Select>
      {children}
    </SelectWrapper>
  );
}
