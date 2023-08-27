// Hooks
import { useState } from "react";

//Data
import { movies as data } from "./data";

// Components
import Categories from "./Components/Categories";
import Container from "./Components/Container";
import Movies from "./Components/Movies";

const App = () => {
  const [list, setList] = useState([]);
  const changeList = (movie) => {
    const newList = [...list, movie];
    setList(newList);
  };
  console.log(list);

  const deleteFromList = (movie) => {
    const newList = list.filter((el) => el.name !== movie.name);
    setList(newList);
  };

  const [movies, setMovies] = useState(data);
  const filterData = (genre) => {
    if (genre === "All") {
      setMovies(data);
      return;
    }
    if (genre === "Show Watch List") {
      setMovies(list);
      return;
    }
    const filteredMovies = [
      ...data.filter((movie) => movie.genres.includes(genre)),
    ];
    setMovies(filteredMovies);
  };
  return (
    <Container>
      <Categories length={list.length} click={filterData} />
      <Movies
        delete={deleteFromList}
        list={list}
        click={changeList}
        movies={movies}
      />
    </Container>
  );
};

export default App;
