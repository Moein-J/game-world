const CardData = ({ title, list }) => {
  return (
    <>
      <div className="flex justify-center items-center w-full px-2 gap-4">
        <div className="border-t-2 border-[#9a9a9a] flex-grow"></div>
        <p className="text-[#fff]">{title}</p>
        <div className="border-t-2 border-[#9a9a9a] flex-grow"></div>
      </div>
      <div className=" p-4 flex flex-col gap-2">
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 text-nowrap text-center gap-2 w-full text-[#9a9a9a]"
          >
            <p>{item.date || item.value}</p>
            <p>{item.author}</p>
            <p className="text-right">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardData;
