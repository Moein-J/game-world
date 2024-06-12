import PopularItems from "./PopularItems";

const Popular = () => {
  return (
    <div className=" w-full h-[32rem] p-8 flex flex-col gap-16">
      <div className="flex items-center gap-10">
        <div className="w-1/2 h-[0.1rem] bg-[#e58e27]"></div>
        <p className="text-nowrap text-[#ffffff] text-lg">تازه های منتخب</p>
        <div className="w-1/2 h-[0.1rem] bg-[#e58e27]"></div>
      </div>
      <div className="flex w-full h-full justify-center gap-6">
        <PopularItems
          game={{ name: "Resident evil 4", imgSrc: "/ResidentEvil.jpg" }}
        />
        <PopularItems
          game={{ name: "Little nightmares 2", imgSrc: "/littlenightmare.jpg" }}
        />
        <PopularItems game={{ name: "Rust", imgSrc: "/rust.jpg" }} />
        <PopularItems game={{ name: "Forza horizon", imgSrc: "/forza2.jpg" }} />
        <PopularItems game={{ name: "Spider man", imgSrc: "/spiderman.jpg" }} />
      </div>
    </div>
  );
};

export default Popular;
