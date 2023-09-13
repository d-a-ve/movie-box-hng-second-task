import { TRatingBoxProps } from "@customTypes/TRatingBoxProps";

const RatingsBox = ({ isHero, imdbRating }: TRatingBoxProps) => {
  const width = isHero ? "w-[70%]" : "w-full sm:w-[70%]";
  return (
    <div className={`flex ${width} items-center justify-between gap-2`}>
      <div className="flex items-center justify-start gap-2.5">
        <img className="h-4 w-9" src="/assets/images/imdb.png" alt="" />
        <div className="text-fs--2 font-normal leading-3 text-black">
          {imdbRating}
        </div>
      </div>
      {/* rotten tomato rating
      <div className="flex items-center justify-start gap-2.5">
        <img
          className="h-4 w-4"
          src="/assets/images/rotten-tomato.png"
          alt=""
        />
        <div className="text-fs--2 font-normal leading-3 text-black">97%</div>
      </div> */}
    </div>
  );
};

export default RatingsBox;
