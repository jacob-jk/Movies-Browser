import Section from "./common/Section";
import Header from "./feature/Header";
import Movies from "./feature/MoviesList";

function App() {
  return (
    <>
      <Header />
      <Section tittle="Popular movies" body={<Movies />} />
    </>
  );
}

export default App;
