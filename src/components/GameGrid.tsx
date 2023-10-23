import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      <div>{error}</div>
      <SimpleGrid
        padding={5}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        overflow="hidden"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
