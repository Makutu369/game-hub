import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { isLoading, games, error } = useGames();
  const skeletonData = [1, 2, 4, 5, 6, 6, 7];
  return (
    <>
      <div>{error}</div>
      <SimpleGrid
        padding={5}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        overflow="hidden"
      >
        {isLoading &&
          skeletonData.map((data) => <GameCardSkeleton key={data} />)}

        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
