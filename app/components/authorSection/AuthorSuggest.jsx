import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AuthorItems from "./AuthorItems";

const AuthorSuggest = () => {
  return (
    <section className="w-full  flex ">
      <div className="flex flex-col w-[40%] p-10">
        <div className="w-full h-[19rem] flex justify-center items-center border-2 border-[#9a9a9a] text-[#ffffff]">
          <p>تبلیغ</p>
        </div>
        <div className="w-full h-[19rem] flex justify-center items-center border-2 border-[#9a9a9a] text-[#ffffff]">
          <p>تبلیغ</p>
        </div>
      </div>
      <div className="flex pr-5 flex-col h-[45rem] w-full items-center pt-9 ">
        <div
          className="w-[90%] flex h-[90%] relative bg-cover rounded-xl"
          style={{ backgroundImage: `url("/witcher3.jpg")` }}
        >
          <p className="inline-block absolute right-6 top-4 p-2 px-4 rounded-lg text-sm text-[#ffffff] bg-[#e58e27] bg-opacity-55">
            پیشنهاد سردبیر
          </p>
          <div className="flex flex-col h-full w-1/2 pb-5 justify-center  items-center">
            <AuthorItems />
          </div>
          <div className="w-1/2 h-full flex items-end px-6 pb-8">
            <div className="w-full h-[14rem] pt-4 px-3 backdrop-contrast-100 shadow-inner rounded-xl  bg-[#000000] bg-opacity-40 backdrop-blur-[8px]">
              <p className="text-[#ffffff] text-2xl text-right">
                The withcer 3 : wild hunt
              </p>
              <p className="text-[#9a9a9a] text-sm text-right mt-1">
                witcher 3 دانلود بازی فوق العاده زیبا <br />
                بازی The Witcher 3 یعنی ماجراجویی مطلق در دنیایی سرشار از
                شگفتی‌های غیرمنتظره و میخکوب‌کننده. استودیوی لهستانی سی‌دی
                پراجکت در قسمت پایان‌دهنده‌ی سه‌گانه‌ی حماسی فانتزی‌شان، نهایت
                معنای «ویچر بودن» را به نمایش می‌گذارد.
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
                <p className="text-[#9a9a9a] text-xs">
                  fitgirl - dodi | 40 ~ 60 GB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSuggest;
