import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Table from "./components/Table";

import PaymentPlan from "./components/PaymentPlan";
import PrepaymentPlan from "./components/PrepaymentPlan";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;


function App() {
  // default state
  const [state, setState] = React.useState({
    prepayment: {
      prepayment: 0,
      prepaymentFrequency: 0,
    },
    payment: {
      mortgageAmount: 100000,
      interestRate: 5,
      authorizationPeriod: {
        yr: 10,
        mt: 0,
      },
      paymentFrequency: 24,
      terms: 1,
    },
  });

  const prepaymentChange = (v: any) => {
    setState((prev) => {
      return { ...prev, prepayment: v };
    });
  };
  const paymentPlanChange = (v: any) => {
    setState((prev) => {
      return { ...prev, payment: v };
    });
  };

  const calculateMonthlyPayment = () => {
    // M = P [ i(1 + i)n ] / [ (1 + i)n - 1]

    const monthlyInterest = state.payment.interestRate / (12 * 100); // i
    const totalMonthsRequired =
      state.payment.authorizationPeriod.yr * state.payment.paymentFrequency; // n

    // (1 + i)n
    const intermediatoryExponent = Math.pow(
      1 + monthlyInterest,
      totalMonthsRequired
    );

    //(i*intermediatoryExponent)/(intermediatoryExponent-1)
    const monthlyMortgage =
      ((state.payment.mortgageAmount - state.prepayment.prepayment) *
        (monthlyInterest * intermediatoryExponent)) /
      (intermediatoryExponent - 1);

    return monthlyMortgage;
  };

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Main>
        <PaymentPlan
          paymentPlanChange={paymentPlanChange}
          initialState={state.payment}
        />
        <PrepaymentPlan
          prepaymentChange={prepaymentChange}
          initialState={state.prepayment}
        />
      </Main>
      <TableWrapper>
        <Table
          columns={[
            {
              id: "category",
              label: "Category",
            },
            {
              id: "term",
              label: "Term",
            },
          ]}
          data={[
            {
              term:
                state.payment.authorizationPeriod.yr *
                state.payment.paymentFrequency,
              category: "Number of Payments",
            },
            {
              term: calculateMonthlyPayment(),
              category: "Mortgage Payment",
            },
            {
              term: state.prepayment.prepayment,
              category: "Prepayment",
            },
            {
              term: state.payment.mortgageAmount,
              category: "Principal Payments",
            },
          ]}
        />
      </TableWrapper>
    </div>
  );
}

export default App;
