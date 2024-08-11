import Game from "./Game";
import Loading from "./loading";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchData } from "./fetchData";

const Actions = ({ page }) => {
  const {
    isPending,
    isError,
    error,
    data: games,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["projects", page],
    queryFn: () => fetchData(page),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  return (
    <>
      {isPending || isFetching ? (
        <Loading />
      ) : (
        games &&
        games.slice(0, 12).map((game) => (
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
        ))
      )}
    </>
  );
};

export default Actions;
