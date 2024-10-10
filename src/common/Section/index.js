import { Wrapper } from "../../feature/MoviesList/styled";

const Section = ({ tittle, body }) => {
  return (
    <Wrapper>
      <h1>{tittle}</h1>
      {body}
    </Wrapper>
  );
};

export default Section;
