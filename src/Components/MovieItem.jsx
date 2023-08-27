import React from "react";

//Icons
import { BsBookmarkPlusFill } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

const MovieItem = (props) => {
  const sendTask = () => {
    props.click(props.movieObj);
  };

  const deleteMovie = () => {
    props.delete(props.movieObj);
  };

  console.log(props.list);
  return (
    <div className="font-poppins relative">
      {!props.list.includes(props.movieObj) && (
        <BsBookmarkPlusFill
          onClick={sendTask}
          className="cursor-pointer text-yellow-600 absolute top-0 left-[-4px] text-[30px]"
        />
      )}
      {props.list.includes(props.movieObj) && (
        <BsBookmarkCheck
          onClick={deleteMovie}
          className="cursor-pointer text-yellow-600 absolute top-0 left-[-4px] text-[30px]"
        />
      )}
      <div className="mb-2 ">
        <img className="h-[400px] rounded-[5px]" src={props.image} alt="" />
      </div>
      <h1 className="text-lg text-gray-900">{props.name}</h1>
      <p className="text-blue-500 text-sm">{props.genres.join(", ")}</p>
      <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-400 px-5 py-1 rounded-full text-sm font-medium border border-black">
        {props.imdb}
      </span>
    </div>
  );
};

export default MovieItem;
