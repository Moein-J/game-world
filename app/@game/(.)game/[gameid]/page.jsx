import axios from "axios";
import Container from "@/components/game/Container";

const page = async ({ params }) => {
  const data = await fetch("http://localhost:2222/games/" + params.gameid, {
    method: "GET",
  });
  const game = await data.json();

  return (
    <div className="fixed bg-[#121212] bg-opacity-95 flex flex-col w-screen backdrop-blur-sm z-50 h-screen justify-center items-center ">
      <div className="2xl:w-4/6 lg:w-4/5 xs:w-[90%]">
        <Container game={game} />
      </div>
    </div>
  );
};

export default page;
