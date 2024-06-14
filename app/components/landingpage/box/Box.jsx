import { BackgroundGradient } from "@/components/ui/background-gradient";
import { CircleHelp, Download, Gamepad2, StarHalf } from "lucide-react";
import BoxItem from "./BoxItem";

const Box = () => {
  return (
    <BackgroundGradient >
      <div className="rounded-xl xs:grid xs:grid-rows-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 select-none lg:h-48 xl:h-60 lg:p-2 xs:p-4 xs:gap-4 md:gap-4 bg-bgSecondary lg:text-xs xl:text-sm 1.5xl:text-[1rem] 2xl:text-lg">
        <BoxItem
          icon={<Download className="lg:size-3 xl:size-4 1.5xl:size-6" />}
          text="میلیون ها کاربر ماهانه "
        />
        <BoxItem
          icon={<StarHalf className="lg:size-3 xl:size-4 1.5xl:size-6" />}
          text="پربازدید ترین سایت ایران"
        />
        <BoxItem
          icon={<Gamepad2 className="lg:size-3 xl:size-4 1.5xl:size-6" />}
          text="بزرگ ترین بانک بازی"
        />
        <BoxItem
          icon={<CircleHelp className="lg:size-3 xl:size-4 1.5xl:size-6" />}
          text="پشتیبانی 24 ساعته و فعال"
        />
      </div>
    </BackgroundGradient>
  );
};

export default Box;
