import axios from "axios";

const config = {
  params: {
    api_key: "ad77e7d89ba5c74365cabbed73f498df",
  },
};

export const fetchSearchMovie = async (search) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}`,
    config
  );
  return data.results;
};

export const fetchMovie = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
    config
  );
  return data.results;
};
