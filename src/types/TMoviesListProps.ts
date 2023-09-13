import { ReactNode } from "react";

export type TMoviesListProps = {
  headingElement: ReactNode;
  queryId: (string | number)[];
  url: string;
};
