import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Title = () => {
  return (
    <>
      <p className="text-lg text-[#9a9a9a]">دانلودها - گیم ورلد</p>
      <Avatar className="h-16 w-16 bg-links text-[#1b1b1b] font-normal">
        <AvatarImage src="" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="text-2xl text-[#fff] text-center">
        احمد جباری <br />
        <span className="text-sm text-[#9a9a9a] ">عضو تحریریه</span>
      </p>
    </>
  );
};

export default Title;
