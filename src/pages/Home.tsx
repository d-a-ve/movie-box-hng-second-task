import Hero from "@components/Hero/Hero";
import MovieList from "@components/List/MovieList";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieList
        headingElement={
          <h2 className="text-fs-3 font-bold text-black">Top 10 Movies</h2>
        }
        url="movie/top_rated?language=en-US&page=1"
        queryId={["top-rated movies"]}
      />
      <MovieList
        headingElement={
          <h2 className="text-fs-3 font-bold text-black">Trending Movies</h2>
        }
        url="trending/movie/day?language=en-US"
        queryId={["trending movies"]}
      />
    </>
  );
};

export default Home;
