import Game from "./Game";
const Actions = async () => {
  let games;
  try {
    const res = await fetch(
      "http://localhost:2222/games?id=1&name=1&tags=1&information=1&repacksList=1&category=1",
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
