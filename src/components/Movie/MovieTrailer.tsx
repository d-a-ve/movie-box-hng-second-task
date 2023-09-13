import { TMDB_IMG_URL } from "@constants";

const MovieTrailer = ({
  movieUrl,
  movieTitle,
}: {
  movieUrl: string;
  movieTitle: string;
}) => {
  return (
    <div className="col-start-1 col-end-4 row-start-1 row-end-2">
      <picture>
        <source
          srcSet={`${TMDB_IMG_URL}w342/${movieUrl}`}
          media="(max-width: 480px)"
        />
        <source
          srcSet={`${TMDB_IMG_URL}w500/${movieUrl}`}
          media="(max-width: 1024px)"
        />
        <img
          className="max-h-screen w-full object-cover object-center"
          src={`${TMDB_IMG_URL}w780/${movieUrl}`}
          alt={`${movieTitle} poster`}
        />
      </picture>
    </div>
  );
};

export default MovieTrailer;
