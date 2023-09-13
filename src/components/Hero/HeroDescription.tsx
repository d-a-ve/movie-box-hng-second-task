import { Link } from "react-router-dom";
import PrimaryBtn from "@components/Button/PrimaryBtn";
import RatingsBox from "@components/Ratings/RatingsBox";
import { THeroDescriptionProps } from "@customTypes/THeroDescriptionProps";

const HeroDescription = ({
  title,
  synopsis,
  imdbRating,
  movieId,
}: THeroDescriptionProps) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-fs-4 font-bold leading-tight text-black">
        {title || "John Wick 3 : Parabellum"}
      </h1>

      <RatingsBox isHero={true} imdbRating={imdbRating} />

      <p className="line-clamp-4 font-medium leading-tight text-black">
        {synopsis ||
          "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere."}
      </p>

      <Link to={`/movies/${movieId}`}>
        <PrimaryBtn buttonType="button">
          <span className="text-fs--1 font-bold uppercase leading-normal">
            View Movie
          </span>
        </PrimaryBtn>
      </Link>
    </div>
  );
};

export default HeroDescription;
