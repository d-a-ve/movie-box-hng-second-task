import { TMDB_IMG_URL } from "@constants";
import { useState } from "react";

const CardHeader = ({
  isSearchCard,
  moviePoster,
}: {
  isSearchCard: boolean;
  moviePoster: string | null;
}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const icon = isFavorited ? "heart-red-filled" : "heart";
  const moviePosterUrl = moviePoster
    ? `${TMDB_IMG_URL}w780${moviePoster}`
    : undefined;

  return isSearchCard ? (
    <div className="overflow-hidden">
      <source
        srcSet={`${TMDB_IMG_URL}w342/${moviePoster}`}
        media="(max-width: 480px)"
      />
      <source
        srcSet={`${TMDB_IMG_URL}w500/${moviePoster}`}
        media="(max-width: 1024px)"
      />
      <img
        className="h-12 w-14 rounded-full object-cover sm:w-16 xs:h-10 xs:w-14"
        src={moviePosterUrl}
        loading="lazy"
        alt=""
      />
    </div>
  ) : (
    // movie card
    <div className="relative w-full">
      <div className="w-full">
        <source
          srcSet={`${TMDB_IMG_URL}w342/${moviePoster}`}
          media="(max-width: 480px)"
        />
        <source
          srcSet={`${TMDB_IMG_URL}w500/${moviePoster}`}
          media="(max-width: 1024px)"
        />
        <img
          className="h-[370px] w-full object-cover object-center"
          src={moviePosterUrl}
          alt=""
          data-testid="movie-poster"
        />
      </div>
      <div className="absolute top-4 z-10 flex w-full items-center justify-end px-4">
        {/* <div className="flex items-center justify-center rounded-xl bg-gray-100 bg-opacity-50 px-2 py-0.5 backdrop-blur-none">
          <span className="text-fs--2 font-bold text-gray-900">TV SERIES</span>
        </div> */}
        <button
          className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 bg-opacity-50 backdrop-blur-none"
          onClick={(e) => {
            e.preventDefault();
            setIsFavorited((prev) => !prev);
          }}
        >
          <img src={`/assets/svg/${icon}-icon.svg`} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CardHeader;
