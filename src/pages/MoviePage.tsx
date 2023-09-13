import MovieList from "@components/List/MovieList";
import MovieDetails from "@components/Movie/MovieDetails";
import MovieTrailer from "@components/Movie/MovieTrailer";
import useFetchQuery from "@hooks/useFetchQuery";
import { IGetTMDBErrorResponse } from "@customTypes/IGetTMDBErrorResponse";
import { IMovieResponse } from "@customTypes/IMovieResponse";
import { useParams } from "react-router-dom";
import Loader from "@components/Loader/Loader";

const MoviePage = () => {
  const { movieId } = useParams();
  const { status, data } = useFetchQuery<IMovieResponse, IGetTMDBErrorResponse>(
    ["movies", movieId as string],
    `movie/${movieId}?language=en-US`
  );

  return (
    <>
      <div className="grid-center mb-12">
        {status === "loading" && <Loader />}
        {status === "error" && <p>Ah, something went wrong!!</p>}
      </div>

      {status === "success" && (
        <>
          <MovieTrailer movieTitle={data.title} movieUrl={data.poster_path} />
          <MovieDetails
            movieTitle={data.title}
            releaseDate={data.release_date}
            movieRuntime={data.runtime}
            genres={data.genres}
            movieSynopsis={data.overview}
            productionCompanies={data.production_companies}
          />
          <MovieList
            headingElement={
              <h2 className="text-fs-1 font-medium text-black">
                Similar Movies
              </h2>
            }
            queryId={["similar movies"]}
            url={`movie/${movieId}/recommendations?language=en-US&page=1`}
          />
        </>
      )}
    </>
  );
};

export default MoviePage;
