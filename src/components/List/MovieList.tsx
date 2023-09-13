import MovieCard from "@components/Card/MovieCard";
import Loader from "@components/Loader/Loader";
import { IGetTMDBErrorResponse } from "@customTypes/IGetTMDBErrorResponse";
import { IGetTMDBResponse } from "@customTypes/IGetTMDBResponse";
import { TMoviesListProps } from "@customTypes/TMoviesListProps";
import useFetchQuery from "@hooks/useFetchQuery";

const MovieList = ({ headingElement, queryId, url }: TMoviesListProps) => {
  const { status, data } = useFetchQuery<
    IGetTMDBResponse,
    IGetTMDBErrorResponse
  >(queryId, url);

  return (
    <div className="grid-center mb-12">
      {status === "loading" && <Loader />}
      {status === "error" && <p>Ah, something went wrong!!</p>}

      {status === "success" && data.results.length != 0 && (
        <>
          <div className="mb-6">{headingElement}</div>
          <div className="grid grid-cols-4 gap-x-10 gap-y-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {data.results.map((movie) => (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                imdbRating={movie.vote_average}
                releaseDate={movie.release_date}
                movieTitle={movie.title}
                moviePoster={movie.poster_path}
                movieGenres={movie.genre_ids}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieList;
