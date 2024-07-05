"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PopularItems from "./PopularItems";
import { useRef } from "react";


const Popular = () => {
  const container = useRef(null);
  return (
    <div id="popular-games" className="w-full p-8 flex flex-col gap-12 select-none">
      <div className="flex items-center gap-10">
        <div className="w-1/2 h-[0.1rem] bg-[#e58e27]"></div>
        <p className="text-nowrap text-[#ffffff] text-lg">تازه های منتخب</p>
        <div className="w-1/2 h-[0.1rem] bg-[#e58e27]"></div>
      </div>
      <div className="flex gap-2 items-center">
        <ChevronLeft
          color="#fff"
          className="cursor-pointer"
          size={42}
          onClick={() => {
            container.current.scrollLeft -= 1500;
          }}
        />
        <div
          className="grid grid-flow-col overflow-auto w-full py-6 h-full gap-6 scroll-smooth"
          ref={container}
        >
          <PopularItems
            game={{ name: "Resident evil 4", imgSrc: "/ResidentEvil.jpg" }}
          />
          <PopularItems
            game={{
              name: "Little nightmares 2",
              imgSrc: "/littlenightmare.jpg",
            }}
          />
          <PopularItems game={{ name: "Rust", imgSrc: "/rust.jpg" }} />
          <PopularItems
            game={{ name: "Forza horizon", imgSrc: "/forza2.jpg" }}
          />
          <PopularItems
            game={{ name: "Spider man", imgSrc: "/spiderman.jpg" }}
          />
          <PopularItems
            game={{ name: "Spider man", imgSrc: "/spiderman.jpg" }}
          />
          <PopularItems
            game={{ name: "Spider man", imgSrc: "/spiderman.jpg" }}
          />
          <PopularItems
            game={{ name: "Spider man", imgSrc: "/spiderman.jpg" }}
          />
          <PopularItems
            game={{ name: "Spider man", imgSrc: "/spiderman.jpg" }}
          />
          <PopularItems
            game={{ name: "Spider man", imgSrc: "/spiderman.jpg" }}
          />
          <PopularItems
            game={{ name: "Spider man", imgSrc: "/spiderman.jpg" }}
          />
          <PopularItems
            game={{ name: "Spider man", imgSrc: "/spiderman.jpg" }}
          />
          <PopularItems
            game={{ name: "Spider man", imgSrc: "/spiderman.jpg" }}
          />
        </div>
        <ChevronRight
          color="#fff"
          className="cursor-pointer"
          size={42}
          onClick={() => {
            container.current.scrollLeft += 1500;
          }}
        />
      </div>
    </div>
  );
};

export default Popular;
