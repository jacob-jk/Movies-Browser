import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${({ theme }) => theme.color.woodSmoke};
    color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        row-gap: 24px;
        padding: 24px 16px 16px;
    }
`;

export const WrapperPrimary = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        gap: 8px;
    }
`;

export const Image = styled.img`
    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        height: 20px;
        width: 20px;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        font-size: 13px;
    }
`;

export const Navigation = styled.nav`
    margin: 0 0 0 80px;
    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        margin: 0;
    }
`;

export const NavigationList = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: flex-end;
    gap: 16px;
    padding: 0;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        gap: 12px;
    }
`;