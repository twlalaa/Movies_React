// Components
import MovieItem from "./MovieItem";

const Movies = (props) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {props.movies.map((movie, index) => (
        <MovieItem
          movieObj={movie}
          click={props.click}
          name={movie.name}
          key={index}
          imdb={movie.imdb}
          image={movie.image}
          genres={movie.genres}
          list={props.list}
          delete={props.delete}
        />
      ))}
    </div>
  );
};

export default Movies;
