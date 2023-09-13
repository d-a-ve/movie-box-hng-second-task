import { MOVIES_GENRES } from "@constants";

const getGenresText = (genres: number[]) => {
  const genresText = genres.map((genre) => {
    const genreObj = MOVIES_GENRES.find(
      (movieGenre) => movieGenre.id === genre
    );
    return genreObj?.name;
  });
  return genresText;
};

export default getGenresText;
