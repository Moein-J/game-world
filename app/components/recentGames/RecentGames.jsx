import Image from "next/image";
import CheckBox from "@/components/ui/CheckBox";
import Link from "next/link";

const RecentGames = () => {
  return (
    <section className="w-full relative  h-[60rem] flex p-10" id="recent-games">
      <div className="p-6 w-[25%]" id="recent-options">
        <div className="bg-[#161a1e] rounded-lg w-full h-full py-2 px-4 flex flex-col text-[#9a9a9a] items-end">
          <h2 className="text-[#ffffff] text-lg">دسته بندی ها</h2>
          <CheckBox name={"action"} text={"اکشن"} />
          <CheckBox name={"horror"} text={"ترسناک"} />
          <CheckBox name={"strategic"} text={"استراتژی"} />
          <CheckBox name={"sport"} text={"ورزشی"} />
          <CheckBox name={"mystery"} text={"معمایی"} />
          <CheckBox name={"openworld"} text={"جهان آزاد"} />
          <CheckBox name={"fisrtperson"} text={"اول شخص"} />
          <CheckBox name={"thirdperson"} text={"سوم شخص"} />
          <CheckBox name={"rpg"} text={"نقش آفرینی"} />
          <CheckBox name={"multiplayer"} text={"آنلاین"} />
          <h2 className="text-[#ffffff] text-lg mt-8">پلتفرم</h2>
          <div className="flex w-full p-4 pt-8">
            <p className="grow text-center">PC</p>
            <p className="grow text-center">PS4</p>
            <p className="grow text-center">PS5</p>
          </div>
          <h2 className="text-[#ffffff] text-lg mt-8"> : مرتب سازی بر اساس</h2>
          <div className="flex w-full p-4 pt-8 gap-2">
            <p className="grow text-center border border-[#e58e27] rounded-xl p-2">
              جدید ترین
            </p>
            <p className="grow text-center border border-[#9a9a9a] rounded-xl p-2">
              محبوب ترین
            </p>
            <p className="grow text-center border border-[#9a9a9a] rounded-xl p-2">
              پربازدید ترین
            </p>
          </div>
        </div>
      </div>
      <div className="flex-grow p-6 h-full grid grid-cols-4 gap-4 grid-rows-3">
        <Link
          href={"/game/niggaaww"}
          className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4"
        >
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill alt="game_picture" className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </Link>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
        <button className="flex flex-col gap-4 w-full h-full rounded-xl bg-[#161a1e] py-2 px-4">
          <div className="w-full h-36 relative">
            <Image src={"/RedDead.jpg"} fill className="rounded-xl" />
          </div>
          <p className="text-[#e58e27]">
            Red dead redemtation 2
            <br />
            <span className="text-[#9a9a9a] text-xs">
              DODI - FITGIRL | 40 ~ 60 GB
            </span>
          </p>
          <div>
            <p className="text-[#9a9a9a] text-xs text-right">اکشن، ماجراجویی</p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default RecentGames;
