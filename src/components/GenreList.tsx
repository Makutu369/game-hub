import useGenres from "../hooks/useGenres";

export const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      {data.map((genre) => (
        <div>{genre.name}</div>
      ))}
    </>
  );
};
