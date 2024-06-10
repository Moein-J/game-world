"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Image from "next/image";
import { game } from "@/app/game/data";
import Title from "@/app/game/components/title/Title";
import AccordionContainer from "@/app/game/components/accordion/AccordionContainer";
import Requirements from "@/app/game/components/Requirement/Requirements";
import Download from "@/app/game/components/download/Download";

const page = ({ params }) => {
  const router = useRouter();
  return (
    <div className="fixed bg-[#121212] bg-opacity-95 flex flex-col w-screen backdrop-blur-sm z-50 h-screen justify-center items-center ">
      <BackgroundGradient>
        <div className="h-[60rem] w-[100rem] rounded-xl bg-[#121212] flex flex-col p-4 text-[#fff] gap-10">
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
            <div className="w-full flex p-4" id="game_info">
              <div className="w-1/2 h-[30rem] relative ">
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
            <Download repacks={game.repacks}/>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default page;
