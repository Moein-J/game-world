const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="relative left-0 w-full h-[20rem] px-10 pt-8 pb-2 text-links bg-[#000] flex flex-col justify-between"
    >
      <div className="flex flex-col gap-4">
        <p className="text-2xl text-[#fff]">راه های ارتباطی</p>
        <p>ایمیل : moein.mj69@gmail.com</p>
        <p>تلفن : 09159927832</p>
        <p>گیت هاب : https://github.com/Moein-J</p>
        <p>آدرس : مشهد</p>
      </div>
      <div className="flex  justify-center items-center">
        <p>POWERED BY NEXTJS/EXPRESSJS -- ALL RIGHTS RESERVED ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
