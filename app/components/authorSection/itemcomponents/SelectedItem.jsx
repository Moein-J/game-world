import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SelectedItem = () => {
  return (
    <div className="w-1/2 h-full flex items-end px-6 pb-8">
      <div className="w-full h-[14rem] pt-4 px-3 backdrop-contrast-100 shadow-inner rounded-xl  bg-[#000000] bg-opacity-40 backdrop-blur-[8px]">
        <p className="text-[#ffffff] text-2xl text-right">
          The withcer 3 : wild hunt
        </p>
        <p className="text-[#9a9a9a] text-sm text-right mt-1">
          witcher 3 دانلود بازی فوق العاده زیبا <br />
          بازی The Witcher 3 یعنی ماجراجویی مطلق در دنیایی سرشار از شگفتی‌های
          غیرمنتظره و میخکوب‌کننده. استودیوی لهستانی سی‌دی پراجکت در قسمت
          پایان‌دهنده‌ی سه‌گانه‌ی حماسی فانتزی‌شان، نهایت معنای «ویچر بودن» را
          به نمایش می‌گذارد.
        </p>
        <div className="flex justify-between items-center">
          <Link
            href={"#"}
            className="w-14 ml-6 flex before:border-r-2 before:w-14 before:h-14 before:absolute before:rounded-full before:border-[#9a9a9a] justify-center items-center h-14 border-l-2 border-[#e58e27] rounded-full"
          >
            <div className="bg-[#e58e27] w-10 h-10 rounded-full flex items-center justify-center">
              <ArrowLeft color="#ffffff" size={18} />
            </div>
          </Link>
          <p className="text-[#9a9a9a] text-xs">fitgirl - dodi | 40 ~ 60 GB</p>
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
