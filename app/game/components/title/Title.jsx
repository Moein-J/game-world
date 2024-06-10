import TitleItem from "./TitleItem";
const Title = ({ game }) => {
  return (
    <div className="flex-grow flex flex-col gap-8">
      <p className="text-right text-2xl text-[#e58e27]"> {game.name} بازی</p>
      <TitleItem
        right_text={`${game.repacks} نسخه`}
        left_text={`${game.platform} پلتفرم`}
      />
      <TitleItem
        left_text={`${game.version} ورژن`}
        right_text={`گیگابایت ${game.capacity} حجم`}
      />
      <TitleItem
        left_text={`${game.modify} تاریخ آخرین نسخه`}
        right_text={`${game.release} تاریخ انتشار`}
      />
      <TitleItem
        left_text={`بازدید ${game.visited} تعداد`}
        right_text={`کامنت ${game.comments_number} تعداد`}
      />
      <TitleItem
        left_text={`${game.category} : دسته بندی`}
        right_text={`در متاکرتیک ${game.meta} نمره`}
      />
    </div>
  );
};

export default Title;
