import RatingsBox from "@components/Ratings/RatingsBox";
import getGenresText from "@utils/getGenresText";

const CardDetails = ({
  isSearchCard,
  imdbRating,
  releaseDate,
  movieTitle,
  genres,
}: {
  isSearchCard: boolean;
  imdbRating?: string | number;
  releaseDate: string;
  movieTitle: string;
  genres?: number[];
}) => {
  return isSearchCard ? (
    <div className="flex w-full flex-col items-start justify-start">
      <p
        className="text-fs--1 font-bold text-gray-900"
        data-testid="movie-title"
      >
        {movieTitle}
      </p>
      <p className="text-fs--2 font-bold text-gray-400">
        {new Date(releaseDate).getTime()}
      </p>
    </div>
  ) : (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <p
        className="text-fs--2 font-bold text-gray-400"
        data-testid="movie-release-date"
      >
        {new Date(releaseDate).getTime()}
      </p>
      <p className="font-bold text-gray-900" data-testid="movie-title">{movieTitle}</p>
      <RatingsBox isHero={false} imdbRating={imdbRating} />
      <p className="text-fs--2 font-bold text-gray-400">
        {genres && getGenresText(genres).join(", ")}
      </p>
    </div>
  );
};

export default CardDetails;
