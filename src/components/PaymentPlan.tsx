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

export default function PaymentPlan({ paymentPlanChange, initialState }: any) {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    paymentPlanChange(state);
   //eslint-disable-next-line
  }, [state]);

  return (
    <InputWrapper data-testid="payment">
      <Title>Payment Plan</Title>
      <Input
        label={"Mortgage Amount"}
        initialState={state.mortgageAmount}
        onChange={(v: any) =>
          setState((prev: any) => {
            return { ...prev, mortgageAmount: v };
          })
        }
      />
      <Input
        label={"Interest Rate"}
        initialState={state.interestRate}
        onChange={(v: any) =>
          setState((prev: any) => {
            return { ...prev, interestRate: v };
          })
        }
      />
      <>
        <Dropdown
          label={"Amortization Period"}
          initialState={state.authorizationPeriod.yr}
          onChange={(v: any) => {
            setState((prev: any) => {
              return {
                ...prev,
                authorizationPeriod: {
                  yr: v,
                  mt: prev.authorizationPeriod.mt,
                },
              };
            });
          }}
          data={Array.from({ length: 24 }, (_, i) => {
            return {
              value: i + 1,
              label: `${i + 1} yr`,
            };
          })}
        >
          <Dropdown
            label={null}
            initialState={state.authorizationPeriod.mt}

            onChange={(v: any) => {
              setState((prev: any) => {
                return {
                  ...prev,
                  authorizationPeriod: {
                    mt: v,
                    yr: prev.authorizationPeriod.yr,
                  },
                };
              });
            }}
            data={Array.from({ length: 12 }, (_, i) => {
              return {
                value: i + 1,
                label: `${i + 1} month`,
              };
            })}
          />
        </Dropdown>
      </>
      <Dropdown
        label={"Payment Frequency"}
        initialState={state.paymentFrequency}
        onChange={(v: any) => {
          setState((prev: any) => {
            return {
              ...prev,
              paymentFrequency: v,
            };
          });
        }}
        data={[
          { value: 24, label: "Semi Monthly" },
          { value: 12, label: "Monthly" },
        ]}
      />
      <Dropdown
        label={"Terms"}
        initialState={state.terms}
        onChange={(v: any) => {
          setState((prev: any) => {
            return {
              ...prev,
              terms: v,
            };
          });
        }}
        data={Array.from({ length: 10 }, (_, i) => {
          return {
            value: i + 1,
            label: `${i + 1} yr`,
          };
        })}
      />
    </InputWrapper>
  );
}
