import { StyledErrorContainer, StyledErrorIcon, StyledErrorHeader, StyledErrorParagraph, HomepageButton } from "./styled";
import errorIcon from "../../images/errorIcon.png";

export const Error = () => {
    return (
        <div>
            <StyledErrorContainer>
            <StyledErrorIcon src={errorIcon} alt="error icon" />
            <StyledErrorHeader>Ooops! Something went wrong</StyledErrorHeader>
            <StyledErrorParagraph>Please check your network connection<br/> and try again</StyledErrorParagraph>
            <HomepageButton src="strona glowna!!!!">Back to home page</HomepageButton>
        </StyledErrorContainer>
        </div>
    );
};

export default Error;