import React from "react";
import Input from "./Input";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  margin: 10px;
  height: 250px;
  width: 330px;
`;
const Title = styled.div`
  background: green;
  border-top-right-radius: 10px;
  padding: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 30px;
  font-size: 25px;
  color: white;
`;

export default function Prepayment() {
  return (
    <InputWrapper>
      <Title>Prepayment Plan</Title>
      <Input label={"Prepayment Amount"} />
      <Dropdown label={"Prepayment Frequency"} />
      <Input label={"Start With Payment"} />
    </InputWrapper>
  );
}
