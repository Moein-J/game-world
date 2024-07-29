"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { X } from "lucide-react";
import Image from "next/image";
import Title from "@/components/game/title/Title";
import AccordionContainer from "@/components/game/accordion/AccordionContainer";
import Requirements from "@/components/game/Requirement/Requirements";
import Download from "@/components/game/download/Download";
import { useRouter } from "next/navigation";

const Container = ({ game }) => {
  const router = useRouter();
  return (
    <BackgroundGradient>
      <div className="h-[60rem] w-full rounded-xl bg-[#121212] flex flex-col p-4 text-[#fff] gap-10">
        <button
          onClick={() => router.back()}
          className="flex flex-col items-end"
        >
          <X
            size={30}
            className="hover:text-[#8f3d3d] text-[#fff] text-right"
          />
        </button>
        <div className="overflow-y-auto flex flex-col overflow-x-hidden gap-8">
          <div
            className="w-full flex p-4 xs:flex-col-reverse lg:flex-row items-center xs:gap-4 lg:gap-0"
            id="game_info"
          >
            <div className="lg:w-1/2 w-full lg:h-[30rem] xs:h-[20rem] relative">
              <Image
                src={"/RedDead.jpg"}
                fill
                alt="witcher3_picture"
                className="rounded-lg"
              />
            </div>
            {/* TITLE AND DETALS SECTION */}
            <Title game={game} />
            {/* ******** */}
          </div>
          {/* ACCORDION SECTION */}
          <AccordionContainer game={game} />
          {/* SYSTEM REQUREMENTS SECTION */}
          <Requirements requirements={game.requirements} />
          <Download repacks={game.repacks} />
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default Container;
