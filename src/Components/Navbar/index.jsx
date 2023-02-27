import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";
import { useSearch } from "../../Context/SearchContext/SearchContext";

function Navbar() {
  const { search, setSearch, searchMovie } = useSearch();
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
            searchMovie(search);
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default Navbar;
