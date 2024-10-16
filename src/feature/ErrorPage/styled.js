import styled from "styled-components";


export const StyledErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    top: 418px;
    left: 664px;
    opacity: 0px;
    margin-top: 180px;

    @media(max-width:1080px){
        margin-top: 100px;
    }

    @media(max-width:500px){
        margin-top: 70px;
    }
`;

export const StyledErrorIcon = styled.img`
    width: 120px;
    height: 120px;
    top: 274px;
    left: 900px;
    gap: 0px;
    opacity: 0px;
    
    @media(max-width: 1080px){
        width: 90px;
        height: 90px;
    }

    @media(max-width: 500px){
        width: 60px;
        height: 60px;
    }
`;

export const StyledErrorHeader = styled.h1`
    height: 44px;
    gap: 0px;
    opacity: 0px;
    font-size: 36px;
    font-weight: 600;
    line-height: 43.2px;

    @media(max-width:1080px){
        font-size: 26px;
        height: 22px;
    }

    @media(max-width:500px){
        font-size: 17px;
        height: 22px;
    }
`;

export const StyledErrorParagraph = styled.p`
    width: 426.53px;
    height: 58px;
    gap: 0px;
    opacity: 0px;
    font-size: 22px;
    font-weight: 500;
    line-height: 28.6px;

    @media(max-width:1080px){
        font-size: 18px;
        width: auto;
    }

    @media(max-width:1080px){
        font-size: 13px;
    }
`;

export const HomepageButton = styled.a`
    padding: 16px 24px 16px 24px;
    gap: 10px;
    border-radius: 5px;
    opacity: 0px;
    background: #0044CC;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    color: #fff;

    @media(max-width:1080px){
        font-size: 13px;
        line-height: 15px;
    }

    @media(max-width:500px){
        font-size: 11px;
        line-height: 10px;
    }
`;