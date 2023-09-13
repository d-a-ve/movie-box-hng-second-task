import useFetchQuery from "@hooks/useFetchQuery";
import HeroDescription from "./HeroDescription";
import { IGetTMDBResponse } from "@customTypes/IGetTMDBResponse";
import { IGetTMDBErrorResponse } from "@customTypes/IGetTMDBErrorResponse";
import { TMDB_IMG_URL } from "@constants";
import Loader from "@components/Loader/Loader";

const Hero = () => {
  const { status, data } = useFetchQuery<
    IGetTMDBResponse,
    IGetTMDBErrorResponse
  >(["popular movies"], "movie/popular?language=en-US&page=1");
  return (
    <div className="col-start-1 col-end-4 row-start-1 row-end-3 mb-16 sm:mb-8">
      <div className="grid-full-center">
        {status === "loading" && <Loader />}
        {status === "error" && (
          <p>Something went wrong, please try searching for another movie.</p>
        )}
      </div>
      {status === "success" && data && (
        <div
          className={`flex h-screen w-full bg-cover bg-center`}
          // tailwind cannot work with dynamic bg_images, so had to use this.
          style={{
            backgroundImage: `url('${TMDB_IMG_URL}w780${data.results[1].poster_path}'`,
          }}
        >
          <div className="mx-[5%] flex max-w-[30ch] items-center md:mx-[1.5rem]">
            <HeroDescription
              title={data?.results[1].title}
              imdbRating={data?.results[1].vote_average}
              synopsis={data?.results[1].overview}
              movieId={data?.results[1].id}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
