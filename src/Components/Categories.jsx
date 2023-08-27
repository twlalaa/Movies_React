//Data
import { movies } from "../data";

// Styles
const styles = {
  ulStyles:
    "flex flex-wrap justify-center rounded-lg font-poppins bg-slate-900 p-4 mb-5",
  liStyles:
    "border border-white mr-2 mb-2 md:mb-0 bg-white text-sm px-2 py-1 rounded active:scale-95 transition-all hover:bg-transparent hover:text-white duration-200 cursor-pointer",
};

const Categories = (props) => {
  const genresArray = [
    "All",
    ...new Set(movies.flatMap((movie) => movie.genres)),
    "Show Watch List",
  ];
  return (
    <div className="relative">
      <ul className={styles.ulStyles}>
        {genresArray.map((genre, index) => (
          <li
            onClick={() => props.click(genre)}
            className={styles.liStyles}
            key={index}
            genre={genre}
          >
            {genre}
          </li>
        ))}
      </ul>
      <div
        className={`border border-white mr-2 mb-2 md:mb-0 text-sm px-2 py-1 rounded text-white bg-red-400 absolute top-[16px] right-[20px]`}
      >
        In My Watch List:
        <span className="ml-2  bg-white rounded-full text-red-600 p-1 w-[10px] h-[10px] font-medium pl-2 pr-2 mt-4">
          {props.length}
        </span>
      </div>
    </div>
  );
};

export default Categories;
