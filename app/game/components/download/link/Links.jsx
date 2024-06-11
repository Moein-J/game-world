import LinkData from "./LinkData";
import LinkTitle from "./LinkTitle";

const Links = ({ repacks, repack }) => {
  return (
    <div
      dir="rtl"
      className="flex flex-col gap-4 w-full  bg-[#161a1e] p-6  text-right"
    >
      <LinkTitle repacks={repacks} repack={repack} />
      <LinkData links={repacks[repack].links} />
      <div className="text-[#9a9a9a] ">
        <p className="text-xl border-r-2 border-[#e58e27] p-2">
          فایل های اضافه
        </p>
        <p>دانلود آپدیت 1.1</p>
        <LinkData links={repacks[repack].links} />
      </div>
      <div className="flex flex-col gap-2 text-[#9a9a9a]">
        <p className="text-xl border-r-2 border-[#e58e27] p-2">
          آموزش نصب نسخه {repack}
        </p>
        <p>
          نکته : ین آپدیت برای کسانی است که نسخه قدیمی (در انتهای همین مطلب
          لینک‌ها قرار دارد) را دارند. حتما باید ورژن شما v1.0.16.1 باشد. این
          آپدیت بر روی نسخه قدیمی ElAmigos تست و تاییدشده است و سایر نسخه‌ها
          توسط دانلودها تست نشده‌اند. طبعا نسخه‌های جدید RUNE و ElAmigos و
          FitGirl نیازی به این آپدیت ندارند. ...
        </p>
        <div>
          <p>
            1 - دقت داشته باشید که آنتی ویروس شما به طور کامل غیرفعال باشد.{" "}
            <br />
            2 - فایل های فشرده را توسط نرم افزار WinRar اکسترکت کنید و فایل ISO
            بدست آمده پس از اکسترکت را توسط نرم افزار Daemon Tools به صورت Mount
            اجرا کنید. <br />
            3 - به نصب بازی بپردازید. <br />
            4 - فایل های موجود در پوشه RUNE یا Crack را در محل نصب بازی جایگزین
            نمایید. <br />
            5 - از اجرای بازی لذت ببرید. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;
