import SearchInput from "@components/Input/SearchInput";
import Logo from "@components/Logo/Logo";
import SearchResultBox from "@components/Search/SearchResultBox";
import { IGetTMDBErrorResponse } from "@customTypes/IGetTMDBErrorResponse";
import { IGetTMDBResponse } from "@customTypes/IGetTMDBResponse";
import useDebounce from "@hooks/useDebounce";
import useFetchQuery from "@hooks/useFetchQuery";
import { useState } from "react";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const debouncedValue = useDebounce<string>(inputValue);
  const { status, data } = useFetchQuery<
    IGetTMDBResponse,
    IGetTMDBErrorResponse
  >(
    // using debouncedValue, so that anytime it changes the fetch happens.
    ["search movie", debouncedValue],
    `search/movie?query=${debouncedValue}&include_adult=false&language=en-US&page=1`
  );

  return (
    <div className="grid-full-center z-10 row-start-1 h-16 py-4 backdrop-blur-md">
      <header className="grid grid-cols-[50px,_1fr] items-center xs:grid-cols-[35px,_1fr] xs:gap-2">
        <div className="col-start-1 col-end-2">
          <Logo />
        </div>
        <div className="relative col-start-2 col-end-3 row-start-1 row-end-2 w-3/5 justify-self-center md:w-full">
          <SearchInput
            inputName="search"
            inputType="text"
            placeHolder="What do you want to watch?"
            inputValue={inputValue}
            setInputValue={setInputValue}
            setIsSearchBoxOpen={setIsSearchBoxOpen}
          />
          <div
            className={`absolute grid w-full overflow-y-auto ${
              isSearchBoxOpen
                ? "grid-rows-[300px] shadow-md"
                : "grid-rows-[0fr]"
            }`}
          >
            <SearchResultBox
              status={status}
              data={data}
              setIsSearchBoxOpen={setIsSearchBoxOpen}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
