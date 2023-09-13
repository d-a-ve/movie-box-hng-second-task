import { TMDB_GET_OPTIONS } from "@constants";

const fetchCall = async (url: string) => {
  const fetchCall = await fetch(
    `${import.meta.env.VITE_TMDB_BASEURL}${url}`,
    TMDB_GET_OPTIONS
  );
  const data = await fetchCall.json();

  // The Api does not give any error warnings so using try, catch didn't work. So using this to check for error
  if (data.success === false) throw new Error(data);
  // if (data.results.length === 0) throw new Error("Sorry, no movie found");

  return data;
};

export default fetchCall;
