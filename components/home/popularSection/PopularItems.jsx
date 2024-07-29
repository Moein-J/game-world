import Image from "next/image";
import Link from "next/link";
const PopularItems = ({ game }) => {
  return (
    <Link
      href={`game/${game.name}`}
      className="relative flex justify-center rounded-xl w-72 h-full "
    >
      <div className="-top-6 w-56 h-12 rounded-full z-20 bg-bgSecondary absolute flex justify-center items-center">
        <p className="text-[#9a9a9a] text-xl">{game.name}</p>
      </div>
      <Image
        src={game.imgSrc}
        width={1900}
        height={1200}
        className="w-full h-full z-10 rounded-2xl"
        alt="pic"
      />
    </Link>
  );
};

export default PopularItems;
