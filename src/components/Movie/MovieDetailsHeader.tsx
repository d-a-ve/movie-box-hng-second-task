import GenreTags from "@components/Genre/GenreTags";
import { Genre } from "@customTypes/IMovieResponse";

const MovieDetailsHeader = ({
  movieTitle,
  releaseDate,
  movieRuntime,
  genres,
}: {
  movieTitle: string;
  releaseDate: string;
  movieRuntime: number;
  genres: Genre[];
}) => {
  return (
    <div className="mb-8">
      <div className="mb-2 flex flex-wrap items-center gap-2 text-fs-1">
        <h1 className="font-medium text-neutral-700" data-testid="movie-title">
          {movieTitle}
        </h1>
        <span className="text-neutral-700">•</span>
        <span
          className="text-2xl font-medium text-neutral-700"
          data-testid="movie-release-date"
        >
          {new Date(releaseDate).getTime()}
        </span>
        <span className="text-neutral-700">•</span>
        <span
          className="text-2xl font-medium text-neutral-700"
          data-testid="movie-runtime"
        >
          {movieRuntime}mins
        </span>
      </div>
      <GenreTags genres={genres} />
    </div>
  );
};

export default MovieDetailsHeader;
