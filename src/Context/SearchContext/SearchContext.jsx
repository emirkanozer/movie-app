import { createContext, useContext, useState } from "react";
import { fetchSearchMovie } from "../../Utils/api";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);

  const searchMovie = async (value) => {
    const movie = await fetchSearchMovie(value);
    setFoundMovies(movie);
  };
  const values = { search, setSearch, searchMovie, foundMovies };

  return (
    <SearchContext.Provider value={values}> {children} </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
