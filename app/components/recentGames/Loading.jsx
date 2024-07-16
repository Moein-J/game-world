const Loading = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index, item) => (
        <div
          key={index}
          className="animate-pulse flex flex-col gap-4 h-full md:w-[90%] w-52 rounded-xl bg-[#2a323a] py-2 px-4"
        >
          <div className="w-full h-36 relative"></div>
        </div>
      ))}
    </>
  );
};

export default Loading;
