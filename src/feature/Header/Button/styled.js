import styled from "styled-components";

export const StyledButton = styled.button`
    color:  ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.woodSmoke};
    border-radius: 24px;
    font-size: 14px;
    font-weight: 600;
    padding: 14px 24px;
    text-align: center;
    cursor: pointer;
    transition: transform linear;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        font-size: 12px;
        padding: 8px 12px;
        height: 34px;
    }

    &:focus {
        filter: brightness(140%);
    }

    &:hover {
        transform: scale(1.1);
    }

    &.active {
        border: 1px solid ${({ theme }) => theme.color.white};
    }
`;