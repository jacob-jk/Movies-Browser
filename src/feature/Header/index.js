import { StyledHeader, Wrapper, Title, Image, List, Item } from "./styled";
import Button from "./Button";
import Search from "./Search";
import videoIcon from "../../images/videoIcon.png";

export const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <List>
                    <Item>
                        <Wrapper>
                            <Image src={videoIcon} alt="video icon" />
                            <Title>Movies Browser</Title>
                        </Wrapper>
                    </Item>
                    <Item>
                        <Button content="Movies" />
                    </Item>
                    <Item>
                        <Button content="People" />
                    </Item>
                </List>
            </nav>
            <Search />
        </StyledHeader>
    );
};

export default Header;