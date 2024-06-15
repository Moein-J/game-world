"use client";
import Item from "./Item";
import { motion } from "framer-motion";

const Items = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay:0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="md:flex md:flex-col md:h-full w-1/2 justify-center items-center xs:hidden"
      >
        <Item
          game={{
            imgSrc: "/witcher3.jpg",
            name: "Witcher 3 : wild hunt",
            subtitle: "دانلود بازی فوق العاده witcher 3",
            repacks: "fitgirl - dodi | 40 ~ 60 GB",
          }}
        />
        <Item
          game={{
            imgSrc: "/redDead.jpg",
            name: "red dead redemption 2",
            subtitle: "دانلود بازی فوق العاده red dead",
            repacks: "fitgirl - dodi | 40 ~ 60 GB",
          }}
        />

        <Item
          game={{
            imgSrc: "/gta.jpg",
            name: "elden ring",
            subtitle: "داring",
            repacks: "fitgirl0 ~ 60 GB",
          }}
        />
        <Item
          game={{
            imgSrc: "/elden.jpg",
            name: "elden ring",
            subtitle: "دانلود بازی فوق العاده elden ring",
            repacks: "fitgirl - dodi | 40 ~ 60 GB",
          }}
        />
      </motion.div>
    </>
  );
};

export default Items;
