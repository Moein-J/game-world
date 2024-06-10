"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AuthorItems = () => {
  return (
    <>
      <div className="w-4/5 h-40 p-4 px-14 ">
        <motion.button whileHover={{ scale: 1.1 }} className="w-full flex h-full justify-between p-4 rounded-xl bg-[#000000] bg-opacity-40 backdrop-blur-[8px] backdrop-contrast-100 shadow-inner">
          <Image
            src={"/witcher3.jpg"}
            width={90}
            height={200}
            className="rounded-xl h-20"
          />
          <p className="text-[#ffffff] text-sm text-right">
            Witcher 3 : wild hunt
            <br />
            <span className="text-xs text-[#9a9a9a]">
              دانلود بازی فوق العاده witcher 3
            </span>
            <br />
            <br />
            <span className="text-[0.6rem] text-[#9a9a9a] mt-10">
              fitgirl - dodi | 40 ~ 60 GB
            </span>
          </p>
        </motion.button>
      </div>
      <div className="w-4/5 h-40 p-4 px-14">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-full flex h-full justify-between p-4 rounded-xl bg-[#000000] bg-opacity-40 backdrop-blur-[8px] backdrop-contrast-100 shadow-inner"
        >
          <Image
            src={"/redDead.jpg"}
            width={90}
            height={200}
            className="rounded-xl h-20"
          />
          <p className="text-[#ffffff] text-sm text-right">
            red dead redemptation 2
            <br />
            <span className="text-xs text-[#9a9a9a]">
              دانلود بازی فوق العاده red dead
            </span>
            <br />
            <br />
            <span className="text-[0.6rem] text-[#9a9a9a] mt-10">
              fitgirl - dodi | 40 ~ 60 GB
            </span>
          </p>
        </motion.button>
      </div>
      <div className="w-4/5 h-40 p-4 px-14">
        <motion.button whileHover={{ scale: 1.1 }} className="w-full flex h-full justify-between p-4 rounded-xl bg-[#000000] bg-opacity-40 backdrop-blur-[8px] backdrop-contrast-100 shadow-inner">
          <Image
            src={"/gta.jpg"}
            width={90}
            height={200}
            className="rounded-xl h-20"
          />
          <p className="text-[#ffffff] text-sm text-right">
            gta 5
            <br />
            <span className="text-xs text-[#9a9a9a]">
              دانلود بازی فوق العاده gta v
            </span>
            <br />
            <br />
            <span className="text-[0.6rem] text-[#9a9a9a] mt-10">
              fitgirl - dodi | 40 ~ 60 GB
            </span>
          </p>
        </motion.button>
      </div>
      <div className="w-4/5 h-40 p-4 px-14">
        <motion.button whileHover={{ scale: 1.1 }} className="w-full flex h-full justify-between p-4 rounded-xl bg-[#000000] bg-opacity-40 backdrop-blur-[8px] backdrop-contrast-100 shadow-inner">
          <Image
            src={"/elden.jpg"}
            width={90}
            height={200}
            className="rounded-xl h-20"
          />
          <p className="text-[#ffffff] text-sm text-right">
            elden ring
            <br />
            <span className="text-xs text-[#9a9a9a]">
              دانلود بازی فوق العاده elden ring
            </span>
            <br />
            <br />
            <span className="text-[0.6rem] text-[#9a9a9a] mt-10">
              fitgirl - dodi | 40 ~ 60 GB
            </span>
          </p>
        </motion.button>
      </div>
    </>
  );
};

export default AuthorItems;
