import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";
import CardHeader from "./CardHeader";
import { TSearchCard } from "@customTypes/TSearchCard";

const SearchCard = ({
  moviePoster,
  releaseDate,
  movieTitle,
  movieId,
  clickFunction,
}: TSearchCard) => {
  return (
    <Link to={`/movies/${movieId}`} onClick={clickFunction}>
      <article className="flex items-center justify-start gap-3 px-2 py-1.5 hover:bg-secondary-500">
        <CardHeader isSearchCard={true} moviePoster={moviePoster} />
        <CardDetails
          isSearchCard={true}
          movieTitle={movieTitle}
          releaseDate={releaseDate}
        />
      </article>
    </Link>
  );
};

export default SearchCard;
