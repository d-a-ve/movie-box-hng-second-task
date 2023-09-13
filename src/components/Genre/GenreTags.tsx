import { Genre } from "@customTypes/IMovieResponse";
import GenreTag from "./GenreTag";

const GenreTags = ({ genres }: { genres: Genre[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre, i) => (
        <GenreTag key={i} genre={genre.name} />
      ))}
    </div>
  );
};

export default GenreTags;
