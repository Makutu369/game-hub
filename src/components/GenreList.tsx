import useGenres from "../hooks/useGenres";

export const GenreList = () => {
  const { genres } = useGenres();
  return (
    <>
      {genres.map((genre) => (
        <div>{genre.name}</div>
      ))}
    </>
  );
};
