import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";

import PaymentPlan from "./components/PaymentPlan";
import PrepaymentPlan from "./components/PrepaymentPlan";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const Submit = styled.button`
  background: #425394;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Main>
        <PaymentPlan />
        <PrepaymentPlan />
      </Main>
      <SubmitWrapper>
        <Submit> Calculate ....</Submit>
      </SubmitWrapper>
    </div>
  );
}

export default App;
