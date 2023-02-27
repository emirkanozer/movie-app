import { createContext, useContext, useEffect, useState } from "react";
import { fetchMovie } from "../../Utils/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const data = await fetchMovie();
    setMovies(data);
  };

  const values = { movies, getMovies };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};
