import Image from "next/image";
import Title from "./Title";
import Box from "./box/Box";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="w-full h-[55rem] relative grow grid grid-flow-col grid-cols-2">
      <div className="flex justify-center">
        <div className="relative rounded-xl mb-24 md:w-4/5 lg:w-2/3  xl:w-[62%]  2xl:w-[62%] md:h-[40rem] lg:h-[55%] xl:h-[70%]  2xl:h-5/6">
          <Image src={"/landing-page.jpg"} fill className="rounded-3xl" />
        </div>
      </div>
      <div className="flex flex-col text-links text-right lg:px-12 xl:px-20 py-2 lg:gap-4 xl:gap-8 1.5xl:gap-8 2xl:gap-16">
        <Title />
        <Box />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
