import Game from "./Game";
const Actions = async () => {
  let games;

  try {
    const res = await fetch(
      process.env.NODE_ENV === "production"
        ? `${process.env.BACKEND_URL}/games?id=1&name=1&tags=1&information=1&repacksList=1&category=1`
        : `http://localhost:3000/games?id=1&name=1&tags=1&information=1&repacksList=1&category=1`,
      {
        method: "GET",
        next: { revalidate: 20000 },
      }
    );
    games = await res.json();
  } catch (error) {
    console.log(error.message);
  }

  return (
    <>
      {games &&
        games.map((game) => (
          <Game
            key={game._id}
            game={{
              id: game._id,
              name: game.name,
              imgSrc: "/RedDead.jpg",
              repacks: game.repacksList,
              category: game.category,
            }}
          />
        ))}
    </>
  );
};

export default Actions;
