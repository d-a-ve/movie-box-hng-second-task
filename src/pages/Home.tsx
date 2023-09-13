import Hero from "@components/Hero/Hero";
import MovieList from "@components/List/MovieList";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieList
        headingElement={
          <h2 className="text-fs-3 font-bold text-black">Trending Movies</h2>
        }
        url="trending/movie/day?language=en-US"
        queryId={["movies"]}
      />
    </>
  );
};

export default Home;
