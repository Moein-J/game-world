import { Suspense } from "react";
import Game from "./Game";
import Loading from "./loading";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

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
    queryFn: () => fetchProjects(page),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
  const fetchProjects = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_NODE_ENV === "production"
          ? `${process.env.BACKEND_URL}/games?id=1&name=1&tags=1&information=1&repacksList=1&category=1&page=${page}`
          : `http://localhost:3000/games?id=1&name=1&tags=1&information=1&repacksList=1&category=1&page=${page}`,
        {
          method: "GET",
        }
      );
      const dataObj = await res.json();
      return await dataObj[0].data;
    } catch (error) {
      console.log(error.message);
    }
  };

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
