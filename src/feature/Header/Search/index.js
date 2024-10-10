import { Wrapper, Input } from "./styled";
import { ReactComponent as SearchIcon } from "../../../images/searchIcon.svg";

export const Search = () => {
    return (
        <Wrapper>
            <SearchIcon />
            <Input placeholder="Search for movies..." />
        </Wrapper>
    );
};

export default Search;