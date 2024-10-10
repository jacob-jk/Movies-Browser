import { StyledHeader, WrapperPrimary, Wrapper, Title, Image, Navigation, NavigationList } from "./styled";
import Button from "./Button";
import Search from "./Search";
import videoIcon from "../../images/videoIcon.png";

export const Header = () => {
    return (
        <StyledHeader>
            <WrapperPrimary>
                <Wrapper>
                    <Image src={videoIcon} alt="video icon" />
                    <Title>Movies Browser</Title>
                </Wrapper>
                <Navigation>
                    <NavigationList>
                        <li>
                            <Button content="Movies" />
                        </li>
                        <li>
                            <Button content="People" />
                        </li>
                    </NavigationList>
                </Navigation>
            </WrapperPrimary>
            <Search />
        </StyledHeader>
    );
};

export default Header;