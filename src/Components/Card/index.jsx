import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function MovieCard({ movie }) {
  return (
    <Box
      height={"100%"}
      key={movie.id}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

      <Box p="6">
        <Heading size="md" fontWeight="semibold" mb="2">
          {movie.title}
        </Heading>

        <Text fontSize="sm" color="gray.500">
          Vote Avarage: {movie.vote_average}
        </Text>
      </Box>
    </Box>
  );
}

export default MovieCard;
