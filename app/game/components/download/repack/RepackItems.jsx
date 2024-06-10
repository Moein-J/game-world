const RepackItems = ({ title, setRepack, repack }) => {
  return (
    <>
      {title === repack ? (
        <button
          onClick={() => setRepack(title)}
          className="flex w-28 h-3 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#161a1e,45%,#282f36,55%,#161a1e)] bg-[length:200%_100%] px-10 py-6 font-medium text-[#ffffff] transition-colors"
        >
          {title}
        </button>
      ) : (
        <button
          className="flex w-28 h-3 items-center justify-center font-medium"
          onClick={() => setRepack(title)}
        >
          {title}
        </button>
      )}
    </>
  );
};

export default RepackItems;
