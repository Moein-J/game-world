import { motion } from "framer-motion";
import Image from "next/image";
const Item = ({ game }) => {
  return (
    <div className="w-80 h-40 p-4 ">
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="w-full flex h-full gap-4 justify-between p-4 rounded-xl bg-[#000000] bg-opacity-40 backdrop-blur-[8px] backdrop-contrast-100 shadow-inner"
      >
        <Image
          src={game.imgSrc}
          width={90}
          height={200}
          className="rounded-xl h-20"
        />
        <div className="flex flex-col h-full justify-between text-sm text-right text-[#fff]">
          <p>{game.name}</p>
          <p className="text-xs text-[#9a9a9a]">{game.subtitle}</p>
          <p className="text-[0.6rem] text-links">{game.repacks}</p>
        </div>
      </motion.button>
    </div>
  );
};

export default Item;
