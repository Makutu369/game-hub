import useGames from "../hooks/useGames";

export const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      <div>{error}</div>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </>
  );
};
