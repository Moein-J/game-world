import Image from "next/image";
import Link from "next/link";

const Game = ({ game }) => {
  return (
    <Link
      href={`/game/${game.id}`}
      className="flex flex-col gap-4 h-full md:w-[90%] w-52 rounded-xl bg-bgSecondary py-2 px-4"
    >
      <div className="w-full h-36 relative">
        <Image
          src={game.imgSrc}
          fill
          alt="game_picture"
          className="rounded-xl"
        />
      </div>
      <p className="text-[#e58e27]">
        {game.name}
        <br />
        <span className="text-[#9a9a9a] text-xs">{game.repacks}</span>
      </p>
      <div>
        <p className="text-[#9a9a9a] text-xs text-right">{game.category}</p>
      </div>
    </Link>
  );
};

export default Game;
