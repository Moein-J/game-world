import Image from "next/image";
const PopularItems = ({ game }) => {
  return (
    <button className="rounded-xl relative w-72 h-full flex justify-center ">
      <div className="top-[-20px] w-56 h-12 rounded-full z-20 bg-bgSecondary absolute flex justify-center items-center">
        <p className="text-[#9a9a9a] text-xl">{game.name}</p>
      </div>
      <Image
        src={game.imgSrc}
        fill
        className="w-full z-10 h-full rounded-2xl"
      />
    </button>
  );
};

export default PopularItems;
