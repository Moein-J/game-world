const Guide = ({ guides, repack }) => {
  return (
    <div className="flex flex-col gap-2 text-[#9a9a9a]">
      <p className="text-xl border-r-2 border-[#e58e27] p-2">
        آموزش نصب نسخه {repack}
      </p>
      <p>
        نکته : ین آپدیت برای کسانی است که نسخه قدیمی (در انتهای همین مطلب
        لینک‌ها قرار دارد) را دارند. حتما باید ورژن شما v1.0.16.1 باشد. این
        آپدیت بر روی نسخه قدیمی ElAmigos تست و تاییدشده است و سایر نسخه‌ها توسط
        دانلودها تست نشده‌اند. طبعا نسخه‌های جدید RUNE و ElAmigos و FitGirl
        نیازی به این آپدیت ندارند. ...
      </p>
      <div>
        {guides.map((guide, index) => (
          <p>
            {index + 1} - {guide}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Guide;
