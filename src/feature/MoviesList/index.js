import {
  Poster,
  ListItem,
  List,
  Pager,
  Button,
  PageInfo,
  Header,
  MovieName,
  MovieYear,
  MovieGenre,
  MovieRate,
  StarIcon,
  Score,
  Votes,
  PageInfoStyled,
} from "./styled";
import poster from "../../images/poster.png";
import star from "../../images/star.png";

const Movies = () => (
  <>
    <Header />
    <List>
      <ListItem>
        <Poster src={poster} alt="" />
        <MovieName>Tytuł filmu</MovieName>
        <MovieYear>2024</MovieYear>
        <MovieGenre>Gatunek</MovieGenre>
        <MovieRate>
          <StarIcon src={star} alt="" />
          <Score>7,8</Score>
          <Votes>35 votes</Votes>
        </MovieRate>
      </ListItem>
      <ListItem>
        <Poster src={poster} alt="" />
        <MovieName>Tytuł filmu</MovieName>
        <MovieYear>2024</MovieYear>
        <MovieGenre>Gatunek</MovieGenre>
        <MovieRate>
          <StarIcon src={star} alt="" />
          <Score>7,8</Score>
          <Votes>35 votes</Votes>
        </MovieRate>
      </ListItem>
      <ListItem>
        <Poster src={poster} alt="" />
        <MovieName>Tytuł filmu</MovieName>
        <MovieYear>2024</MovieYear>
        <MovieGenre>Gatunek</MovieGenre>
        <MovieRate>
          <StarIcon src={star} alt="" />
          <Score>7,8</Score>
          <Votes>35 votes</Votes>
        </MovieRate>
      </ListItem>
      <ListItem>
        <Poster src={poster} alt="" />
        <MovieName>Tytuł filmu</MovieName>
        <MovieYear>2024</MovieYear>
        <MovieGenre>Gatunek</MovieGenre>
        <MovieRate>
          <StarIcon src={star} alt="" />
          <Score>7,8</Score>
          <Votes>35 votes</Votes>
        </MovieRate>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <Poster src={poster} alt="" />
        <MovieName>Tytuł filmu</MovieName>
        <MovieYear>2024</MovieYear>
        <MovieGenre>Gatunek</MovieGenre>
        <MovieRate>
          <StarIcon src={star} alt="" />
          <Score>7,8</Score>
          <Votes>35 votes</Votes>
        </MovieRate>{" "}
      </ListItem>
      <ListItem>
        <Poster src={poster} alt="" />
        <MovieName>Tytuł filmu</MovieName>
        <MovieYear>2024</MovieYear>
        <MovieGenre>Gatunek</MovieGenre>
        <MovieRate>
          <StarIcon src={star} alt="" />
          <Score>7,8</Score>
          <Votes>35 votes</Votes>
        </MovieRate>{" "}
      </ListItem>
      <ListItem>
        <Poster src={poster} alt="" />
        <MovieName>Tytuł filmu</MovieName>
        <MovieYear>2024</MovieYear>
        <MovieGenre>Gatunek</MovieGenre>
        <MovieRate>
          <StarIcon src={star} alt="" />
          <Score>7,8</Score>
          <Votes>35 votes</Votes>
        </MovieRate>
      </ListItem>
      <ListItem>
        <Poster src={poster} alt="" />
        <MovieName>Tytuł filmu</MovieName>
        <MovieYear>2024</MovieYear>
        <MovieGenre>Gatunek</MovieGenre>
        <MovieRate>
          <StarIcon src={star} alt="" />
          <Score>7,8</Score>
          <Votes>35 votes</Votes>
        </MovieRate>
      </ListItem>
    </List>
    <Pager>
      <Button>≪ First</Button>
      <Button>＜ Previous</Button>
      <PageInfo>
        <PageInfoStyled>Page</PageInfoStyled>
        <PageInfoStyled $number>1</PageInfoStyled>
        <PageInfoStyled>of</PageInfoStyled>
        <PageInfoStyled $number>500</PageInfoStyled>
      </PageInfo>
      <Button>Next ＞</Button>
      <Button>Last ≫</Button>󠀾󠀾
    </Pager>
  </>
);

export default Movies;
