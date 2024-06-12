const Footer = () => {
  return (
    <div className="flex gap-16 justify-center">
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] px-16 py-8 font-medium text-[#ffffff] transition-colors">
        آخرین بازی ها
      </button>

      <button type="button" className="font-medium text-[#ffffff]">
        برترین ها
      </button>
    </div>
  );
};

export default Footer;
