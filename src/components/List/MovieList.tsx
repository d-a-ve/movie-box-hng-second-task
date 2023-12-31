import MovieCard from "@components/Card/MovieCard";
import Loader from "@components/Loader/Loader";
import BackButton from "@components/Button/BackButton";
import { IGetTMDBErrorResponse } from "@customTypes/IGetTMDBErrorResponse";
import { IGetTMDBResponse } from "@customTypes/IGetTMDBResponse";
import { TMoviesListProps } from "@customTypes/TMoviesListProps";
import useFetchQuery from "@hooks/useFetchQuery";

const MovieList = ({ headingElement, queryId, url }: TMoviesListProps) => {
  const { status, data } = useFetchQuery<
    IGetTMDBResponse,
    IGetTMDBErrorResponse
  >(queryId, url);
  const slicedData = data?.results.slice(0, 10);
  return (
    <div className="grid-center mb-12">
      {status === "loading" && <Loader />}
      {status === "error" && (
        <div className="my-8 flex flex-col items-center gap-4">
          <p>Uh oh, something went wrong!</p>
          <BackButton />
        </div>
      )}

      {status === "success" && data.results.length != 0 && slicedData && (
        <>
          <div className="mb-6">{headingElement}</div>
          <div className="grid grid-cols-4 gap-x-10 gap-y-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {slicedData.map((movie) => (
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
