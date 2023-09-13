import { TInputProps } from "@customTypes/TInputProps";

const SearchInput = ({
  inputType,
  placeHolder,
  inputName,
  inputValue,
  setInputValue,
  setIsSearchBoxOpen,
}: TInputProps) => {
  return (
    <div className="relative grid">
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsSearchBoxOpen(true);
        }}
        // onBlur={() => setIsSearchBoxOpen(false)}
        name={`${inputName})-input`}
        className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-white caret-secondary-500 shadow outline-none placeholder:text-white focus:border-secondary-500"
        type={inputType}
        id={`${inputName})-input`}
        value={inputValue}
        placeholder={placeHolder}
      />
      {inputValue.length > 0 ? (
        <img
          className="absolute mr-3 h-4 w-4 cursor-pointer self-center justify-self-end"
          onClick={() => {
            setInputValue("");
            setIsSearchBoxOpen(false);
          }}
          src="/assets/svg/close.svg"
          alt="Search icon"
        />
      ) : (
        <img
          className="absolute mr-3 h-6 w-6 self-center justify-self-end"
          src="/assets/svg/search.svg"
          alt="Search icon"
        />
      )}
    </div>
  );
};

export default SearchInput;
