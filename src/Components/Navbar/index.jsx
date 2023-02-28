import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../Context/SearchContext/SearchContext";

function Navbar() {
  const { search, setSearch, searchMovie } = useSearch();
  const navigate = useNavigate();
  const getMovies = async () => {
    const data = await searchMovie(search);
    navigate("search");
    return data;
  };
  return (
    <Box
      h={"8vh"}
      w="100vw"
      backgroundColor="rgb(32,32,32)"
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Box color={"whiteAlpha.900"} w={"50vw"} display="flex" gap={2}>
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Movie"
        />
        <Button
          colorScheme={"pink"}
          onClick={() => {
            getMovies();
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default Navbar;
