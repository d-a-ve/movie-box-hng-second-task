const MovieDetailsBody = ({ movieSynopsis }: { movieSynopsis: string }) => {
  return (
    <div className="mb-8">
      <p data-testid="movie-overview">{movieSynopsis}</p>
    </div>
  );
};

export default MovieDetailsBody;
