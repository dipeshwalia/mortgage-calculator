import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";

import PaymentPlan from "./components/PaymentPlan";
import PrepaymentPlan from "./components/PrepaymentPlan";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;

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
    </div>
  );
}

export default App;
