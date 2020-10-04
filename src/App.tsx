import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import PaymentPlan from "./components/PaymentPlan";
import PrepaymentPlan from "./components/PrepaymentPlan";

function App() {
  return (
    <div>
      <GlobalStyles />
<PaymentPlan />
<PrepaymentPlan />
    </div>
  );
}

export default App;
