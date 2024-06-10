import Image from "next/image";

const Popular = () => {
  return (
    <div className=" w-full h-[32rem] p-8 flex flex-col gap-16">
      <div className="flex items-center gap-10">
        <div className="w-1/2 h-[0.1rem] bg-[#e58e27]"></div>
        <p className="text-nowrap text-[#ffffff] text-lg">تازه های منتخب</p>
        <div className="w-1/2 h-[0.1rem] bg-[#e58e27]"></div>
      </div>
      <div className="flex w-full h-full justify-center gap-6">
        <button className="rounded-xl relative w-72 h-full flex justify-center ">
          <div className="top-[-20px] w-56 h-12 rounded-full  bg-[#161a1e] absolute flex justify-center items-center">
            <p className="text-[#9a9a9a] text-xl">Resident evil 4</p>
          </div>
          <Image
            src={"/ResidentEvil.jpg"}
            width={2020}
            height={1080}
            className="w-full h-full rounded-2xl"
          />
        </button>
        <button className="rounded-xl relative w-72 h-full flex justify-center ">
          <div className="top-[-20px] w-56 h-12 rounded-full  bg-[#161a1e] absolute flex justify-center items-center">
            <p className="text-[#9a9a9a] text-xl">Little nightmare 2</p>
          </div>
          <Image
            src={"/littlenightmare.jpg"}
            width={2020}
            height={1080}
            className="w-full h-full rounded-2xl"
          />
        </button>
        <button className="rounded-xl relative w-72 h-full flex justify-center ">
          <div className="top-[-20px] w-56 h-12 rounded-full  bg-[#161a1e] absolute flex justify-center items-center">
            <p className="text-[#9a9a9a] text-xl">Rust</p>
          </div>
          <Image
            src={"/rust.jpg"}
            width={2020}
            height={1080}
            className="w-full h-full rounded-2xl"
          />
        </button>
        <button className="rounded-xl relative w-72 h-full flex justify-center ">
          <div className=" top-[-20px] z-10 w-56 h-12 rounded-full  bg-[#161a1e] absolute flex justify-center items-center">
            <p className="text-[#9a9a9a] text-xl">Forza horizon</p>
          </div>
          <div className="relative w-full h-full ">
            <Image src={"/forza2.jpg"} fill className="rounded-2xl" />
          </div>
        </button>
        <button className="rounded-xl relative w-72 h-full flex justify-center ">
          <div className="top-[-20px] w-56 h-12 rounded-full  bg-[#161a1e] absolute flex justify-center items-center">
            <p className="text-[#9a9a9a] text-xl">Spider man</p>
          </div>
          <Image
            src={"/spiderman.jpg"}
            width={2020}
            height={1080}
            className="w-full h-full rounded-2xl"
          />
        </button>
      </div>
    </div>
  );
};

export default Popular;
