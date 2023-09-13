import { Dispatch, SetStateAction } from "react";

export type TInputProps = {
  inputType: string;
  inputName: string;
  placeHolder: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setIsSearchBoxOpen: Dispatch<SetStateAction<boolean>>;
};
