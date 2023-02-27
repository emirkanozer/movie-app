import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useMovie } from "../../Context/MovieContext/MovieContext";
import { useSearch } from "../../Context/SearchContext/SearchContext";
import MovieCard from "../Card";

function Content() {
  const { foundMovies } = useSearch();
  const { movies, getMovies } = useMovie();
  useEffect(
    () => async () => {
      getMovies();
    },
    []
  );
  console.log(movies);
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
      gap={4}
    >
      {movies.map((movie) => (
        <div>
          <MovieCard movie={movie} />
        </div>
      ))}
    </Grid>
  );
}

export default Content;
