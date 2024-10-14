import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 56px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 24px 16px;
  }
`;

export const Header = styled.h1`
  font-size: 36px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    font-weight: 600;
  }
`;
