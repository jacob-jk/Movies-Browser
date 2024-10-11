import { Wrapper } from "../../feature/MoviesList/styled";

const Section = ({ title, body }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {body}
    </Wrapper>
  );
};

export default Section;
