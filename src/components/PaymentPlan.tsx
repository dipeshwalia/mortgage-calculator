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

export default function PaymentPlan() {
  return (
    <InputWrapper>
      <Title>Payment Plan</Title>
      <Input label={"Mortgage Amount:"} />
      <Input label={"Interest Rate:"} />
      <>
        <Dropdown label={"Amortization Period"}>
          <Dropdown label={null} />
        </Dropdown>
      </>
      <Dropdown label={"Payment Frequency"} />
      <Dropdown label={"Terms"} />
    </InputWrapper>
  );
}
