import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-size: 45px;
`;

const LogoWrapper = styled.div`
  width: 50px;
  margin-right: 10px;
`;

export default function Header() {
  return (
    <TitleWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <Title> Mortgage Calculator</Title>
    </TitleWrapper>
  );
}
