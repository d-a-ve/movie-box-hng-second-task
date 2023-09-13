import MovieDetailsHeader from "./MovieDetailsHeader";
import MovieDetailsBody from "./MovieDetailsBody";
import MovieDetailsFooter from "./MovieDetailsFooter";
import { Genre, ProductionCompany } from "@customTypes/IMovieResponse";

const MovieDetails = ({
  movieTitle,
  releaseDate,
  movieRuntime,
  genres,
  movieSynopsis,
  productionCompanies,
}: {
  movieTitle: string;
  releaseDate: string;
  movieRuntime: number;
  genres: Genre[];
  movieSynopsis: string;
  productionCompanies: ProductionCompany[];
}) => {
  return (
    <div className="grid-center-placement mb-8">
      <MovieDetailsHeader
        movieRuntime={movieRuntime}
        movieTitle={movieTitle}
        genres={genres}
        releaseDate={releaseDate}
      />
      <MovieDetailsBody movieSynopsis={movieSynopsis} />
      <MovieDetailsFooter companies={productionCompanies} />
    </div>
  );
};

export default MovieDetails;
