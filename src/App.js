import Section from "./common/Section";
import Header from "./feature/Header";
import Movies from "./feature/MoviesList";

function App() {
  return (
    <>
      <Header />
      <Section title="Popular movies" body={<Movies />} />
      <Section title="Popular movies" body={<Movies />} />
    </>
  );
}

export default App;
