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

export default function InputComponent({ onChange, label, initialState = 1 }: any) {
  const [value, setValue] = React.useState(initialState);
  return (
    <InputWrapper>
      <InputLabel>{label}:</InputLabel>
      <Input
        data-testid="input"
        value={value}
        type="number"
        aria-label={label}
        onChange={(e) => {
          const val = Number(e.target.value);
          if(val === 0) return alert("Please use value greater than 0")
          setValue(val);
          onChange(val);
        }}
        placeholder={label}
      />
    </InputWrapper>
  );
}
