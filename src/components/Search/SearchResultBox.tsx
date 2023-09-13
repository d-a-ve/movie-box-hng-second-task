import SearchCard from "@components/Card/SearchCard";
import Loader from "@components/Loader/Loader";
import { TSearchResultBoxProps } from "@customTypes/TSearchResultBoxProps";
const SearchResultBox = ({
  status,
  data,
  setIsSearchBoxOpen,
}: TSearchResultBoxProps) => {
  return (
    <div className="overflow-auto bg-white">
      <div className="my-4 grid">
        <div className="px-2">
          {status === "loading" && <Loader />}
          {status === "error" && (
            <p>Something went wrong, please try searching for another movie.</p>
          )}
        </div>
        {data?.results.map((search) => (
          <SearchCard
            key={search.id}
            movieId={search.id}
            moviePoster={search.poster_path}
            movieTitle={search.title}
            releaseDate={search.release_date}
            clickFunction={() => setIsSearchBoxOpen(false)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResultBox;
