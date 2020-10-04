import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid gray;
`;
const InputLabel = styled.div`
  width: 180px;
  padding: 10px;
  margin-bottom: 10px;
`;

export default function InputComponent({ onChange, label }: any) {
  return (
    <InputWrapper>
      <InputLabel>{label}:</InputLabel>
      <Input
        value={12}
        type="number"
        aria-label="min"
        onChange={(e) => {
          const val = e.target.value;
          console.log(val);
        }}
        placeholder={`Min `}
      />
    </InputWrapper>
  );
}
