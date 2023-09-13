import { ReactNode } from "react";
export type TBtnProps = {
  buttonType: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
};
