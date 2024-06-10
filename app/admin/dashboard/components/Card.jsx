const Card = ({ icon, value, text, CardData, bgColor }) => {
  return (
    <div className="px-20">
      <div id={text} className={`${bgColor} w-full h-full rounded-xl flex flex-col`}>
        <div className="h-40 w-full flex">
          <div className="flex-grow flex justify-center items-center p-4  ">
            {icon}
          </div>
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-3xl text-[#fff] font-bold">{value}</h1>
            <h1 className="text-2xl text-[#fff] font-bold">{text}</h1>
          </div>
        </div>
        {CardData}
        <div className="flex justify-center">
          <button className="text-lg text-[#9a9a9a] border border-1 border-[#fff] rounded-xl px-4">
            جزئیات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
