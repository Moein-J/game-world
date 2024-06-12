import { motion } from "framer-motion";
import Image from "next/image";
const Item = ({ game }) => {
  return (
    <div className="w-4/5 h-40 p-4 px-14 ">
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="w-full flex h-full justify-between p-4 rounded-xl bg-[#000000] bg-opacity-40 backdrop-blur-[8px] backdrop-contrast-100 shadow-inner"
      >
        <Image
          src={game.imgSrc}
          width={90}
          height={200}
          className="rounded-xl h-20"
        />
        <p className="text-[#ffffff] text-sm text-right">
          {game.name}
          <br />
          <span className="text-xs text-[#9a9a9a]">{game.subtitle}</span>
          <br />
          <br />
          <span className="text-[0.6rem] text-[#9a9a9a] mt-10">
            {game.repacks}
          </span>
        </p>
      </motion.button>
    </div>
  );
};

export default Item;
