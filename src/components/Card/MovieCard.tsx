import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";
import CardHeader from "./CardHeader";

const MovieCard = ({
  imdbRating,
  releaseDate,
  movieTitle,
  movieGenres,
  moviePoster,
  movieId,
}: {
  moviePoster: string | null;
  imdbRating: string | number;
  releaseDate: string;
  movieTitle: string;
  movieGenres: number[];
  movieId: number;
}) => {
  return (
    <Link to={`/movies/${movieId}`}>
      <article
        className="flex flex-col items-start justify-start gap-3 transition duration-200 hover:scale-105"
        data-testid="movie-card"
      >
        <CardHeader isSearchCard={false} moviePoster={moviePoster} />
        <CardDetails
          isSearchCard={false}
          imdbRating={imdbRating}
          releaseDate={releaseDate}
          movieTitle={movieTitle}
          genres={movieGenres}
        />
      </article>
    </Link>
  );
};

export default MovieCard;
