import CheckBox from "@/components/ui/CheckBox";
const Options = () => {
  return (
    <div className="p-6 w-[25%]" id="recent-options">
      <div className="bg-bgSecondary rounded-lg w-full h-full py-2 px-4 flex flex-col text-links items-end">
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
        <div className="flex xl:flex-row xs:flex-col items-center justify-center pt-8 gap-2">
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
  );
};

export default Options;
