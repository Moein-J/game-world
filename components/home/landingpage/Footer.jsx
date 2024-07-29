"use client";
const Footer = () => {
  return (
    <div className="flex xs:gap-12 md:gap-12 lg:gap-16 justify-center">
      <button
        onClick={() => {
          const elm = document.getElementById("recent-games");
          elm.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }}
        className="inline-flex h-12 xs:px-8 xs:py-4 lg:px-16 lg:py-8  animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] font-medium text-[#ffffff] transition-colors"
      >
        آخرین بازی ها
      </button>

      <button
        onClick={() => {
          const elm = document.getElementById("popular-games");
          elm.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }}
        type="button"
        className="font-medium text-[#ffffff]"
      >
        برترین ها
      </button>
    </div>
  );
};

export default Footer;
