import TitleItem from "./TitleItem";

const Title = ({ game }) => {
  return (
    <div dir="rtl" className="flex-grow items-start flex flex-col gap-8 xs:w-full lg:w-auto">
      <p className="text-right text-2xl text-[#e58e27]">بازی {game.name} </p>
      <TitleItem
        right_text={`نسخه ${game.repacksList} `}
        left_text={`پلتفرم ${game.platform} `}
      />
      <TitleItem
        left_text={` ورژن ${game.version} `}
        right_text={`حجم ${game.capacity} گیگابایت`}
      />
      <TitleItem
        right_text={`تاریخ آخرین نسخه ${game.modify} `}
        left_text={` تاریخ انتشار ${game.release} `}
      />
      <TitleItem
        left_text={` ${game.visited} بازدید`}
        right_text={` ${game.comments_number} کامنت`}
      />
      <TitleItem
        left_text={` دسته بندی : ${game.category} `}
        right_text={`متاکرتیک ${game.meta} `}
      />
    </div>
  );
};

export default Title;
