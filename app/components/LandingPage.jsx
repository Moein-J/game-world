import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { CircleHelp, Download, Gamepad2, StarHalf } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="w-full h-[55rem] relative grow grid grid-flow-col grid-cols-2">
      <div className="flex justify-center">
        <div className="relative  rounded-xl mb-24 md:w-4/5 lg:w-2/3  xl:w-[62%]  2xl:w-[62%] md:h-[40rem] lg:h-[55%] xl:h-[70%]  2xl:h-5/6">
          <Image src={"/landing-page.jpg"} fill className="rounded-3xl " />
        </div>
      </div>
      <div className="flex flex-col text-links text-right lg:px-12 xl:px-20 py-2 lg:gap-4 xl:gap-8 1.5xl:gap-8 2xl:gap-16">
        <div>
          <p className="inline-block p-2 px-4 rounded-lg text-xs bg-[#e58e27] bg-opacity-5 font-bold">
            گیم ورلد ورژن 1
          </p>
        </div>
        <p className="landing-p">
          پا به دنیای <span className="text-[#00b4fa]">دانلودها</span> بازی ها
          بگذارید
          <br />
          تجربه ای متفاوت از دانلود بازی در{" "}
          <span className="text-[#e58e27]">ایران</span>
          <br />
          <span className="italic"> دیگه هیچ وقت دنبال بازیت نگرد</span>
        </p>
        <BackgroundGradient>
          <div className="rounded-xl select-none lg:h-48 xl:h-60  bg-[#161a1e] grid grid-cols-2 grid-rows-2 lg:text-xs xl:text-sm 1.5xl:text-[1rem] 2xl:text-lg ">
            <div className="flex items-center justify-center gap-2">
              <p className=" w-52 text-nowrap"> میلیون ها کاربر ماهانه </p>
              <div className="p-2 bg-[#e58e27] rounded-xl text-[#ffffff] ">
                <Download className=" lg:size-3 xl:size-4 1.5xl:size-6" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 lg:mr-4 2xl:mr-0">
              <p className=" w-52 text-nowrap"> پربازدید ترین سایت ایران</p>
              <div className="p-2 bg-[#e58e27] rounded-xl text-[#ffffff]">
                <StarHalf className="lg:size-3 xl:size-4 1.5xl:size-6 " />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className=" w-52 text-nowrap">بزرگ ترین بانک بازی</p>
              <div className="p-2 bg-[#e58e27] rounded-xl text-[#ffffff]">
                <Gamepad2 className="lg:size-3 xl:size-4 1.5xl:size-6 " />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 lg:mr-4 2xl:mr-0">
              <p className=" w-52 text-nowrap">پشتیبانی 24 ساعته و فعال</p>
              <div className="p-2 bg-[#e58e27] rounded-xl text-[#ffffff]">
                <CircleHelp className="lg:size-3 xl:size-4 1.5xl:size-6 " />
              </div>
            </div>
          </div>
        </BackgroundGradient>
        <div className="flex gap-16 justify-center">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] px-16 py-8 font-medium text-[#ffffff] transition-colors">
            آخرین بازی ها
          </button>

          <button type="button" className="font-medium text-[#ffffff]">
            برترین ها
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
