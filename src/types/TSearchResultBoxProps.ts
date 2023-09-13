import { Dispatch, SetStateAction } from "react";
import { IGetTMDBResponse } from "./IGetTMDBResponse";

export type TSearchResultBoxProps = {
  status: "idle" | "error" | "loading" | "success";
  data?: IGetTMDBResponse;
  setIsSearchBoxOpen: Dispatch<SetStateAction<boolean>>;
};
