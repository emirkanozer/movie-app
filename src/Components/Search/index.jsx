import { Box, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSearch } from "../../Context/SearchContext/SearchContext";
import MovieCard from "../Card/index";
function Search() {
  const { foundMovies } = useSearch();
  useEffect(() => {
    console.log(foundMovies);
  });
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
      {foundMovies.length == 0 && (
        <Box
          width={"100vw"}
          height="90vh"
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          color={"white"}
        >
          NOT FOUND
        </Box>
      )}
      {foundMovies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </Grid>
  );
}

export default Search;
