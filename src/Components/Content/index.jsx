import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useMovie } from "../../Context/MovieContext/MovieContext";
import MovieCard from "../Card";

function Content() {
  const { movies, getMovies } = useMovie();
  useEffect(
    () => async () => {
      getMovies(movies);
    },
    []
  );
  return (
    <Grid
      h={"90vh"}
      padding={"2"}
      overflowY={"auto"}
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
      gap={1}
    >
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </Grid>
  );
}

export default Content;
