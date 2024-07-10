import axios from "axios";
import Container from "./components/Container";


const page = async ({ params }) => {
  const game= await (await axios.get("http://localhost:2222/games/"+params.gameid)).data

  return (
    <div className="fixed bg-[#121212] bg-opacity-95 flex flex-col w-screen backdrop-blur-sm z-50 h-screen justify-center items-center ">
      <div className="2xl:w-4/6 lg:w-4/5 xs:w-[90%]">
        <Container game={game}/>
      </div>
    </div>
  );
};

export default page;
